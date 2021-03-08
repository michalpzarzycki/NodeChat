const { MongoClient } = require('mongodb');

module.exports.main = async function main() {
    const uri = "mongodb+srv://<username>:<password>@cluster0.itpbg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority?authMechanism=MONGODB-CR";
    const client = new MongoClient(uri, { useUnifiedTopology: true });
    console.log("ITS ALL RIGHT")

    try {
        
        await client.connect();
    
        await listDatabases(client);
    
    } catch (e) {
    
        console.error(e);
    
    }
    finally {

        await client.close();
    
    }
}
async function listDatabases(client){

    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");

    databasesList.databases.forEach(db => console.log(` - ${db.name}`));

};
 
