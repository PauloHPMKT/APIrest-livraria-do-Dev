const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    nacionalidade: String,
})

const AuthorsModel = mongoose.model('authors', schema)

module.exports = AuthorsModel