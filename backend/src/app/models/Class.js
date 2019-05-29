const mongoose = require('../../database');

const ClassSchema = new mongoose.Schema ({
    //tarefas
    // alunos
    nameClass: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },

});

const Class = mongoose.model("Class", ClassSchema);

module.exports = Class;

