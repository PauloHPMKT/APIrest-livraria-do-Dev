const bcrypt = require('bcrypt')

class Encript {
    static async CriptPassword(password) {
        const salt = await bcrypt.genSalt()
        return await bcrypt.hash(password, salt)
    }
}

module.exports = {
    Encript,
}