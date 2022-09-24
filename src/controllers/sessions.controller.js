const SessionsModel = require('../models/session.model')

async function createSession(req, res) {
    const {
        userKey,
        jwt
    } = req.body

    const session = new SessionsModel({
        userKey,
        jwt
    })

    session.save()

    res.status(201).json(session)
}

async function getSession(req, res) {
    const session = await SessionsModel.find()

    console.log(session)
    res.status(200).json(session)
}

module.exports = {
    createSession,
    getSession,
}