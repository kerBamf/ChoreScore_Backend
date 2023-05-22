const mongoose = require('mongoose')

const userSchema = new mongoose.Schema (
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        image: {
            type: String
        },
        credits : {
            type: Number,
            required: true,
            default: 0
        },
        tasksDone: {
            type: Number,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true,
        toJSON: {
            virtuals: true,
            transform: (_doc, ret) => {
                delete ret.password;
                return ret
            }
        },
        id: false
    }
)

module.exports = mongoose.model("User", userSchema)