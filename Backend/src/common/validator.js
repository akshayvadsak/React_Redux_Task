var validator = require('validator');

async function validEmail(email) {
    if (validator.isEmpty(email, { ignore_whitespace: true })) {
        return {
            status: false,
            msg: "Invalid Email. \n Please Try Again."
        };
    }
    if (!validator.isEmail(email)) {
        return {
            status: false,
            msg: "Invalid Email. \n Please Try Again."
        };
    }
    return {
        status: true
    };
}

async function validPassword(password) {
    if (validator.isEmpty(password, { ignore_whitespace: true })) {
        return {
            status: false,
            msg: "Password MUST have: \n 6-16 characters \n at least 1 Capital letter \n at least 1 Small letter \n at least 1 number \n at least 1 symbol"
        };
    }
    if (!validator.isStrongPassword(password)) {
        return {
            status: false,
            msg: "Password MUST have: \n 6-16 characters \n at least 1 Capital letter \n at least 1 Small letter \n at least 1 number \n at least 1 symbol"
        };
    }
    return {
        status: true
    };
}

module.exports = { validEmail, validPassword };