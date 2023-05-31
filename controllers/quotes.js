const express = require('express')
const router = express.Router()
const { Quotes } = require('../models')

//Get Random Quote
router.get('', async (req, res, next) => {
    try{
        let count = await Quotes.count()
        const random = Math.floor(Math.random() * count);
        let quote = await Quotes.findOne().skip(random)
        res.json(quote)
    } catch(err) {
        console.log(err)
        next()
    }
})

//Original Quotes Post (should only happen once)

// router.post('', async (req, res, next) => {
//     try{
//         let quoteObject = req.body
//         const quoteArray = quoteObject.quotes
//         for await (const value of quoteArray) {
//             try {
//                 let newQuote = {
//                     "quote": value.text,
//                     "author": value.author
//                 }
//                 console.log(`New Quote: ${newQuote}`)
//                 await Quotes.create(newQuote)
//             } catch(err) {
//                 console.log(err)
//             }
//         }
//         res.send("Okey Dokey")
//     } catch(err) {
//         console.log(err)
//         next()
//     }
// })

module.exports = router