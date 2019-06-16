const mongoose = require("mongoose");

mongoose.connect("mongodb://admin:scripta2019@ds235197.mlab.com:35197/scripta", {
  useCreateIndex: true,
  useNewUrlParser: true
});

module.exports = mongoose;
