const express = require('express');
const methodOverride = require('method-override');
const VgameCtrl = require('./controllers/vgames');

const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());

router.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(router);

// API routes

router.get('/vgames', VgameCtrl.findAllVgames);
router.post('/vgames', VgameCtrl.addVgame);

router.get('/vgames/:id', VgameCtrl.findVgameById);
router.put('/vgames/:id', VgameCtrl.updateVgame);
router.delete('/vgames/:id', VgameCtrl.deleteVgame);

app.use('/api', router);

module.exports = app;
