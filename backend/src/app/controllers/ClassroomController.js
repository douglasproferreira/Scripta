const mongoose = require('mongoose');

const Classroom = mongoose.model('Classroom');
const Task = mongoose.model('Task');
const User = mongoose.model('User');


const listUser = async (req, res) => {
    try {
        console.log(req.userId)
        const classroom = await Classroom.find({user: {
            _id: req.userId}}).populate(['user']);
        res.send({ classroom })
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error loading classroom' });
    }
}

const list = async (req, res) => {
    try {
        const classroom = await Classroom.find().populate(['user', 'tasks'])
        res.send(classroom)

    } catch (err) {
        return res.status(400).send({ error: 'Error loading classroom' });
    }
}

const store = async (req, res) => {

    try {
        const { nameClass, description } = req.body;
        const user = req.userId;

        const classroom = await Classroom.create({ nameClass, description, user });

        const usuario = await User.findByIdAndUpdate({ _id: req.userId }, {
            '$set': {
                classroom: classroom._id,
            }
        }).populate(['classroom'])

        return res.send({ classroom, usuario });

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Error creating classroom' })
    }
}

const show = async (req, res) => {
    try {
        const classroom = await Classroom.findById(req.params.classId).populate(['user', 'tasks']);

        return res.send({ classroom });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading classroom' });
    }
}

const update = async (req, res) => {
    try {
        const { nameClass, description, tasks } = req.body;

        const classroom = await Classroom.findByIdAndUpdate(req.params.classId, { nameClass, description }, { new: true });

        classroom.tasks = [];

        await Task.remove({ classroom: classroom._id });

        await Promisse.all(tasks.map(async task => {
            const classTask = new Task({ ...task, classroom: classroom._id });

            await classTask.save();

            classroom.tasks.push(task);
        }));

        await classroom.save();

        return res.send({ classroom });
    } catch (err) {
        return res.status(400).send({ error: 'Error updating classroom' })
    }
}

module.exports = {
    list,
    show,
    update,
    store, 
    listUser
}