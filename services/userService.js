const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/userDao");
const { validateEmail, validatePw } = require("../utils/validation");
const { raiseCustomError } = require("../utils/error");

const signUp = async (email, password, name, phonenumber) => {
  validateEmail(email);
  validatePw(password);

  const user = await userDao.getUserByEmail(email);

  if (user) {
    raiseCustomError("duplicated email", 400);
  }

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

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);

  if (!user) {
    raiseCustomError("user does not exist", 400);
  }

  const result = await bcrypt.compare(password, user.password);

  if (!result) {
    raiseCustomError("invalid password", 401);
  }

  return jwt.sign({ id: user.id }, process.env.secretKey, { expiresIn: "1d" });
};

const getUserById = async (id) => {
  return await userDao.getUserById(id);
};

module.exports = {
  signUp,
  signIn,
  getUserById,
};
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/userDao");
const { validateEmail, validatePw } = require("../utils/validation");

const getUserById = async (id) => {
  const result = await userDao.getUserById(id);
  return result;
};

const signUp = async (name, email, password, phoneNumber) => {
  validateEmail(email);
  validatePw(password);

  const user = await userDao.getUserByEmail(email);

  if (user) {
    const err = new Error("duplicated email");
    err.statusCode = 400;
    throw err;
  }

  const hashedPassword = await bcrypt.hash(
    password,
    parseInt(process.env.saltRounds)
  );

  await userDao.createUser(name, email, hashedPassword, phoneNumber);
};

const signIn = async (email, password) => {
  const user = await userDao.getUserByEmail(email);

  if (!user) {
    const err = new Error("specified user does not exist");
    err.statusCode = 404;
    throw err;
  }

  const result = await bcrypt.compare(password, user.password);

  if (!result) {
    const err = new Error("invalid password");
    err.statusCode = 401;
    throw err;
  }

  return jwt.sign({ id: user.id }, process.env.secretKey, { expiresIn: "1d" });
};

module.exports = { signUp, signIn, getUserById };
