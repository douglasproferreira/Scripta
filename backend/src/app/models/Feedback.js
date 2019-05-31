const mongoose = require('../../database');

const FeedbackSchema = new mongoose.Schema({

    nota: {
        type: String,
        required: true,
    },

    avaliacao: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    task: {
        type: mongoose.Schemaa.Types.ObjectId,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;

