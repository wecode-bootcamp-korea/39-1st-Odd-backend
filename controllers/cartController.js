const cartService = require("../services/cartService");
const { catchAsync, raiseCustomError } = require("../utils/error");

const addCart = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const productId = req.params.productId;
  const { quantity } = req.body;

  if (!userId || !productId) {
    raiseCustomError(KEY_ERROR, 400);
  }

  if (!quantity) {
    quantity = 1;
  }

  await cartService.addCart(userId, productId, quantity);

  return res.status(201).json({ message: "productAdded" });
});

module.exports = { addCart };
