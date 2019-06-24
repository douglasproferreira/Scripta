const TaskAnswer = require('../models/TaskAnswer');
const Feedback = require('../models/Feedback');

const createFeedback = async (req, res) => {

    try {
        const feedback = await Feedback.create({ ...req.body, user: req.userId });

        const response = await TaskAnswer.findOneAndUpdate({ _id: feedback.taskAnswer }, { 
            "$set" : {
                feedback: feedback._id
            }
         }, { new: true }).populate(['feedback']);

        res.send({ feedback, response });

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: "Error creating feedback" });
    }
}

const buscarFeedback = async (req, res) => {

    try {
        const feedback = await Feedback.findOne({ _id : req.body._id });

        res.send({ feedback });

    } catch (err) {
        console.log(err)
        return res.status(400).send({ error: "Error creating feedback" });
    }
}

module.exports = {
    createFeedback,
    buscarFeedback
}