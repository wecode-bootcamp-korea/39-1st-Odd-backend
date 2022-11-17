const validateEmail = (email) => {
  const emailValidation = new RegExp(
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/
  );

  if (!emailValidation.test(email)) {
    const err = new Error("invalid email");
    err.statuseCode = 400;
    throw err;
  }
};

const validatePw = (password) => {
  const pwValidation = new RegExp(
    "^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})"
  );

  if (!pwValidation.test(password)) {
    const err = new Error("invalid password");
    err.statuseCode = 400;
    throw err;
  }
};

module.exports = { validateEmail, validatePw };
