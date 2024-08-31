// routes/mpesaRoutes.js

const express = require('express');
const router = express.Router();
const mpesaController = require('../controllers/mpesaController');

// Endpoint to process M-Pesa payment
router.post('/payment', async (req, res) => {
    try {
        const { phoneNumber, amount } = req.body;
        const result = await mpesaController.lipaNaMpesaOnline(phoneNumber, amount);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
