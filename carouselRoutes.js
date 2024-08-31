// carouselRoutes.js

const express = require('express');
const router = express.Router();
const carouselController = require('../controllers/carouselController');

// Add a new carousel image
router.post('/add', carouselController.addImage);

// Get all carousel images
router.get('/', carouselController.getAllImages);

// Get a single carousel image by ID
router.get('/:id', carouselController.getImageById);

// Update a carousel image by ID
router.put('/:id', carouselController.updateImageById);

// Delete a carousel image by ID
router.delete('/:id', carouselController.deleteImageById);

module.exports = router;
