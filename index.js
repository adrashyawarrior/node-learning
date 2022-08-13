const express = require("express");
const path = require("path");
const ageMiddleware = require("./middleware");
const route = express.Router();
const app = express();

const pagePath = path.join(__dirname, 'pages');

route.use(ageMiddleware);

app.get('', (req, res) => {
    res.sendFile(`${pagePath}/index.html`);
});

route.get('/about', (req, res) => {
    res.sendFile(`${pagePath}/about.html`);
});

route.get('/contact', (req, res) => {
    res.sendFile(`${pagePath}/contact.html`);
});

app.use('/', route);

app.listen(4000);