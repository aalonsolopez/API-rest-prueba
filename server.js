const mongoose = require('mongoose');
const app = require('./app');

const mongodb = process.env.mongod || 'mongodb://localhost/vgames';
const port = process.env.port || 3000;

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) throw err;

  if (err) {
    console.log(`ERROR: connecting to Database. ${err}`);
  }

  app.listen(port, console.log('Node server running on http://localhost:3000'));
});

module.exports = app;
