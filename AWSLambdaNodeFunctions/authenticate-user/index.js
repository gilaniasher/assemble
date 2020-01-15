const neo4j = require('neo4j-driver');
const parser = require('parse-neo4j');
const driver = neo4j.driver('bolt://assemble-neo4j.ml', neo4j.auth.basic('neo4j', 'i-04d98b05c5ff39997'));
const session = driver.session();

exports.handler = async (event, context) => {
    const email = event.queryStringParameters.email;

    if (email == null) {
        session.close();
        driver.close();

        return {
            'statusCode': 400,
            'body': JSON.stringify('Email was not provided')
        }
    }

    return session
        .run(`MATCH (n:User {email: '${email}'}) RETURN n.passHash as passHash`)
        .catch((err) => {
            console.log(err);
            session.close();
            driver.close();

            return {
                'statusCode': 400,
                'body': JSON.stringify(err)
            }
        })
        .then(parser.parse)
        .then(function (parsed) {
            session.close();
            driver.close();

            if (parsed.length == 0) {
                return {
                    'statusCode': 400,
                    'body': JSON.stringify('Email not found')
                }
            } else if (parsed.length > 1) {
                return {
                    'statusCode': 400,
                    'body': JSON.stringify('More than 1 email found. Should not happen')
                }
            } else {
                return {
                    'statusCode': 200,
                    'body': JSON.stringify({
                        'passHash': parsed[0]
                    })
                }
            }
        })
        .catch(function (parseError) {
            console.log(parseError);
            session.close();
            driver.close();
            
            return {
                'statusCode': 400,
                'body': JSON.stringify(parseError)
            }
        });
}
