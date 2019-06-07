const express = require('express');

const ClassroomRoute = express.Router();
const ClassroomController = require("../controllers/ClassroomController");
const middleware = require('../middlewares/user')


ClassroomRoute.get('/list', ClassroomController.list);

ClassroomRoute.use(middleware);
ClassroomRoute.get('/listUser', ClassroomController.listUser);
ClassroomRoute.get('/classShow/:classId', ClassroomController.show);
ClassroomRoute.post('/create', ClassroomController.store);
ClassroomRoute.put('/update/:classId', ClassroomController.update);


module.exports = ClassroomRoute;
