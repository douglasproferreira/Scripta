const express = require("express");
// const bodyParser = require("body-parser");

const requireDir = require("require-dir");


const app = express();

app.use(express.json());
// app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: false })); 

requireDir('./app/models')

app.use("/user", require("./app/routes/userRoute"));
// app.use("/aluno", require("./app/routes/alunoRoute"));

app.listen(3000);