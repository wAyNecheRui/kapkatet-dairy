// routes/smsRoutes.js

const express = require('express');
const router = express.Router();
const smsController = require('../controllers/smsController');

// Endpoint to send an SMS
router.post('/send', async (req, res) => {
    try {
        const { to, message } = req.body;
        const result = await smsController.sendSMS(to, message);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
