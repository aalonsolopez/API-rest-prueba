const mongoose = require('mongoose');

const { Schema } = mongoose;

const videogameSchema = new Schema({
  title: {
    type: String || Boolean,
    unique: true,
    required: [true, 'Title required'],
  },
  year: {
    type: Number || String,
    min: 1900,
    max: new Date().getFullYear(),
    required: [true, 'Unknown'],
  },
  company: { type: String },
  poster: { type: String },
  genre: {
    type: [mongoose.SchemaTypes.ObjectId],
    ref: 'genre',
    default: [],
  },
  summary: { type: String },
});
module.exports = mongoose.model('vgames', videogameSchema);
