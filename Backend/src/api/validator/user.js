const { validEmail, validPassword } = require("../../common/validator");

async function validUser(req, res, next) {
    const { EMAIL, PASSWORD } = req.body;
    let valid = await validEmail(EMAIL);
    if (!valid.status) {
        res.json(valid);
        return;
    }
    valid = await validPassword(PASSWORD);
    if (!valid.status) {
        res.json(valid);
        return;
    }
    next();
}

module.exports = { validUser };