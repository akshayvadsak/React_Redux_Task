const {
  registerController,
  loginController
} = require("../controller/auth");
const {
  validUser
} = require("../validator/user");
var authRouter = require("express").Router();

authRouter.post("/register", validUser, registerController);

authRouter.post("/login", validUser, loginController);

module.exports = authRouter;
