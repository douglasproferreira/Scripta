const mongoose = require('../../database');

const FeedbackSchema = new mongoose.Schema ({
    //tarefas
    // alunos
    nota: {
        type: String,
        required: true,
    },
    avaliacao: {
        type: String,
        required: true
    },

});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;

