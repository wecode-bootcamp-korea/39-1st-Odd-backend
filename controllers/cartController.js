const cartService = require("../services/cartService");
const { catchAsync, raiseCustomError } = require("../utils/error");

const deleteProduct = catchAsync(async (req, res) => {
  const userId = req.user.id;
  const productId = req.params.productId;

  if (!productId) {
    raiseCustomError(KEY_ERROR, 400);
  }

  await cartService.deleteProduct(userId, productId);

  return res.status(201).json({ message: "productDeleted" });
});

module.exports = { deleteProduct };
