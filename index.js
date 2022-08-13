const express = require("express");

const app = express();

app.get('', (req, res) => {
    res.send("Hello World!");
});

app.get('/about', (req, res)=>{
    res.send("Hello From About Us!");
});

app.get('/contact', (req, res)=>{
    res.send("Hello From Contact Us!");
});

app.listen(4000);