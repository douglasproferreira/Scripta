const mongoose = require("mongoose");

mongoose.connect("mongodb://admin-scripta:Scripta2019@ds147451.mlab.com:47451/scripta", {
  useCreateIndex: true,
  useNewUrlParser: true
});

module.exports = mongoose;
