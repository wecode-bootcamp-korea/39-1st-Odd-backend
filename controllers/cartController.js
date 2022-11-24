const cartService = require("../services/cartService");
const { catchAsync, raiseCustomError } = require("../utils/error");

const addCart = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const productId = req.params.productId;
  let { quantity } = req.body;

  if (!productId) {
    raiseCustomError(KEY_ERROR, 400);
  }

  await cartService.addCart(userId, productId, quantity);

  return res.status(201).json({ message: "productAdded" });
});

const getCartsByUserId = catchAsync(async (req, res) => {
  const userId = req.user.id;

  const carts = await cartService.getCartsByUserId(userId);

  return res.status(200).json(carts);
});

module.exports = { addCart, getCartsByUserId };
