'''
This script takes care of creating a new AWS Lambda function
Creates a folder with an index.js and a package.json file
Also updates the template.yaml file (or creates a new one if none is found in current directory)

Instructions:
pip install oyaml
Navigate to the directory where you want to create the Lambda function
python '.../LambdaInitScript/init_lambda.py'

You can then run your function by running: 
sam local invoke {AuthenticateUserFunction}

Or host a local server accepting the endpoints specified in the template.yaml file with:
sam local start-api
'''

import re
import os
import sys
from shutil import copyfile
import oyaml as yaml

# Get fn name, http verb, fn uri, and script directory
fn_name = input('Enter the name of the function in camelcase (e.g AuthenticateUser): ')
http_method = input('HTTP Method type (GET, POST, etc.): ').lower()
fn_uri = re.sub(r'(?<!^)(?=[A-Z])', '-', fn_name).lower()
script_dir = sys.path[0]

if http_method not in ['get', 'post', 'put', 'patch', 'delete']:
    sys.exit('Invalid HTTP Method. Only accepting GET, POST, PUT, PATCH, or DELETE')

os.mkdir(fn_uri)

# Create template.yaml file
if not os.path.exists('./template.yaml'):
    # There is no existing template.yaml file to append to. Use initial_template.yaml to create one
    with open(os.path.join(script_dir, './TemplateFiles/initial_template.yaml')) as template_yaml_file:
        template_yaml_contents = template_yaml_file.read()

    template_yaml_contents = re.sub('post', http_method, template_yaml_contents)
    template_yaml_contents = re.sub('AuthenticateUser', fn_name, template_yaml_contents)
    template_yaml_contents = re.sub('authenticate-user', fn_uri, template_yaml_contents)

    with open('template.yaml', 'w') as template_yaml_file:
        template_yaml_file.write(template_yaml_contents)
else:
    # A template.yaml file already exists so append to it
    with open('template.yaml', 'r') as template_yaml_file:
        template_yaml = yaml.load(template_yaml_file, Loader=yaml.BaseLoader)
    
    with open(os.path.join(script_dir, './TemplateFiles/function_resource.yaml')) as fn_resource_file:
        data = fn_resource_file.read()
    
    data = re.sub('post', http_method, data)
    data = re.sub('AuthenticateUser', fn_name, data)
    data = re.sub('authenticate-user', fn_uri, data)
    fn_resource = yaml.load(data, Loader=yaml.BaseLoader)

    with open(os.path.join(script_dir, './TemplateFiles/function_output.yaml')) as fn_output_file:
        data = fn_output_file.read()

    data = re.sub('AuthenticateUser', fn_name, data)
    fn_output = yaml.load(data, Loader=yaml.BaseLoader)

    # Add fn_resource and fn_output to template_yaml
    template_yaml['Resources'].update(fn_resource)
    template_yaml['Outputs'].update(fn_output)

    with open('template.yaml', 'w') as template_yaml_file:
        template_yaml_file.write(yaml.dump(template_yaml))
    
# Create package.json file
os.chdir(fn_uri)

with open(os.path.join(script_dir, './TemplateFiles/package.json')) as package_json_file:
    package_json_contents = package_json_file.read()

package_json_contents = re.sub('AuthenticateUser', fn_name, package_json_contents)
package_json_contents = re.sub('authenticateuser', fn_name.lower(), package_json_contents)

with open('package.json', 'w') as package_json_file:
    package_json_file.write(package_json_contents)

# Create index.js file
copyfile(os.path.join(script_dir, './TemplateFiles/index.js'), './index.js')
