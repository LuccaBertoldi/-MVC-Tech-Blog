const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController.js');

// Route to get the homepage
router.get('/', homeController.getHomepage);

// Route to get a specific post by ID
router.get('/post/:id', homeController.getPostDetails);

module.exports = router;
