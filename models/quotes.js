const mongoose = require('mongoose')

const quotesSchema = new mongoose.Schema(
    {
        quote: {
            required: [true, "Quotes Required"],
            type: String
        },
        author: {
            type: String
        }
    }, {timestamps: true}
)

const Quotes = mongoose.model('quotes', quotesSchema)

module.exports = Quotes