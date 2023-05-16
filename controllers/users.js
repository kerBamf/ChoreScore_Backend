const express = require('express')
const router = express.Router()
const { Users } = require('../models')

//All Users
router.get('', async (req, res, next) => {
    try{
        let users = await Users.find({})
        res.json(users)

    } catch(err) {
        console.log(err)
        next()
    }
})

//Single user
router.get('/:id', async (req, res, next) => {
    try{
        let user = await Users.findById(req.params.id)
        res.json(user)
    } catch(err) {
        console.log(err)
    }
})

//New User
router.post('', async (req, res, next) => {
    try {
        let newUser = req.body
        await Users.create(newUser)
        res.redirect('/users')
    } catch(err) {
        console.log(err)
        next()
    }
})

//Edit User
router.put('/:id', async (req, res, next) => {
    try {
        let user = req.params.id
        let userEdit = req.body
        await Users.findByIdAndUpdate(user, userEdit)
        res.redirect('/users')
    } catch(err) {
        console.log(err)
        next()
    }
})

//Delete User
router.delete('/:id', async (req, res, next) => {
    try {
        let user = req.params.id
        await Users.findByIdAndDelete(user)
        res.redirect('/users')
    } catch(err) {
        console.log(err)
        next()
    }
})


module.exports = router