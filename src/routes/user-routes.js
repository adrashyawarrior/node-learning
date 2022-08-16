const express = require('express')
const userController = require('../controllers/user-controller')

const router = express.Router();

router.get('', userController.index);
router.get('/:id', userController.show);
router.post('', userController.create);
router.delete('/:id', userController.destroy);
router.post('/additemtocart', userController.addItemToCart);

module.exports = router;