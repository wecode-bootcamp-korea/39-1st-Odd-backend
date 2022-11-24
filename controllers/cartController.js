const cartService = require("../services/cartService");
const { catchAsync, raiseCustomError } = require("../utils/error");

const getCartsByUserId = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const carts = await cartService.getCartsByUserId(userId);

  return res.status(200).json(carts);
});

module.exports = { getCartsByUserId };
