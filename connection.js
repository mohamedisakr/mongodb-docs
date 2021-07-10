const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

// console.log(process.env.CONNECTION_STRING);
module.exports = connection;
