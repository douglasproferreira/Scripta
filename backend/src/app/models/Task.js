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

    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

    // Partes do relatório
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;