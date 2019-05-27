const express = require('express');

const UserRoute = express.Router();
const UserController = require("../controllers/userController");


UserRoute.post('/register', UserController.register);
UserRoute.post('/authenticate', UserController.authenticate);
UserRoute.post('/forgotPassword', UserController.forgotPassword);

module.exports = UserRoute;
