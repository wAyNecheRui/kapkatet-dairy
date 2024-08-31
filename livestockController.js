const Livestock = require('../models/Livestock');

exports.getLivestock = async (req, res) => {
  try {
    const livestock = await Livestock.find();
    res.json(livestock);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching livestock' });
  }
};

exports.addLivestock = async (req, res) => {
  try {
    const newLivestock = await Livestock.create(req.body);
    res.status(201).json(newLivestock);
  } catch (error) {
    res.status(400).json({ error: 'Error adding livestock' });
  }
};
// Fetch paginated livestock data
exports.getPaginatedLivestock = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    try {
        const livestock = await Livestock.find()
            .skip((page - 1) * limit)
            .limit(limit);
        res.status(200).json(livestock);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching paginated livestock', error });
    }
};
