const {
  registerHelper,
  loginHelper
} = require("../helper/auth");

exports.registerController = async (req, res, next) => {
  var response;
  try {
    response = await registerHelper(req.body);
    res.json(response);
  } catch (error) {
    res.json({ error: error });
  }
};

exports.loginController = async (req, res, next) => {
  var response;
  try {
    response = await loginHelper(req.body);
    res.json(response);
  } catch (error) {
    res.json({ error: error });
  }
};