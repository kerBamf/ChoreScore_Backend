require('../config/connection.js')

module.exports = {
    Rewards: require('./rewards'),
    Tasks: require('./tasks.js'),
    Quotes: require('./quotes.js'),
    User: require('./User.js')
}