const express = require('express')
const router = express.Router()
const { User } = require('../models')
const bcrypt = require("bcrypt")
const { createUserToken } = require("../middleware/auth")
const { requireToken } = require('../middleware/auth')


//New User Route
router.post('/register', async (req, res, next) => {
    console.log(req.body)
    try{
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(req.body.password, salt);
        
        const pwStore = req.body.password
        req.body.password = passwordHash;

        const newUser = await User.create(req.body)

        if (newUser) {
            req.body.password = pwStore;
            const authenticatedUserToken = createUserToken(req, newUser)
            res.status(201).json({
                currentUser: newUser,
                isLoggedIn: true,
                token: authenticatedUserToken
            })
        } else {
            res.status(400).json({error: "Something went wrong"})
        }
    } catch(err) {
        console.log(err)
        res.status(400).json({ err: err.message })
    }
})

//Sign-In Route

router.post("/login", async (req, res, next) => {
    try {
        console.log(req.body)
        const loggingUser = req.body.username;
        const foundUser = await User.findOne({ username: loggingUser})
        console.log(foundUser)
        const token = await createUserToken(req, foundUser);
        let resObject = {
            user: foundUser,
            isLoggedIn: true,
            token
        }
        res.status(200).json(resObject
        )
    } catch(err) {
        console.log(err)
        res.status(401).json({ error: err.message })
    }
})

//Edit User for score and tasks completed
router.put('/update', requireToken, async (req, res, next) => {
    try {
        const username = req.body.username;
        await User.findOneAndUpdate({username: username}, req.body);
        res.status(200).json({updateSuccessful: true})
        console.log(req.body)
    } catch(err) {
        console.log(err)
        res.status(401).json({updateSuccessful: false})
    }
})

//Logout Route

router.get('/logout', requireToken, async (req, res, next) => {
    try {
        console.log("Logout was hit")
        const currentUser = req.user.username
        //delete req.user
        console.log(currentUser)
        res.status(200).json({
            message: `${currentUser} currently logged out`,
            isLoggedIn: false,
            token: "",
        });
    } catch(err) {
        res.status(400).json({ error: err.message });
    };
});

module.exports = router