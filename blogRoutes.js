const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

// Route to get all blog posts
router.get('/', blogController.getAllPosts);

module.exports = router;
