const mongoose = require('../../database')

const TaskSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    valueTask: {
        type: String,
    },

    classroom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Classroom',
        required: true
    },

    answer: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TaskAnswer'
    }],
    
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;