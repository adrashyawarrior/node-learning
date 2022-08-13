const express = require("express");
const path = require("path");
const ageMiddleware = require("./middleware");

const app = express();

const pagePath = path.join(__dirname, 'pages');


app.get('', ageMiddleware, (req, res) => {
    res.sendFile(`${pagePath}/index.html`);
});

app.get('/about', ageMiddleware, (req, res) => {
    res.sendFile(`${pagePath}/about.html`);
});

app.get('/contact', ageMiddleware, (req, res) => {
    res.sendFile(`${pagePath}/contact.html`);
});

app.listen(4000);