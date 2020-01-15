const neo4j = require('neo4j-driver');
const driver = neo4j.driver('bolt://assemble-neo4j.ml', neo4j.auth.basic('neo4j', 'i-04d98b05c5ff39997'));
const session = driver.session();

exports.handler = async (event, context) => {
    const name = event.queryStringParameters.name;
    const email = event.queryStringParameters.email;
    const passHash = event.queryStringParameters.passHash;

    if (name == null || email == null || passHash == null) {
        session.close();
        driver.close();

        return {
            'statusCode': 400,
            'body': JSON.stringify('One field was left blank')
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
                'body': JSON.stringify('User created')
            }
        })
        .catch((err) => {
            console.log(err);
            session.close();
            driver.close();

            return {
                'statusCode': 400,
                'body': JSON.stringify(err)
            }
        })
};
