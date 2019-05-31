const express = require('express');

const UserRoute = express.Router();
const UserController = require("../controllers/UserController");


UserRoute.post('/register', UserController.register);
UserRoute.post('/authenticate', UserController.authenticate);

// Rotas sem funcionamento ainda
UserRoute.post('/forgotPassword', UserController.forgotPassword);
UserRoute.post('/resetPassword', UserController.resetPassword);

module.exports = UserRoute;
