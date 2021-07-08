const bodyParser = require("body-parser");
var express = require("express"),
    app = express(),
    http = require("http"),
    methodOverride = require("method-override");
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

var router = express.Router();

router.get("/", function (req, res) {
    res.send("Hello World!");
});

app.use(router);

mongoose.connect("mongodb://localhost/vgames", function (err, res) {
    if (err) {
        console.log("ERROR: connecting to Database. " + err);
    }

    app.listen(3000, function () {
        console.log("Node server running on http://localhost:3000");
    });
});
