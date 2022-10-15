const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    cod: Number,
    title: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'authors' }, //fazendo referencia de uma outra collection
    publishing: { type: mongoose.Schema.Types.ObjectId, ref: 'publishing' },
    plot: String,
    full_plot: String, 
    genres: String,
    language: String,
    year: Number,
    pages_number: Number,
    createdAt: { type: Date, default: Date.now() }
})

const BooksModel = mongoose.model('books', schema)

module.exports = BooksModel