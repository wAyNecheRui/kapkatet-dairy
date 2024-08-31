const Livestock = require('../models/Livestock');

// Purchase livestock
exports.purchaseLivestock = async (req, res) => {
    const { livestockId, buyerId } = req.body;

    try {
        // Find the livestock item by ID
        const livestock = await Livestock.findById(livestockId);
        
        if (!livestock) {
            return res.status(404).json({ message: 'Livestock not found' });
        }

        // Check if the livestock is available for purchase
        if (!livestock.availability) {
            return res.status(400).json({ message: 'This livestock is already sold' });
        }

        // Update availability status to false
        livestock.availability = false;
        await livestock.save();

        // Here you can also handle the buyer's information and transaction details
        // e.g., save transaction details in a separate Purchase model

        res.status(200).json({ message: 'Livestock purchased successfully', livestock });
    } catch (error) {
        res.status(500).json({ message: 'Error purchasing livestock', error });
    }
};
