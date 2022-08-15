// Core Modules
const express = require("express")

// Project Modules
require('./config')
const routes = require("./src/routes/routes")

// Create App
const app = express();

app.use(routes);

// Create Server
app.listen(4000)