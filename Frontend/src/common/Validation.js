export const isEmail = (email) => {
  const emailValidation = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
    email
  );
  if (!emailValidation) {
    return "Please enter valid email";
  } else {
    return "";
  }
};
export const isPassword = (password) => {
  const passwordValidation =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,15}$/i.test(password);
  if (password.length < 8) {
    return "Your password must have at least 8 character long.";
  }
  if (password.length > 15) {
    return "Your password can have maximum 15 character long.";
  }
  if (!passwordValidation) {
    return "Your password must include Upsercase, lowercase, special character and numbers";
  } else {
    return "";
  }
};
