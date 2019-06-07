const express = require("express");
const cors = require("cors")
// const bodyParser = require("body-parser");

const requireDir = require("require-dir");

const app = express();

app.use(express.json());
app.use(cors());

requireDir('./app/models')

app.use("/user", require("./app/routes/UserRoute"));
app.use("/classroom", require("./app/routes/ClassroomRoutes"));

app.listen(3000, () => {
    console.log(':) Server started on port 3000')
});