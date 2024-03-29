const Task = require('../models/Task');
const TaskAnswer = require('../models/TaskAnswer');

const list = async (req, res) => {
    try {
        const answers = await TaskAnswer.find().populate(['task']);

        return res.send({ answers });
    } catch (err) {
        return res.status(400).send({ error: "Error loading answers" });
    }
}

const createTaskAnswer = async (req, res) => {

    try {
        const answer = await TaskAnswer.create({ ...req.body, user: req.userId });

        const response = await Task.findOneAndUpdate({ _id: answer.task }, { $push: { answer: answer._id } }, { new: true }).populate(['answer']);

        res.send({ answer, response });

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: "Error creating answer" });
    }
}

const showTaskAnswer = async (req, res) => {
    try {
        const answer = await TaskAnswer.findOne({ _id: req.body.answer }).populate(['user'])

        res.send(answer)
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: "Error loading answer" });
    }
}

const busca = async (req, res) => {
    try {
        const answer = await TaskAnswer.findOne({ task : req.body.task }).populate(['user'])

        res.send(answer)
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: "Error loading answer" });
    }
}

module.exports = {
    createTaskAnswer,
    list, 
    showTaskAnswer,
    busca
}