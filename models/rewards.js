const mongoose = require('mongoose')

const rewardSchema = new mongoose.Schema(
    {
        name: {
            required: [true, "Name Required"],
            type: String
        },
        cost: {
            required: [true, "Cost Required"],
            type: Number
        },
        description: {
            type: String
        }
    }
)

const Rewards = mongoose.model('rewards', rewardSchema)

module.exports = Rewards