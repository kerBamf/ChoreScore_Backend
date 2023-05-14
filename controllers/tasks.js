const express = require('express')
const router = express.Router()
const { Tasks } = require('../models')

//All Tasks
router.get('', async (req, res, next) => {
    try{
        let tasks = await Tasks.find({})
        res.json(tasks)

    } catch(err) {
        console.log(err)
        next()
    }
})

//Single Task by ID
router.get(':id', async (req, res, next) => {
    try{
        let task = await Tasks.findById(req.params.id)
        res.json(task)
    } catch(err) {
        console.log(err)
    }
})

router.post('', async (req, res, next) => {
    try {
        const newTask = req.body
        await Tasks.create(newTask)
        res.redirect('/tasks')
    } catch(err) {
        console.log(err)
    }
})

module.exports = router