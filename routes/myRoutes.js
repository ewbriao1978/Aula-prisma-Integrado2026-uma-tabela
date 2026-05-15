const express = require('express');
const router = express.Router();
const myController = require('../controllers/myController');

// Define your routes here
router.get('/hello', myController.sayHello);

// rotas de pets
router.get('/pets', myController.getPets);
router.get('/pets/:id', myController.getPetById);
router.post('/pets', myController.insertPet);
router.delete('/pets/:id', myController.deletePet);
router.put('/pets/:id', myController.updatePet);

module.exports = router;