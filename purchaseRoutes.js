const express = require('express');
const router = express.Router();
const purchaseController = require('../controllers/purchaseController');

// Route to purchase livestock
router.post('/buy', purchaseController.purchaseLivestock);

module.exports = router;
