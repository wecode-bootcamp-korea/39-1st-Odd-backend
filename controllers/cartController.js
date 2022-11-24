const cartService = require("../services/cartService");
const { catchAsync, raiseCustomError } = require("../utils/error");

const getCartByUserId = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const carts = await cartService.getCartByUserId(userId);

  return res.status(200).json(carts);
});

module.exports = { getCartByUserId };
