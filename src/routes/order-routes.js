const express = require('express');
const OrderController = require('../controllers/order-controller');

const router = express.Router();

router.post('', OrderController.store);

module.exports = router;