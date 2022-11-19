const cartService = require("../services/cartService");
const { catchAsync, raiseCustomError } = require("../utils/error");

const addProduct = catchAsync(async (req, res) => {
  const user = req.user;
  const userId = user.id;
  const productId = req.params.productId;
  const { quantity } = req.body;

  if (!user || !productId) {
    raiseCustomError(KEY_ERROR, 400);
  }

  await cartService.addProduct(userId, productId, quantity);

  return res.status(201).json({ message: "productAdded" });
});

module.exports = { addProduct };
