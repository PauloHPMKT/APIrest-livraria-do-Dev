const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  store_id: Number,
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

const StoresModel = mongoose.model('store', schema)

module.exports = StoresModel