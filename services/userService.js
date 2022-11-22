const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userDao = require("../models/userDao");
const { validateEmail, validatePw } = require("../utils/validation");

const signUp = async (email, password, name, phonenumber) => {
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

  return jwt.sign({ id: user.id }, process.env.secretKey, { expiresIn: "1d" });
};

const getUserById = async (id) => {
  return await userDao.getUserById(id);
};

const getUserByEmail = async (email) => {
  const [user] = await database.query(
    `
      SELECT *
      FROM 
        users u
      WHERE
        u.email = ?`,
    [email]
  );

  return user;
};

module.exports = {
  signUp,
  signIn,
  getUserById,
  getUserByEmail,
};
