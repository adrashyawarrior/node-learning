const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;