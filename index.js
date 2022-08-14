const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://lalit:8gGQeRMMmhJlALfd@cluster0.otjpmcp.mongodb.net/test?retryWrites=true&w=majority");

// Schema
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

// Model
const Product = new mongoose.model('products', ProductSchema);

// create
const create = async () => {
    let product = new Product({
        name: "Realme 3",
        price: 9999
    });
    product = await product.save();
    console.log(product);
}

// update
const update = async () => {
    let product = await Product.update(
        { name: "Realme 3" },
        {
            $set: { name: "Realme C3" }
        }
    );
    console.log(product);
}

update();
