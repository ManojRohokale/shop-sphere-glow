import express from 'express';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Get user profile
router.get('/profile', authenticate, async (req, res) => {
  try {
    // Mock data - replace with actual database query
    const user = {
      id: req.user?.id,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'user',
    };
    res.json(user);
  } catch (error) {
    console.error('Error fetching user profile:', error);
    res.status(500).json({ message: 'Error fetching user profile' });
  }
});

// Update user profile
router.put('/profile', authenticate, async (req, res) => {
  try {
    const updates = req.body;
    // Add validation and database update here
    res.json({ message: 'Profile updated successfully', ...updates });
  } catch (error) {
    console.error('Error updating profile:', error);
    res.status(500).json({ message: 'Error updating profile' });
  }
});

// Get user orders
router.get('/orders', authenticate, async (req, res) => {
  try {
    // Mock data - replace with actual database query
    const orders = [
      {
        id: 1,
        date: '2024-04-15',
        total: 1299,
        status: 'completed',
        items: [
          {
            id: 1,
            name: 'Premium Skincare Set',
            price: 1299,
            quantity: 1,
          },
        ],
      },
    ];
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

// Admin routes
router.get('/admin/users', authenticate, async (req, res) => {
  try {
    // Check if user is admin
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }
    // Mock data - replace with actual database query
    const users = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        role: 'user',
      },
      {
        id: 2,
        name: 'Admin User',
        email: 'admin@example.com',
        role: 'admin',
      },
    ];
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Error fetching users' });
  }
});

export default router; 