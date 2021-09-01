const express = require('express');
const methodOverride = require('method-override');
const vgamesRoutes = require('./routes/vgamesRoutes');
const genresRoutes = require('./routes/genresRoutes');

const app = express();
const router = express.Router();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride());

app.use(router);

app.use('/api', vgamesRoutes, genresRoutes);

module.exports = app;
