const User = require("../models/user");
const Product = require("../models/product");

async function index(req, res) {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.send(error);
    }
}

async function create(req, res) {
    try {
        let user = new User(req.body);
        user = await user.save();
        if (user)
            res.send('User created successfully.');
        else
            res.send('Something went wrong.');
    } catch (error) {
        res.send(error);
    }
}

async function destroy(req, res) {
    try {
        let user = await User.findByIdAndDelete(req.params.id);
        res.send("User Deleted Successfully.");
    } catch (error) {
        res.send(error);
    }
}

async function show(req, res) {
    try {
        let user = await User.findById(req.params.id);
        user = await user.populate("cart.items.product");
        res.send(user);
    } catch (error) {
        res.send(error);
    }
}

async function addItemToCart(req, res) {
    try {
        let product = await Product.findById(req.body.productId);
        let user = await User.findById(req.body.userId);
        await user.addItemToCart(product);
        res.send("Item Added Successfully.");
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    index,
    show,
    create,
    destroy,
    addItemToCart,
};
