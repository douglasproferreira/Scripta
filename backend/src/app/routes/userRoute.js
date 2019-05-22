const express = require("express");

const userRoute = express.Router();
const UserController = require("../controllers/userController");

userRoute.post("/register", UserController.register);
userRoute.post("/authenticate", UserController.authenticate);

module.exports = userRoute;
