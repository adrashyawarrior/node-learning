const { MongoClient } = require("mongodb")
const { connectDB, closeConnection } = require("./mongodb")

async function main() {
    // Connect Database
    let db = await connectDB();

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
    .finally(() => { closeConnection() });