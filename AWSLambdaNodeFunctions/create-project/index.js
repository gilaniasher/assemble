const neo4j = require('neo4j-driver');
const driver = neo4j.driver('bolt://assemble-neo4j.ml', neo4j.auth.basic('neo4j', 'i-04d98b05c5ff39997'));
const session = driver.session();

exports.handler = async (event, context) => {
    const title = event.queryStringParameters.title;
    const privacy = event.queryStringParameters.privacy;
    const commitment = event.queryStringParameters.commitment;
    const description = event.queryStringParameters.description;
    const githubRepo = event.queryStringParameters.githubRepo;

    // Will have to implement this with graph connections. Do later
    const owners = event.queryStringParameters.owners;
    const collaborators = event.queryStringParameters.collaborators;
    const techTags = event.queryStringParameters.techTags;

    if (title == null || privacy == null || commitment == null) {
        session.close();
        driver.close();

        return {
            'statusCode': 400,
            'body': JSON.stringify('One field was left blank')
        }
    }

    return session
        .run(
            `CREATE (:Project {
                title: '${title}',
                privacy: ${privacy ? 'true' : 'false'},
                commitment: ${commitment},
                description: ${description != null ? `'${description}'` : null},
                github_repo: ${githubRepo != null ? `'${githubRepo}'` : null}
            })`
        )
        .then(() => {
            session.close();
            driver.close();

            return {
                'statusCode': 200,
                'body': JSON.stringify('Project created')
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
