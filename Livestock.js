const mongoose = require('mongoose');

const LivestockSchema = new mongoose.Schema({
  name: { type: String, required: true },       // Name of the livestock
  breed: { type: String, required: true },      // Breed of the livestock
  age: { type: Number, required: true },        // Age of the livestock
  price: { type: Number, required: true },      // Price of the livestock
  location: { type: String, required: true },   // Location of the livestock
  description: { type: String },                // Description of the livestock
  image: { type: String },                      // Image URL of the livestock
  availability: {                               // Availability status of the livestock
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Livestock', LivestockSchema);
