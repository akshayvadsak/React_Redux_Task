const { encryptpassword, comparepassword } = require("../../common/password");
const { models } = require("../../database/index");
const sequelize = require("../../database/index");

async function registerServices(params) {
  try {
    const { EMAIL } = params;
    let countEmailUser = await models.User.count({
      where: { EMAIL: EMAIL }
    });
    if (countEmailUser) {
      return {
        status: false,
        msg: "Email already register. Please Login.",
      };
    }
    let encryptPassword = await encryptpassword(params.PASSWORD)
    if (!encryptPassword.status) {
      return encryptPassword;
    }
    params.PASSWORD = encryptPassword.encrypt;
    let registerUser = await models.User.create(params);
    if (!registerUser) {
      return {
        status: false,
        msg: "Unable to register user. Please Try Again.",
      };
    }
    delete registerUser.dataValues["PASSWORD"];
    delete registerUser.dataValues["USER_ID"];
    delete registerUser.dataValues["UPDATE_DATE"];
    return {
      status: true,
      msg: "Register Success.",
      data: registerUser
    };
  } catch (error) {
    var errMessage = error.message.split(",\n").join("");
    return {
      status: false,
      msg: errMessage.split("Validation error: ").join(""),
    };
  }
}

async function loginServices(params) {
  try {
    const { EMAIL, PASSWORD } = params;
    let getUser = await models.User.findOne({
      where: { EMAIL: EMAIL },
      attributes: ['PASSWORD', 'EMAIL', 'CREATE_DATE']
    });
    if (!getUser) {
      return {
        status: false,
        msg: "Please register then login user.",
      };
    };
    let fnPasswordBody = {
      PASSWORD,
      DBPASSWORD: getUser.dataValues.PASSWORD
    }
    let comparePassword = await comparepassword(fnPasswordBody);
    if (!comparePassword) {
      return {
        status: false,
        msg: "Wrong Password. Please Enter Current Password.",
      };
    }
    delete getUser.dataValues["PASSWORD"];
    delete getUser.dataValues["USER_ID"];
    return {
      status: true,
      msg: "Login Success.",
      data: getUser
    };

  } catch (error) {
    var errMessage = error.message.split(",\n").join("");
    return {
      status: false,
      msg: errMessage.split("Validation error: ").join(""),
    };
  }
}



module.exports = {
  registerServices,
  loginServices
};
