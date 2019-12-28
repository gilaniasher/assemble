const neo4j = require('neo4j-driver');
const driver = neo4j.driver('bolt://assemble-neo4j.ml', neo4j.auth.basic('neo4j', 'i-04d98b05c5ff39997'));
const session = driver.session();

exports.handler = async (event) => {
    let univ;
    
    session
        .run(`MATCH (n:User) RETURN n`)
        .then(function (result) {
            result.records.forEach(function (record) {
                console.log(record._fields[0].properties);
                univ = record._fields[0].properties;
            });
        })
        .catch(function (err) {
            console.log('ERROR WITH NEO4J CALL');
            console.log(err);
            univ = err;
        });

    const response = {
        'statusCode': 200,
        'body': JSON.stringify(univ),
    };
    
    return response;
};
