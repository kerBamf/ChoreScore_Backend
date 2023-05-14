const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        name: {
            required: [true, "Username Required"],
            type: String
        },
        image: {
            type: String
        },
        credits: {
            required: [true, "Credits Required"],
            type: Number,
            default: 0
        },
        tasksCompleted: {
            required: [true, "Score required"],
            type: Number,
            default: 0
        }
    }, {timestamps: true}
)

const Users = mongoose.model('Users', UserSchema)

module.exports = Users