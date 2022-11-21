const userService = require("../services/userService");

const signUp = async (req, res) => {
  try {
    const { email, password, name, phonenumber } = req.body;

    if (!email || !password || !name || !phonenumber) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    await userService.signUp(email, password, name, phonenumber);
    return res.status(201).json({
      message: "SIGNUP_SUCCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const accessToken = await userService.singIn(email, password);
    res.status(200).json({ accessToken: accessToken });
  } catch (err) {
    res.status(err.statusCode || 401).json({ message: err.message });
  }
};

module.exports = {
  signIn,
  signUp,
};
