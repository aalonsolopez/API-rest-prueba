const mongoose = require('mongoose');

const { Schema } = mongoose;

const genreSchema = new Schema({
  genre: { type: String, required: true },
});

module.exports = mongoose.model('genre', genreSchema);
