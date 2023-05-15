const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000
const { Rewards } = require('./models')
const { Tasks } = require('./models')
const { Users } = require('./models')
const cors = require('cors')

//Middleware
app.use(cors())

app.get('/', (req, res) => {
    res.send('So you want to actually get stuff done, eh?')
})

app.listen(PORT, () => {
    console.log(`We are listing our to-dos on port ${PORT}`)
})