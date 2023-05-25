const express = require('express')
const router = express.Router()
const { Tasks } = require('../models')
const { handleValidate, requireToken } = require('../middleware/auth')

//All Tasks
router.get('', requireToken, async (req, res, next) => {
    try{
        console.log(req.user)
        console.log(req.user._id)
        
        let tasks = await Tasks.find({owner: req.user._id})
        res.json(tasks)

    } catch(err) {
        console.log(err)
        next()
    }
})

//Single Task by ID
router.get('/:id', requireToken, async (req, res, next) => {
    try{
        let task = await Tasks.findById(req.params.id)
        res.json(task)
    } catch(err) {
        console.log(err)
    }
})

//New Task
router.post('', requireToken, async (req, res, next) => {
    try {
        const owner = req.user._id
        req.body.owner = owner
        const newTask = req.body
        await Tasks.create(newTask)
        res.status(201).json(newTask);
    } catch(err) {
        res.status(400).json({error: err.message})
    }
})

//Edit Task
router.put('/:id', requireToken, async (req, res, next) => {
    try {
        handleValidate(req, await Tasks.findById(req.params.id))
        const updatedTask = await Tasks.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json(updatedTask)
    } catch(err) {
        res.status(400).json({error: err.message})
        next()
    }
})

//Delete Task
router.delete('/:id', requireToken, async (req, res, next) => {
    try {
        handleValidate(req, await Tasks.findById(req.params.id))
        const task = req.params.id
        await Tasks.findByIdAndDelete(task)
        res.status(200).json(task)
    } catch(err) {
        res.status(400).json({ error: err.message})
    }
})

module.exports = router