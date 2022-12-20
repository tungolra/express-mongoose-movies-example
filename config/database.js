const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movies',
{ useNewUrlParser: true, useCreateIndex: true }
);

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});