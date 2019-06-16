const express = require('express');

const TaskRoute = express.Router();
const TaskController = require("../controllers/TaskController");
const middleware = require('../middlewares/user')

// ClassroomRoute.get('/list', ClassroomController.list);

TaskRoute.use(middleware);
TaskRoute.post('/createTask', TaskController.create);
// ClassroomRoute.get('/classShow/:classId', ClassroomController.show);
// ClassroomRoute.post('/create', ClassroomController.store);
// ClassroomRoute.put('/update/:classId', ClassroomController.update);

module.exports = TaskRoute;