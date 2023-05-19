const express = require('express')
const router = express.Router()
const { Quotes } = require('../models')

//Get Quotes
router.get('', async (req, res, next) => {
    try{
        let quotes = await Quotes.findOne({})
        res.json(quotes)
    } catch(err) {
        console.log(err)
        next()
    }
})

//Original Quotes Post (should only happen once)

router.post('', async (req, res, next) => {
    try{
        let quotes = req.body
        await Quotes.create(quotes)
        res.send("Okey Dokey")
    } catch(err) {
        console.log(err)
        next()
    }
})

//Refresh Quote LIst
router.put('/:id', async (req, res, next) => {
    try{
        let quotes = req.body
        await Quotes.findByIdAndUpdate(req.params.id)
        res.send('Okey Dokey')
    } catch(err) {
        console.log(err)
        next()
    }
})

module.exports = router