const express = require('express');

const TaskAnswerRoute = express.Router();
const TaskAnswerController = require("../controllers/TaskAnswerController");
const middleware = require('../middlewares/user')

// ClassroomRoute.get('/list', ClassroomController.list);

TaskAnswerRoute.use(middleware);
TaskAnswerRoute.post('/createTaskAnswer', TaskAnswerController.createTaskAnswer);
TaskAnswerRoute.get('/', TaskAnswerController.list);
// ClassroomRoute.get('/classShow/:classId', ClassroomController.show);
// ClassroomRoute.post('/create', ClassroomController.store);
// ClassroomRoute.put('/update/:classId', ClassroomController.update);

module.exports = TaskAnswerRoute;