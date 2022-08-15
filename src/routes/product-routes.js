const express = require('express');

const productController = require('../controllers/product-controller')

const router = express.Router();

router.get('', productController.index);
router.post('', productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.destroy);

module.exports = router;