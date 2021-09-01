const { Router } = require('express');
const genresController = require('../controllers/genresController');

const router = Router();

router.get('/genres', genresController.getGenres);
router.post('/genres', genresController.addGenre);

module.exports = router;
