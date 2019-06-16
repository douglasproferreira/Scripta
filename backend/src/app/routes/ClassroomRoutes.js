const express = require('express');

const ClassroomRoute = express.Router();
const ClassroomController = require("../controllers/ClassroomController");

const middleware = require('../middlewares/user')


ClassroomRoute.use(middleware);
ClassroomRoute.get('/list', ClassroomController.list);
ClassroomRoute.get('/listUser', ClassroomController.listUser);
ClassroomRoute.get('/listUserAluno', ClassroomController.listUserAluno);
ClassroomRoute.get('/classShow', ClassroomController.show);
ClassroomRoute.post('/create', ClassroomController.store);
ClassroomRoute.put('/update', ClassroomController.update);
ClassroomRoute.post('/inClass', ClassroomController.inClass);

module.exports = ClassroomRoute;
