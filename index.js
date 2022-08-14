const { MongoClient } = require("mongodb")
const url = "mongodb+srv://lalit:8gGQeRMMmhJlALfd@cluster0.otjpmcp.mongodb.net/test?retryWrites=true&w=majority";

const database = "test";
const client = new MongoClient(url);
async function getData() {
    let conn = await client.connect();
    let db = conn.db(database);
    let collection = db.collection('User');
    let result = await collection.find({}).toArray();
    console.log(result);
}

getData();