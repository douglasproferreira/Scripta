const mongoose = require('mongoose');

const Task = require('../models/Task');

const create = (req, res) => {
    try {
        const task = Task.create({ ...req.body, user: req.userId, class: req.classId });

        return res.send({ task });
    } catch (err) {
        return res.status(400).send({ error: 'Error creating task' });
    }
}

const update = (req, res) => {
    try {
        const task = Task.findByIdAndUpdate(req.params.taskId, { ...req.body, user: req.userId, class: req.classId });

        return res.send({ task });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating task' })
    }
}

const show = (req, res) => {
    try {
        const task = await Task.findById(req.params.taskId).populate(['user', 'class']);

        return res.send({ task });
    } catch (err) {
        return res.status(400).send({error: 'Error loading classroom'});
    }
}

module.exports = {
    create,
    update,
    show
}