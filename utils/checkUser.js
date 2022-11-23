const jwt = require("jsonwebtoken");
const { promisify } = require("util");
const { getUserById } = require("../services/userService");

const loginRequired = async (req, res, next) => {
  const accessToken = req.headers.authorization;

  if (!accessToken) {
    raiseCustomError("NEED_ACCESS_TOKEN", 401);
  }

  const decoded = await promisify(jwt.verify)(
    accessToken,
    process.env.secretKey
  );

  const user = await getUserById(decoded.id);

  if (!user) {
    raiseCustomError("USER_DOES_NOT_EXIST", 404);
  }

  req.user = user;
  next();
};

module.exports = { loginRequired };
