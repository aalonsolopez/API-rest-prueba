const bodyParser = require("body-parser");
var VgameCtrl = require("./controllers/vgames");
var express = require("express"),
    app = express(),
    http = require("http"),
    server = http.createServer(app),
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

// API routes

router.get('/vgames', VgameCtrl.findAllVgames)
router.post('/vgames', VgameCtrl.addVgame)


router.get('/vgames/:id', VgameCtrl.findById)
router.put('/vgames/:id', VgameCtrl.updateVgame)
//router.delete('/vgames/:id', VgameCtrl.deleteVgame)


app.use('/api', router);

mongoose.connect("mongodb://localhost/vgames", function (err, res) {
    if (err) {
        console.log("ERROR: connecting to Database. " + err);
    }

    app.listen(3000, function () {
        console.log("Node server running on http://localhost:3000");
    });
});