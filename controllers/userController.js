const userService = require("../services/userService");
const { catchAsync } = require("../utils/error");

const signUp = catchAsync(async (req, res) => {
  const { name, email, password, phoneNumber } = req.body;

  if (!name || !email || !password || !phoneNumber) {
    return res.status(400).json({ message: "KEY_ERROR" });
  }

  await userService.signUp(name, email, password, phoneNumber);
  return res.status(201).json({
    message: "SIGNUP_SUCCESS",
  });
});

const signIn = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const accsessToken = await userService.signIn(email, password);

  res.status(200).json({ accsessToken: accsessToken });
});

module.exports = {
  signUp,
  signIn,
};
