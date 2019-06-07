const mongoose = require('../../database');

const ClassroomSchema = new mongoose.Schema({
    nameClass: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

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

