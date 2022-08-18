const Order = require("../models/order");
const User = require("../models/user");

async function store(req, res) {
    let user = await User.findById(req.body.userId);
    const orderProducts = [...user.cart.items];
    user = await user.populate('cart.items.product');
    let orderAmount = 0;
    user.cart.items.forEach(element => {
        orderAmount += (element.product.price * element.quantity);
    });
    let order = await Order.create({
        user: user._id.toString(),
        products: orderProducts,
        amount: orderAmount
    });
    res.send(`Thank You ${user.name}, Your Order has been Placed Successfully.`);
}

module.exports = {
    store
}