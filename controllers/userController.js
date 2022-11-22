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

module.exports = {
  signUp,
};
