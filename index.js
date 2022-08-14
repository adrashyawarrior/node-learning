const { MongoClient } = require("mongodb")

// Connection String
// const url = 'mongodb://localhost:27017';
const url = "mongodb+srv://lalit:8gGQeRMMmhJlALfd@cluster0.otjpmcp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

// Database Name
const database = "test";


async function main() {
    // Connect
    await client.connect();
    console.log("Connected to Mongo Server Successfully.");

    // Select Database
    let db = client.db(database);

    // Select Collection
    let collection = db.collection('User');

    // Apply Query
    let result = await collection.find({}).toArray();

    // Printing Result
    console.log(result);

    return "Done";
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => { client.close() });