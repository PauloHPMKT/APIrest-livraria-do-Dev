const jwt = require('jsonwebtoken')

function authMiddleware(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(!token) {
        return res.status(401).json({ message: 'acesso negado' })
    }

    try {
        const secret = process.env.SECRET_KEY
        jwt.verify(token, secret)

        next()

    } catch (error) {
        res.status(400).json({ message: 'token invalido' })
    }
    
    res.send({ message: 'acesso permitido' })
}

module.exports = {
    authMiddleware,
}