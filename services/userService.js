const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userDao = require("../models/userDao");
const authService = require("../models/userDao");
const { validateEmail, validatePw } = require("../utils/validation");

//회원가입
const signUp = async (email, password, name, phonenumber) => {
  validateEmail(email);
  validatePw(password);

  const hashedPassword = await bcrypt.hash(
    password,
    parseInt(process.env.saltRounds)
  );

  const createUser = await userDao.createUser(
    email,
    hashedPassword,
    name,
    phonenumber
  );

  return createUser;
};

//로그인
const signIn = async (email, password) => {
  const user = await userDao.userLogin(email);

  if (!user) {
    const err = new Error("user does not exist");
    err.statusCode = 404;
    throw err;
  }

  const result = await bcrypt.compare(password, user.password);

  if (!result) {
    const err = new Error("invalid password");
    err.statusCode = 401;
    throw err;
  }

  return jwt.sign({ sub: user.id, email: user.email }, process.env.JWT_SECRET);
};

module.exports = {
  signUp,
  signIn,
};
