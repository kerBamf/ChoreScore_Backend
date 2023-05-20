const express = require('express')
const router = express.Router()
const { Rewards } = require('../models')
const { handleValidate, requireToken } = require('../middleware/auth')

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
router.post('', requireToken, async (req, res, next) => {
    try {
        const owner = req.user._id
        req.body.owner = owner
        const newReward = req.body
        await Rewards.create(newReward)
        res.status(201).json(newReward)
    } catch(err) {
        console.log(err)
        next()
    }
})

//Edit Reward
router.put('/:id', requireToken, async (req, res, next) => {
    try {
        handleValidate(req, await Rewards.findById(req.params.id))
        const updatedReward = req.body
        await Rewards.findByIdAndUpdate(req.params.id,updatedReward)
        res.redirect('/rewards')
        res.status(400).json(updatedReward)
    } catch(err) {
        console.log(err)
        next()
    }
})

//Delete Reward
router.delete('/:id', async (req, res, next) => {
    try {
        handleValidate(req, await Rewards.findById(req.params.id))
        const reward = req.params.id
        await Rewards.findByIdAndDelete(reward)
        res.status(200).json(reward)
    } catch(err) {
        res.status(400).json({ error: err.message})
    }
})

module.exports = router