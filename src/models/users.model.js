const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    createAt: { type: Date, default: Date.now() }
})

const UsersModel = mongoose.model('users', schema)

module.exports = UsersModel