const mongodb = require("./mongodb")
const express = require("express")

const app = express();

app.use(express.json());

app.get('', async (req, res) => {
    let result = await mongodb.findAll("User");
    res.send(result);
});

app.post('', async (req, res) => {
    let data = req.body;
    let result = await mongodb.create("User", data);
    res.send(result);
});

app.put('/:name', async (req, res) => {
    let data = req.body;
    let result = await mongodb.updateOne("User", { name: req.params.name }, data);
    res.send(result);
});

app.delete('/:name', async (req, res) => {
    let result = await mongodb.deleteOne("User", { name: req.params.name });
    res.send(result);
});

app.listen(4000);