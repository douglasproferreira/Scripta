const mongoose = require('mongoose');

const Classroom = mongoose.model('Classroom');
const Task = mongoose.model('Task');
const User = mongoose.model('User');

const inClass = async (req, res) => {
    try {
        const classroom = await Classroom.findOneAndUpdate({codigo: req.body.codigo},
            { $push: { students: req.userId } }, { new: true }).populate(['students','user']);

        const user = await User.findOneAndUpdate({ _id: req.userId },
            { $push: { classroom: classroom } }, { new: true }).populate(['classroom'])

        res.send({ classroom, user})

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Error in classroom' });

    }
}


const listUser = async (req, res) => {
    try {
        const classroom = await Classroom.find({
            teacher: {
                _id: req.userId
            }
        }).populate(['teacher', 'tasks']);
        res.send({ classroom })
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error loading classroom' });
    }
}

const listUserAluno = async (req, res) => {
    try {
        const classroom = await Classroom.find({
            students: {
                _id: req.userId
            }
        }).populate(['teacher', 'tasks']);
        res.send({ classroom })
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error loading classroom' });
    }
}

const list = async (req, res) => {
    try {
        const classroom = await Classroom.find().populate(['teacher', 'tasks', 'students', 'classroom'])
        res.send(classroom)

    } catch (err) {
        return res.status(400).send({ error: 'Error loading classroom' });
    }
}

const store = async (req, res) => {
    try {
        const { nameClass, description } = req.body;

        const classroom = await Classroom.create({
            nameClass, description, teacher: {
                _id: req.userId
            }
        });

        const code = classroom._id.toString().substr(6, 8);

        const atualizar = await Classroom.findByIdAndUpdate({ _id: classroom._id }, {
            '$set': {
                codigo: code,
            }
        }, { new: true }).populate(['classroom'])

        const usuario = await User.findByIdAndUpdate({ _id: req.userId }, {
            '$set': {
                classroom: classroom._id,
            }
        }, {new : true}).populate(['classroom'])

        return res.send({ classroom, atualizar, usuario });

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: 'Error creating classroom' })
    }
}

const show = async (req, res) => {
    try {
        const classroom = await Classroom.findById(req.body.classId).populate(['teacher', 'tasks']);

        return res.send({ classroom });
    } catch (err) {
        return res.status(400).send({ error: 'Error loading classroom' });
    }
}

const update = async (req, res) => {
    try {

        const classroom = await Classroom.findByIdAndUpdate(req.body.classId, req.body, { new: true });

        return res.send({ classroom });
    } catch (err) {
        console.log(err);
        return res.status(400).send({ error: 'Error updating classroom' });
    }
}

module.exports = {
    list,
    show,
    update,
    store,
    listUser,
    listUserAluno,
    inClass
}