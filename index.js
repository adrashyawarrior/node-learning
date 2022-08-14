require("./config")
const express = require("express")
const Product = require("./models/product")


const app = express();

app.use(express.json());

app.get('', async (req, res) => {
    const products = await Product.find();
    res.send(products);
});

app.post('', async (req, res) => {
    let data = req.body;
    let product = new Product(data);
    product = await product.save();
    data = {
        success: true,
        message: "Product Created Successfully.",
        data: product
    };
    res.send(data);
});

app.get('/search/:key', async (req, res) => {
    let products = await Product.find({
        $or: [
            { name: { $regex: req.params.key } },
            { brand: { $regex: req.params.key } }
        ]
    });
    res.send(products);
});

app.delete('/:_id', async (req, res) => {
    await Product.deleteOne(req.params);
    data = {
        success: true,
        message: "Product Deleted Successfully."
    };
    res.send(data);
});

app.put('/:_id', async (req, res) => {
    let product = await Product.updateOne(req.params, { $set: req.body });
    data = {
        success: true,
        message: "Product Updated Successfully.",
        data: product
    };
    res.send(data);
});

app.listen(4000);