var bcrypt = require('bcrypt');

exports.encryptpassword = async (password) => {
    try {
        const salt = await bcrypt.genSalt(10);
        let pass = await bcrypt.hash(password, salt);
        return {
            status: true,
            encrypt: pass
        }
    } catch (error) {
        return {
            status: false,
            msg: "Please Enter Password."
        }
    }
};

exports.comparepassword = async ({ PASSWORD, DBPASSWORD }) => {
    try {
        let isCompare = await bcrypt.compare(PASSWORD, DBPASSWORD);
        return isCompare;
    } catch (error) {
        return false;
    }
}