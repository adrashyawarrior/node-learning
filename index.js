const express = require("express")
const EventEmitter = require("events")

const app = express();
const event = new EventEmitter();

let count = 0;
event.on("ApiCalled", () => {
    count++;
});

app.get('', (req, res) => {
    event.emit("ApiCalled");
    res.send("API Called: " + count);
});

app.listen(4000)