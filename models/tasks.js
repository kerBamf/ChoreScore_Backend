const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema(
    {
        name: {
            required: [true, "Name Required"],
            type: String
        },
        duration: {
            required: [true, "Duration Required"],
            type: Number
        },
        value: {
            required: [true, "Value Required"],
            type: Number
        },
        info: {
            type: String
        },
        user: {
            type: String
        }
    }, {timestamps: true}
)

const Tasks = mongoose.model('tasks', taskSchema)

module.exports = Tasks