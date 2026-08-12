import Shop from '../models/Shop.js';

export const getNearbyShops = async (req, res) => {
  try {
    const { latitude, longitude, category, distance = 5000 } = req.query;

    const query = {
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          $maxDistance: parseFloat(distance),
        },
      },
    };

    if (category) {
      query.category = category;
    }

    const shops = await Shop.find(query).limit(50);

    res.json({
      message: 'Shops found',
      count: shops.length,
      shops,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getShopDetails = async (req, res) => {
  try {
    const { shopId } = req.params;
    const shop = await Shop.findById(shopId).populate('ownerId', 'name phone');

    if (!shop) {
      return res.status(404).json({ message: 'Shop not found' });
    }

    res.json(shop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createShop = async (req, res) => {
  try {
    const { name, category, description, phone, address, latitude, longitude } = req.body;

    const shop = new Shop({
      ownerId: req.userId,
      name,
      category,
      description,
      phone,
      address,
      location: {
        type: 'Point',
        coordinates: [longitude, latitude],
      },
    });

    await shop.save();

    res.status(201).json({
      message: 'Shop created successfully',
      shop,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateShop = async (req, res) => {
  try {
    const { shopId } = req.params;
    const { name, description, phone, address, openingHours } = req.body;

    const shop = await Shop.findByIdAndUpdate(
      shopId,
      { name, description, phone, address, openingHours },
      { new: true }
    );

    res.json({
      message: 'Shop updated successfully',
      shop,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addReview = async (req, res) => {
  try {
    const { shopId } = req.params;
    const { rating, comment } = req.body;

    const shop = await Shop.findByIdAndUpdate(
      shopId,
      {
        $push: {
          reviews: {
            userId: req.userId,
            rating,
            comment,
            createdAt: new Date(),
          },
        },
      },
      { new: true }
    );

    // Calculate average rating
    const avgRating = shop.reviews.reduce((sum, r) => sum + r.rating, 0) / shop.reviews.length;
    shop.rating = avgRating;
    await shop.save();

    res.json({
      message: 'Review added successfully',
      shop,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
