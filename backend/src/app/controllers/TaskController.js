const mongoose = require('mongoose');

const Task = require('../models/Task');
const Classroom = require('../models/Classroom')

const create = async (req, res) => {

    try {
        const task = await Task.create({ ...req.body, user: req.userId, });

        const classroom = await Classroom.findByIdAndUpdate({ _id: req.body.classroom._id },
            { $push: { tasks: task } }, { new: true }).populate(['classroom', 'tasks'])

        return res.send({ task, classroom });

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Error creating task' });
    }
}

const update = async (req, res) => {
    try {
        const task = await Task.findOneAndUpdate(req.body.taskId, {
            '$set': {
                title: req.body.title,
                description: req.body.description
            }
        }, { new: true }).populate(['classroom']);

        return res.send({ task });

    } catch (err) {
        return res.status(400).send({ error: 'Error updating task' })
    }
}

const show = async (req, res) => {
    try {
        const task = await Task.findById(req.body.taskId).populate(['user', 'classroom', 'answer']);

        return res.send({ task });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading classroom' });
    }
}

module.exports = {
    create,
    update,
    show
}