const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: false })); 

app.use("/user", require("./app/routes/userRoute"));
// app.use("/aluno", require("./app/routes/alunoRoute"));

app.listen(3000);