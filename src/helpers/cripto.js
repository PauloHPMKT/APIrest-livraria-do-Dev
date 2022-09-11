const bcrypt = require('bcrypt')

class Encript {
    static async CriptPassword(password) {
        const salt = await bcrypt.genSalt()
        return await bcrypt.hash(password, salt)
    }

    static async ComparePass(password, userPassword) {
        return await bcrypt.compare(password, userPassword)
    }
}   

module.exports = {
    Encript,
}