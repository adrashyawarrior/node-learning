// Core Modules
const express = require("express");

// Project Modules
const errorController = require('../controllers/error-controller')

const router = express.Router();

router.use(errorController.pageNotFound);

module.exports = router;