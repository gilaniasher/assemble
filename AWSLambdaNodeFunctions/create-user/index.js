const neo4j = require('neo4j-driver');
const driver = neo4j.driver('bolt://assemble-neo4j.ml', neo4j.auth.basic('neo4j', 'i-04d98b05c5ff39997'));
const session = driver.session();

exports.handler = async (event, context) => {
    let name = event.queryStringParameters.name;
    let email = event.queryStringParameters.email;
    let passHash = event.queryStringParameters.passHash;

    if (name == null || email == null || passHash == null) {
        return {
            'statusCode': 400,
            'error': 'A function parameter was missing'
        }
    }

    return session
        .run(
            `CREATE (:User {
                name: '${name}',
                email: '${email}',
                passHash: '${passHash}'
            })`
        )
        .then(() => {
            session.close();
            driver.close();

            return {
                'statusCode': 200,
                'body': 'User created'
            }
        })
        .catch((err) => {
            console.log(err);
            session.close();
            driver.close();

            return {
                'statusCode': 400,
                'error': JSON.stringify(err)
            }
        })
};
