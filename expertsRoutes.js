const express = require('express');
const router = express.Router();
const expertsController = require('../controllers/expertsController');

// Route to get all experts
router.get('/', expertsController.getAllExperts);

module.exports = router;
