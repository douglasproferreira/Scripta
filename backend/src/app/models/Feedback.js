const mongoose = require('../../database');

const FeedbackSchema = new mongoose.Schema({
    nota: {
        type: String,
    },

    parecer: {
        type: String,
        required: true
    },

    taskAnswer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'TaskAnswer',
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Feedback = mongoose.model("Feedback", FeedbackSchema);

module.exports = Feedback;

