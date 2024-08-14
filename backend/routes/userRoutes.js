// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to handle user login
router.post('/login', userController.login);

// Route to handle user registration
router.post('/register', userController.register);
router.get('/users', userController.getAllUsers);

module.exports = router;
