var mongoose = require("mongoose");
var vgame = require("../models/videogames");

//GET - Return all vgames in the DB
exports.findAllVgames = function (req, res) {
  vgame.find(function (err, vgameData) {
    if (err) {
      res.status(200).send(err.message)
    }
    res.send(vgameData)});
};

//GET - Return a  vgame with specified ID
exports.findById = function (req, res) {
  vgame.findById(req.params.id, function (err, vgames) {
    if (err) return res.send(500, err.message);

    console.log("GET /vgame/" + req.params.id);
    res.status(200).jsonp(vgame);
  });
};

//POST - Insert a new  vgame in the DB
exports.addVgame = function (req, res) {
  console.log("POST");
  console.log(req.body);

  var vgameAux = new vgame({
    title: req.body.title,
    year: req.body.year,
    company: req.body.company,
    poster: req.body.poster,
    genre: req.body.genre,
    summary: req.body.summary,
  });

  vgame.save(vgameAux);
};

exports.updateVgame = function (req, res) {
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
    function (err, success) {
      if (err) res.send(500, err.message);
      res.send(success);
    }
  );
};

exports.deleteVgame = function (req, res) {
  vgame.findByIdAndRemove(req.param.id, function (err) {
    if (err) return res.status(500).send(err.message);
    res.status(200).send();
  });
};