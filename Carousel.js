const mongoose = require('mongoose');

const CarouselSchema = new mongoose.Schema({
  image: { type: String, required: true },
  caption: { type: String },
});

module.exports = mongoose.model('Carousel', CarouselSchema);
