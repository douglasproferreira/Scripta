const mongoose = require('../../database')

const TaskAnswerSchema = new mongoose.Schema({
    task: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task',
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    introducao: {
        type: String,
    },

    desenvolvimento: {
        type: String,
    },

    resultados: {
        type: String,
    },

    recomendacoes: {
        type: String,
    },

    referencias: {
        type: String,
    },

    feedback: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Feedback'
    }
})

const TaskAnswer = mongoose.model("TaskAnswer", TaskAnswerSchema);

module.exports = TaskAnswer;