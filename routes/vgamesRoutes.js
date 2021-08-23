const { Router } = require('express');
const vgamesController = require('../controllers/vgamesController');

const router = Router();

router.get('/vgames', vgamesController.findAllVgames);
router.get('/vgames/:id', vgamesController.findVgameById);
router.post('/vgames', vgamesController.addVgame);
router.put('/vgames/:id', vgamesController.updateVgame);
router.delete('/vgames/:id', vgamesController.deleteVgame);

module.exports = router;
