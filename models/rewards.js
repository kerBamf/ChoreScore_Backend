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
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    }
)

const Rewards = mongoose.model('rewards', rewardSchema)

module.exports = Rewards