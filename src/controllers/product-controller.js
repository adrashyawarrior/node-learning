
const Product = require('../models/product')

async function index(req, res) {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (error) {
        res.send(error);
    }
}

async function create(req, res) {
    try {
        let product = new Product(req.body);
        product = await product.save();
        res.send("Product Created Successfully.");
    } catch (error) {
        res.send(error);
    }
}

async function update(req, res) {
    try {
        let product = await Product.updateOne(
            { _id: req.params.id },
            {
                name: req.body.name
            }
        );
        if (product.acknowledged)
            res.send(await Product.findById(req.params.id));
        else
            res.send("Something went wrong.");
    } catch (error) {
        res.send(error);
    }
}

async function destroy(req, res) {
    try {
        let product = await Product.findByIdAndDelete(req.params.id);
        if (product)
            res.send(product);
        else
            res.send("Something went wrong.");
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    index,
    create,
    update,
    destroy
};