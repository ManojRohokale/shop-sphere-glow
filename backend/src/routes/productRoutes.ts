import express from 'express';
import { protect } from '../middleware/auth';

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    // Mock data - replace with actual database query
    const products = [
      {
        id: 1,
        name: 'Premium Skincare Set',
        price: 1299,
        image: '/images/products/skincare-set.jpg',
        category: 'skincare',
        rating: 4.5,
      },
      {
        id: 2,
        name: 'Luxury Makeup Kit',
        price: 2499,
        image: '/images/products/makeup-kit.jpg',
        category: 'makeup',
        rating: 4.8,
      },
    ];
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products' });
  }
});

// Get product by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // Mock data - replace with actual database query
    const product = {
      id: parseInt(id),
      name: 'Premium Skincare Set',
      price: 1299,
      image: '/images/products/skincare-set.jpg',
      category: 'skincare',
      rating: 4.5,
      description: 'A premium skincare set for radiant skin',
    };
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Error fetching product' });
  }
});

// Create product (admin only)
router.post('/', protect, async (req, res) => {
  try {
    const product = req.body;
    // Add validation and database insertion here
    res.status(201).json(product);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ message: 'Error creating product' });
  }
});

// Update product (admin only)
router.put('/:id', protect, async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    // Add validation and database update here
    res.json({ id, ...updates });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Error updating product' });
  }
});

// Delete product (admin only)
router.delete('/:id', protect, async (req, res) => {
  try {
    const { id } = req.params;
    // Add database deletion here
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Error deleting product' });
  }
});

export default router; 