require('./config')
const express = require("express")
const productRoutes = require("./routes/product-routes")

const app = express();
app.use(productRoutes);
app.listen(4000)