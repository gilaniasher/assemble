const neo4j = require('neo4j-driver');
const driver = neo4j.driver('bolt://assemble-neo4j.ml:7687', neo4j.auth.basic('neo4j', 'i-04d98b05c5ff39997assemble'));
const session = driver.session();

exports.handler = async (event) => {
    let univ;

    session.run('MATCH (n:User {name: \'Asher Gilani\'}) RETURN n')
    .then(result => {
        univ = result.records[0].get(0).properties.university;
    });

    const response = {
        'statusCode': 200,
        'body': JSON.stringify(univ),
    };
    
    return response;
};
