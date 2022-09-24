const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    userKey: String,
    jwt: String,
})

const SessionsModel = mongoose.model('session', schema)

module.exports = SessionsModel