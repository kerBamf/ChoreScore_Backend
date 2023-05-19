const mongoose = require('mongoose')

const quotesSchema = new mongoose.Schema(
    {
        quotes: {
            required: [true, "Quotes Required"],
            type: Object
        },
        timeSeeded: {
            required: [true, "Time needed"],
            type: Object
        }
    }, {timestamps: true}
)

const Quotes = mongoose.model('quotes', quotesSchema)

module.exports = Quotes