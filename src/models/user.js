const { ObjectId } = require('mongodb');
const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    cart: {
        items: [{
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }]
    }
});


UserSchema.methods.addItemToCart = async function (product) {
    const productIndex = this.cart.items.findIndex((item) => {
        return item.productId.valueOf() === product._id.valueOf();
    });
    const cartItems = [...this.cart.items];
    if (productIndex >= 0) {
        cartItems[productIndex].quantity += 1;
    } else {
        cartItems.push({
            productId: product._id,
            quantity: 1
        });
    }
    this.cart = { items: cartItems };
    return this.save();
}


const User = mongoose.model('User', UserSchema);

module.exports = User;