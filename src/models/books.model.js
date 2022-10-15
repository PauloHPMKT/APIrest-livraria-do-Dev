const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    titulo: String,
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'authors' }, //fazendo referencia de uma outra collection
    editora: String,
    genero: String,
    createAt: { type: Date, default: Date.now() }
})

const BooksModel = mongoose.model('books', schema)

module.exports = BooksModel