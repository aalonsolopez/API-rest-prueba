const vgame = require('../models/videogames');
require('../models/genre');

// GET - Return all vgames in the DB
function findAllVgames(req, res) {
  vgame.find({}).populate('genre', 'name').exec((err, vgameData) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.send(vgameData);
  });
}

// GET - Return a  vgame with specified ID
function findVgameById(req, res) {
  vgame.findById(req.params.id, (err, vgames) => {
    if (err) return res.status(400).send(err.message);
    console.log(`GET /vgame/${req.params.id}`);
    res.status(200).send(vgames);
  });
}

// POST - Insert a new  vgame in the DB
function addVgame(req, res) {
  const vgameAux = new vgame(req.body);

  vgameAux.save((err, newVgame) => {
    if (err) {
      return res.status(400).send({ message: 'Error saving videogame', error: err });
    }
    return res.status(200).send(newVgame);
  });
}

function deleteVgame(req, res) {
  vgame.findByIdAndDelete(req.params.id, (err) => {
    if (err) return res.status(400).send(err.message);
    return res.status(200).send();
  });
}

function updateVgame(req, res) {
  vgame.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      year: req.body.year,
      company: req.body.company,
      poster: req.body.poster,
      genre: req.body.genre,
      summary: req.body.summary,
    },
    {
      new: true,
      runValidators: true,
    },
    (err, success) => {
      if (err) { res.send(500, err.message); }
      res.send(success);
    },
  );
}

module.exports = {
  deleteVgame,
  updateVgame,
  addVgame,
  findAllVgames,
  findVgameById,
};
