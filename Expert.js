const mongoose = require('mongoose');

const ExpertSchema = new mongoose.Schema({
    name: String,
    expertise: String,
    contactInfo: String,
});

module.exports = mongoose.model('Expert', ExpertSchema);
