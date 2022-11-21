const cartService = require("../services/cartService");
const { catchAsync, raiseCustomError } = require("../utils/error");

const deleteProduct = catchAsync(async (req, res) => {
  const user = req.user;
  const userId = user.id;
  const productId = req.params.productId;

  if (!user || !productId) {
    raiseCustomError(KEY_ERROR, 400);
  }

  await cartService.deleteProduct(userId, productId);

  return res.status(201).json({ message: "productDeleted" });
});

module.exports = { deleteProduct };
