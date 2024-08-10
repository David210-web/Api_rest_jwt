const brcypt = require('bcrypt');

function hashPassword(password) {
    const salt = brcypt.genSaltSync(10);
    const hashedPassword = brcypt.hashSync(password, salt);
    return hashedPassword;
}

module.exports = hashPassword;