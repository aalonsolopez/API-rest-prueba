var mongoose = require("mongoose"),
  Schema = mongoose.Schema;

var videogameSchema = new Schema({
  title: { type: String },
  year: { type: Number },
  company: { type: String },
  poster: { type: String },
  genre: {
    type: String,
    enum: ["MMO", "RPG", "Adventure", "Horror", "Sandbox", "Farming"],
  },
  summary: { type: String },
});

module.exports = mongoose.model("vgames", videogameSchema);