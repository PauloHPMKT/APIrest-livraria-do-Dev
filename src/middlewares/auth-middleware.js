const jwt = require('jsonwebtoken')
const { httpStatusCode, throwNewError, successStatus } = require('../config/constants')

function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(!token) {
        return res.status(httpStatusCode.UNAUTHORIZED).json({ message: throwNewError.ACCESS_DENIED.message })
    }

    try {
        const secret = process.env.SECRET_KEY
        jwt.verify(token, secret)

        next()

    } catch (error) {
        res.status(httpStatusCode.UNAUTHORIZED).json({ message: throwNewError.INVALID_TOKEN.message })
    }
    
    res.status(httpStatusCode.OK).json({ message: successStatus.FREE_ACCESS.message })
}

module.exports = {
    authMiddleware,
}