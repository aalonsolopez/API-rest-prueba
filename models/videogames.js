exports = module.exports = function (app, mongoose) {

  var videogameSchema = new mongoose.Schema({
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

  mongoose.model('vgames', videogameSchema);
};