const express = require('express');

const UserRoute = express.Router();
const UserController = require("../controllers/UserController");

const middeware = require('../middlewares/user')

UserRoute.post('/register', UserController.register);
UserRoute.post('/authenticate', UserController.authenticate);

UserRoute.use(middeware)
UserRoute.get('/show', UserController.show);

// Rotas sem funcionamento ainda
UserRoute.post('/forgotPassword', UserController.forgotPassword);
UserRoute.post('/resetPassword', UserController.resetPassword);

module.exports = UserRoute;
