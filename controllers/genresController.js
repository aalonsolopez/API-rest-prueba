const genre = require('../models/genre');

//GET

function getGenres(req, res) {
  genre.find({}).exec((err, genreData) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.send(genreData);
  });
}

// POST a new Genre
function addGenre(req, res) {
  const genreAux = new genre(req.body);

  genreAux.save((err, newGenre) => {
    if (err) {
      return res.status(400).send({ message: 'Error saving genre', error: err });
    }
    return res.status(200).send(newGenre);
  });
}

module.exports = {
  addGenre, 
  getGenres,
};