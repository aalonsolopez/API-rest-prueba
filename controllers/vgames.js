var mongoose = require("mongoose");
var vgame = mongoose.model("vgames");

//GET - Return all tvshows in the DB
exports.findAllTVShows = function (req, res) {
  vgame.find(function (err, vgames) {
    if (err) res.send(500, err.message);

    console.log("GET /tvshows");
    res.status(200).jsonp(vgames);
  });
};