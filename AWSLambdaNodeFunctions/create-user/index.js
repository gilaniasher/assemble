const neo4j = require('neo4j-driver');
const driver = neo4j.driver('bolt://assemble-neo4j.ml', neo4j.auth.basic('neo4j', 'i-04d98b05c5ff39997'));
const session = driver.session();

exports.handler = async (event, context) => {
    return session
        .run(`CREATE (n:User {name: 'Lambda Test'})`)
        .then(() => {
            session.close();
            driver.close();

            return {
                'statusCode': 200
            }
        })
        .catch((err) => {
            console.log(err);
            session.close();
            driver.close();

            return {
                'statusCode': 400
            }
        })
};
