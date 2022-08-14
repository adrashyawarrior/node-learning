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
    client.close().then(console.log("Connection Closed Successfully.")).catch(console.error);
}

async function findAll(collection) {
    let db = await connectDB();
    collection = db.collection(collection);
    let result = await collection.find({}).toArray();
    closeConnection();
    return result;

}

async function create(collection, data) {
    const db = await connectDB();
    collection = db.collection(collection);
    const result = await collection.insert(data);
    return result;
}

async function updateOne(collection, where, data) {
    const db = await connectDB();
    collection = db.collection(collection);
    const result = await collection.updateOne(where, data);
    return result;
}

async function update(collection, where, data) {
    const db = await connectDB();
    collection = db.collection(collection);
    const result = await collection.updateMany(where, data);
    return result;
}

module.exports = {
    findAll,
    create,
    updateOne,
    update
};