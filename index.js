const express = require("express");
const path = require("path");

const app = express();

const pagePath = path.join(__dirname, 'pages');

// middleware
const ageMiddleware = (req, res, next) => {
    if (!req.query.age) {
        res.send("Please provide your age.");
    } else if (parseInt(req.query.age) < 18) {
        res.send("Only 18+ users allwed.");
    } else {
        next();
    }
}
app.use(ageMiddleware);

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