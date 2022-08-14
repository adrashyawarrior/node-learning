const { MongoClient } = require("mongodb")

// Connection String
// const url = 'mongodb://localhost:27017';
const url = "mongodb+srv://lalit:8gGQeRMMmhJlALfd@cluster0.otjpmcp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

// Database Name
const database = "test";


async function connectDB() {
    // Connect
    await client.connect();
    console.log("Connected to Mongo Server Successfully.");

    // Select Database
    return client.db(database);

}

function closeConnection() {
    client.close()
        .then(console.log("MongoDB Connection Closed Successfully."))
        .catch(console.error);
}

module.exports = { connectDB, closeConnection };