const mongoose = require('mongoose');
const config = require('../config');

//连接mongodb
var connection = () => mongoose.connect(config.url)
  .then(() => console.log(`MongoDB connecting with ${config.url}`))
  .catch(err => console.error('Connecting error:', err));

/* mongoose.connect(config.url);

db.on('error', err => {
  console.log('Connecting error:', err);
});

db.once("open", () => {
  console.log(`MongoDB connecting with ${config.url}`);
}) */

exports.connect = connection;