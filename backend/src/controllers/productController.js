import Product from '../models/Product.js';

export const getProductsByShop = async (req, res) => {
  try {
    const { shopId } = req.params;
    const products = await Product.find({ shopId });

    res.json({
      message: 'Products found',
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const searchProducts = async (req, res) => {
  try {
    const { query, category } = req.query;

    const searchQuery = {};
    if (query) {
      searchQuery.name = { $regex: query, $options: 'i' };
    }
    if (category) {
      searchQuery.category = category;
    }
    searchQuery.availability = true;

    const products = await Product.find(searchQuery).populate('shopId', 'name address phone location rating');

    res.json({
      message: 'Products found',
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { shopId, name, category, price, unit, stock } = req.body;

    const product = new Product({
      shopId,
      name,
      category,
      price,
      unit: unit || 'kg',
      availability: stock > 0,
      stock,
    });

    await product.save();

    res.status(201).json({
      message: 'Product created successfully',
      product,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { price, stock, availability, discount } = req.body;

    const updateData = { price, stock, availability };
    
    if (discount) {
      updateData.discount = discount;
      updateData.discountedPrice = price - (price * discount / 100);
    }

    const product = await Product.findByIdAndUpdate(productId, updateData, {
      new: true,
    });

    res.json({
      message: 'Product updated successfully',
      product,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    await Product.findByIdAndDelete(productId);

    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
