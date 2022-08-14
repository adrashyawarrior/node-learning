require('./config')
const express = require("express")
const productRoutes = require("./routes/product-routes")

const app = express();
app.use(productRoutes);

// 404
app.use((req, res, next) => {
    res.status(404).send("<h1>Page Not Found</h1>");
});
app.listen(4000)