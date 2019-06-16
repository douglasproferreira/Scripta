const mongoose = require('mongoose');

const Task = require('../models/Task');
const Classroom = require('../models/Classroom')

const create = async (req, res) => {

    try {
        const task = await Task.create({ ...req.body, user: req.userId, });

        const classroom = await Classroom.findByIdAndUpdate({ _id: req.body.classroom._id }, 
            { $push: { tasks: task }}, { new: true }).populate(['classroom', 'tasks'])

        return res.send({ task, classroom });
        
    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Error creating task' });
    }
}

const update = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.taskId, { ...req.body, user: req.userId, class: req.classId });

        return res.send({ task });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating task' })
    }
}

const show = async (req, res) => {
    try {
        const task = await Task.findById(req.params.taskId).populate(['user', 'class']);

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