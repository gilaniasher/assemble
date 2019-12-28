const neo4j = require('neo4j-driver');
const driver = neo4j.driver('bolt://assemble-neo4j.ml', neo4j.auth.basic('neo4j', 'i-04d98b05c5ff39997'));
const session = driver.session();

exports.handler = async (event) => {
    let univ;

    session
        .run(`CREATE (n:User {name: 'Lambda Test'})`)
        .then(function (result) {
            console.log('The function ran');
            console.log(JSON.stringify(result));
        })
        .catch(function (error) {
            console.log('The function did not run');
            console.log(JSON.stringify(error));
        });

    const response = {
        'statusCode': 200,
        'body': JSON.stringify(univ),
    };
    
    return response;
};
