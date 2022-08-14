const express = require('express');
const Product = require('../models/product');

const router = express.Router();

router.get('/products', async (req, res) => {
    let products = await Product.find();
    res.send(products);
});

module.exports = router;