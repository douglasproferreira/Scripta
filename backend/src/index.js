const express = require("express");
// const bodyParser = require("body-parser");

const requireDir = require("require-dir");

const app = express();

app.use(express.json());

requireDir('./app/models')

app.use("/user", require("./app/routes/UserRoute"));
// app.use("/class", require("./app/routes/ClassRoute"));



app.listen(3000);