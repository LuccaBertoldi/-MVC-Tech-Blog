const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { isAuthenticated } = require('../middleware/auth');

// Route to create a new post
router.post('/create', isAuthenticated, postController.createPost);

// Route to update a post
router.put('/update/:id', isAuthenticated, postController.updatePost);

// Route to delete a post
router.delete('/delete/:id', isAuthenticated, postController.deletePost);

module.exports = router;
