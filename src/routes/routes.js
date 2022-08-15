// Core Modules
const express = require('express')

// Project Modules
const userRoutes = require('./user-routes')
const productRoutes = require('./product-routes')
const errorRoutes = require('./error-routes')

const router = express.Router();

router.use(express.json());
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use(errorRoutes);

module.exports = router;
