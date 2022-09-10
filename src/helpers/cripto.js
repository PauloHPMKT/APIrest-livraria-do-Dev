const bcrypt = require('bcrypt')

class Encript {
    static async CriptPassword(password) {
        const salt = await bcrypt.genSalt()
        return await bcrypt.hash(password, salt)
    }

    static async ComparePass(userPassword, password) {
        return await bcrypt.compare(userPassword, password)
    }
}   

module.exports = {
    Encript,
}