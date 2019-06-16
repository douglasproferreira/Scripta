const mongoose = require('../../database');

const ClassroomSchema = new mongoose.Schema({
    codigo: {
        type: String,
        unique: true
    },
    
    nameClass: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],

    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }],

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Classroom = mongoose.model("Classroom", ClassroomSchema);

module.exports = Classroom;

