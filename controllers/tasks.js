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
router.get('/:id', async (req, res, next) => {
    try{
        let task = await Tasks.findById(req.params.id)
        res.json(task)
    } catch(err) {
        console.log(err)
    }
})

//New Task
router.post('', async (req, res, next) => {
    try {
        console.log(req.body)
        const newTask = req.body
        await Tasks.create(newTask)
        res.send(`Okey Dokey`)
    } catch(err) {
        console.log(err)
        next()
    }
})

//Edit Task
router.put('/:id', async (req, res, next) => {
    try {
        const updatedTask = await Tasks.findByIdAndUpdate(req.params.id, req.body)
        res.send(`Okey Dokey`)
    } catch(err) {
        console.log(err)
        next()
    }
})

//Delete Task
router.delete('/:id', async (req, res, next) => {
    try {
        const task = req.params.id
        await Tasks.findByIdAndDelete(task)
        res.send(`Okey Dokey`)
    } catch(err) {
        console.log(err)
        next()
    }
})

module.exports = router