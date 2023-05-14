const express = require('express')
const router = express.Router()
const { Rewards } = require('../models')

//All Tasks
router.get('', async (req, res, next) => {
    try{
        let rewards = await Rewards.find({})
        res.json(rewards)

    } catch(err) {
        console.log(err)
        next()
    }
})

//Single Task by ID
router.get(':id', async (req, res, next) => {
    try{
        let reward = await Rewards.findById(req.params.id)
        res.json(reward)
    } catch(err) {
        console.log(err)
    }
})

module.exports = router