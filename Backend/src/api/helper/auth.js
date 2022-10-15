const {
  registerServices,
  loginServices
} = require("../services/user.services");

async function registerHelper(params) {
  try {
    var registerService = await registerServices(params);
    return registerService;
  } catch (error) {
    return {
      status: false,
      msg: "Helper Error.",
    };
  }
}

async function loginHelper(params) {
  try {
    var insertService = await loginServices(params);
    return insertService;
  } catch (error) {
    return {
      status: false,
      msg: "Helper Error.",
    };
  }
}

module.exports = {
  registerHelper,
  loginHelper
};
