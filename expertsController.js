const Expert = require('../models/Expert');

// Fetch all experts
exports.getAllExperts = async (req, res) => {
    try {
        const experts = await Expert.find();
        res.status(200).json(experts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching experts', error });
    }
};
