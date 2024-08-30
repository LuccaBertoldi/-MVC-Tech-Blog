const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to sign up a new user
router.post('/signup', userController.signup);

// Route to login a user
router.post('/login', userController.login);

// Route to log out a user
router.post('/logout', userController.logout);

module.exports = router;
