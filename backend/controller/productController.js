import Product from '../model/productModel.js';

export const allProduct = async (req, res) => {
  const product = await Product.find({});

  res.status(200).json({
    success: true,
    product,
  });
};

export const singleProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.status(200).json({
      success: true,
      product,
    });
  } else {
    res.status(400).json({
      message: 'Product not found!!',
    });
  }
};
