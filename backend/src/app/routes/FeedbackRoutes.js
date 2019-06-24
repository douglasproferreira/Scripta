const express = require('express');

const FeedbackRouter = express.Router();
const FeedbackController = require("../controllers/FeedbackController");
const middleware = require('../middlewares/user')

FeedbackRouter.use(middleware);
FeedbackRouter.post('/createFeedback', FeedbackController.createFeedback);
FeedbackRouter.get('/buscarFeedback', FeedbackController.buscarFeedback);


module.exports = FeedbackRouter;