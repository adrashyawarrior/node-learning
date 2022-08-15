// Core Modules
const express = require('express')

// Project Modules
const productRoutes = require('./product-routes')
const errorRoutes = require('./error-routes')

const router = express.Router();

router.use(express.json());
router.use('/products', productRoutes);
router.use(errorRoutes);

module.exports = router;
