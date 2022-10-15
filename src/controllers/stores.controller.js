const { httpStatusCode, throwNewError, successStatus } = require('../config/constants')
const StoresModel = require('../models/stores.model')

async function createStore(req, res) {
  const { ...data } = req.body

  const store = new StoresModel({ ...data })
  
  const storeExists = await StoresModel.findOne(data)

  if (storeExists) {
    res
      .status(httpStatusCode.CONFLICT)
      .json({ error: throwNewError.DUPLICATED_UNIQUE_KEY.message })
    return storeExists  
  } else {
    return {
      new_store: store.save(),
      status: res
        .status(httpStatusCode.CREATED)
        .json({ store, message: successStatus.CREATED.message })
    }
  }
}

module.exports = {
  createStore,
}