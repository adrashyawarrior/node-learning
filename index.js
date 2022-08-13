const express = require("express");
const path = require("path");

const app = express();

const pagePath = path.join(__dirname, 'pages');

app.get('', (req, res) => {
    res.sendFile(`${pagePath}/index.html`);
});

app.get('/about', (req, res) => {
    res.sendFile(`${pagePath}/about.html`);
});

app.get('/contact', (req, res) => {
    res.sendFile(`${pagePath}/contact.html`);
});

app.listen(4000);