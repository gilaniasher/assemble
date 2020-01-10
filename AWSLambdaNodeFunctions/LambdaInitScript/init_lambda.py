import re
import os
import sys
from shutil import copyfile

fn_name = input('Enter the name of the function in camelcase (e.g AuthenticateUser): ')
http_method = input('HTTP Method type (GET, POST, etc.): ').lower()
fn_uri = re.sub(r'(?<!^)(?=[A-Z])', '-', fn_name).lower()
script_dir = sys.path[0]

if http_method not in ['get', 'post', 'put', 'patch', 'delete']:
    sys.exit('Invalid HTTP Method. Only accepting GET, POST, PUT, PATCH, or DELETE')

os.makedirs(f'{fn_name}/{fn_uri}')

# Create template.yaml file
os.chdir(fn_name)

with open(os.path.join(script_dir, 'template.yaml')) as template_yaml_file:
    template_yaml_contents = template_yaml_file.read()

template_yaml_contents = re.sub('post', http_method, template_yaml_contents)
template_yaml_contents = re.sub('AuthenticateUser', fn_name, template_yaml_contents)
template_yaml_contents = re.sub('authenticate-user', fn_uri, template_yaml_contents)

with open('template.yaml', 'w') as template_yaml_file:
    template_yaml_file.write(template_yaml_contents)

# Create package.json file
os.chdir(fn_uri)

with open(os.path.join(script_dir, 'package.json')) as package_json_file:
    package_json_contents = package_json_file.read()

package_json_contents = re.sub('AuthenticateUser', fn_name, package_json_contents)
package_json_contents = re.sub('authenticateuser', fn_name.lower(), package_json_contents)

with open('package.json', 'w') as package_json_file:
    package_json_file.write(package_json_contents)

# Create index.js file
copyfile(os.path.join(script_dir, 'index.js'), './index.js')
