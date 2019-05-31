const mongoose = require('../../database');

const ClassSchema = new mongoose.Schema({
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

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;

