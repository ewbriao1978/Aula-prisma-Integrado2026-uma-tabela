const express = require('express');
const router = express.Router();
const myController = require('../controllers/myController');

// Define your routes here
router.get('/hello', myController.sayHello);

module.exports = router;