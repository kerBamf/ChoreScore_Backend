const express = require('express')
const router = express.Router()
const { Users } = require('../models')

//All Users
router.get('', async (req, res, next) => {
    try{
        let tasks = await Tasks.find({})
        res.json(tasks)

    } catch(err) {
        console.log(err)
        next()
    }
})

//Single user
router.get(':id', async (req, res, next) => {
    try{
        let user = await Users.findById(req.params.id)
        res.json(user)
    } catch(err) {
        console.log(err)
    }
})

//New Task
router.post('', async (req, res, next) => {
    try {
        let newUser = req.body
        await Users.create(newUser)
    } catch(err) {
        console.log(err)
        next()
    }
})

module.exports = router