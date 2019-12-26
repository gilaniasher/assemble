const neo4j = require('neo4j-driver');
const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'assemble'));
const session = driver.session();

exports.handler = async (event) => {
    var univ;

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
