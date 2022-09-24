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

async function updateSession(req, res) {
    const { id } = req.params

    const session = await SessionsModel.findByIdAndUpdate(
        { _id: id }, req.body, { new: true }
    )

    res.send({ message: 'sessao atualizada', session })
}

async function removeSession(req, res) {
    const { id } = req.params

    const removeSession = await SessionsModel.deleteOne({ _id: id })

    res.send({ message: 'sessao excluida', removeSession })
}

module.exports = {
    createSession,
    getSession,
    updateSession,
    removeSession,
}