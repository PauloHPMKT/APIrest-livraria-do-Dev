const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    email: String,
    book_id: { type: mongoose.Schema.Types.ObjectId, ref: 'books' },
    text: String,
    createdAt: { type: Date, default: Date.now() }
})

const CommentsModel = mongoose.model('comments', schema)

module.exports = CommentsModel