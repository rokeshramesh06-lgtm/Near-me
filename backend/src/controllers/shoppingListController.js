import ShoppingList from '../models/ShoppingList.js';
import Product from '../models/Product.js';

export const createShoppingList = async (req, res) => {
  try {
    const { name, items } = req.body;

    const shoppingList = new ShoppingList({
      userId: req.userId,
      name,
      items,
    });

    await shoppingList.save();

    res.status(201).json({
      message: 'Shopping list created successfully',
      shoppingList,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getShoppingLists = async (req, res) => {
  try {
    const lists = await ShoppingList.find({ userId: req.userId });

    res.json({
      message: 'Shopping lists retrieved',
      count: lists.length,
      lists,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateShoppingList = async (req, res) => {
  try {
    const { listId } = req.params;
    const { name, items } = req.body;

    const list = await ShoppingList.findByIdAndUpdate(
      listId,
      { name, items, updatedAt: new Date() },
      { new: true }
    );

    res.json({
      message: 'Shopping list updated successfully',
      list,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const findItemsNearby = async (req, res) => {
  try {
    const { listId, latitude, longitude, distance = 5000 } = req.body;

    const list = await ShoppingList.findById(listId);
    if (!list) {
      return res.status(404).json({ message: 'Shopping list not found' });
    }

    const itemNames = list.items.map((item) => item.name);

    const products = await Product.find({
      name: { $in: itemNames },
      availability: true,
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: distance,
        },
      },
    }).populate('shopId', 'name address phone rating');

    res.json({
      message: 'Items found nearby',
      count: products.length,
      products,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteShoppingList = async (req, res) => {
  try {
    const { listId } = req.params;
    await ShoppingList.findByIdAndDelete(listId);

    res.json({ message: 'Shopping list deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
