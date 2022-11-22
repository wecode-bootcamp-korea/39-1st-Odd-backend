const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userDao = require("../models/userDao");
const { validateEmail, validatePw } = require("../utils/validation");

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

module.exports = {
  signUp,
};
