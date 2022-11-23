const cartService = require("../services/cartService");
const { catchAsync, raiseCustomError } = require("../utils/error");

const modifyQuantity = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const productId = req.params.productId;
  const { quantity } = req.body;

  if (!productId) {
    raiseCustomError(KEY_ERROR, 400);
  }

  await cartService.modifyQuantity(userId, productId, quantity);

  return res.status(201).json({ message: "quantityModified" });
});

module.exports = { modifyQuantity };
