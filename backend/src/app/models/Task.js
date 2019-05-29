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

    // Partes do relatório
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;