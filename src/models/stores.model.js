const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  store_id: { type: Number, unique: true },
  name: String,
  location: {
    address: {
      street: String,
      city: String,
      state: String,
      zipcode: String,
    },
    geo: {
      geo_type: String,
      coordinates: [Number],
    },
  },
  createdAt: { type: Date, default: Date.now() }
})

const StoresModel = mongoose.model('store', schema)

module.exports = StoresModel