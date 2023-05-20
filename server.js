const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const cors = require('cors')
const taskController = require('./controllers/tasks')
const userController = require('./controllers/users')
const rewardController = require('./controllers/rewards')
const quotesController = require('./controllers/quotes')
const authController = require('./controllers/auth')

//Middleware
app.use(cors())
app.use(express.json())
app.use('/tasks', taskController)
app.use('/users', userController)
app.use('/auth', authController);
app.use('/rewards', rewardController)
app.use('/quotes', quotesController)

app.get('/', (req, res) => {
    res.send('So you want to actually get stuff done, eh?')
})

app.listen(PORT, () => {
    console.log(`We are listing our to-dos on port ${PORT}`)
})