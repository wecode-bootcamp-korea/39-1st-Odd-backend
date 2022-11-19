const cartService = require("../services/cartService");
const { catchAsync, raiseCustomError } = require("../utils/error");

const getCartByUserId = catchAsync(async (req, res) => {
  const userId = req.user.id;
  if (!userId) {
    raiseCustomError("KEY_ERROR", 400);
  }

  const cart = await cartService.getCartByUserId(userId);

  return res.status(200).json(cart);
});

module.exports = { getCartByUserId };
