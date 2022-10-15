const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    publishing_id: Number,
    name: String,
    location: {
        address: {
            street: String,
            city: String,
            state: String,
            zipcode: String,
        },
        geo: {
            type: String,
            coordinates: [],
        },
    },
    createdAt: { type: Date, default: Date.now() }
})

const PublishingsModel = mongoose.model('publishing', schema)

module.exports = PublishingsModel