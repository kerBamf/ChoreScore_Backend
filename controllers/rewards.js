const express = require('express')
const router = express.Router()
const { Rewards } = require('../models')

//All Rewards
router.get('', async (req, res, next) => {
    try{
        let rewards = await Rewards.find({})
        res.json(rewards)

    } catch(err) {
        console.log(err)
        next()
    }
})

//Single Reward By Id
router.get('/:id', async (req, res, next) => {
    try{
        let reward = await Rewards.findById(req.params.id)
        res.json(reward)
    } catch(err) {
        console.log(err)
    }
})

//New Reward
router.post('', async (req, res, next) => {
    try {
    const newReward = req.body
    await Rewards.create(newReward)
    res.send('Okey Dokey')
    } catch(err) {
        console.log(err)
        next()
    }
})

//Edit Reward
router.put('/:id', async (req, res, next) => {
    try {
        const updatedReward = req.body
        await Rewards.findByIdAndUpdate(req.params.id,updatedReward)
        res.redirect('/rewards')
    } catch(err) {
        console.log(err)
        next()
    }
})

//Delete Reward
router.delete('/:id', async (req, res, next) => {
    try {
        const reward = req.params.id
        await Rewards.findByIdAndDelete(reward)
        res.send('Okey Dokey')
    } catch(err) {
        console.log(err)
        next()
    }
})

module.exports = router