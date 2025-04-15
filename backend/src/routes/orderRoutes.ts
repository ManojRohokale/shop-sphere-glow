import express from 'express';
import { protect } from '../middleware/auth';

const router = express.Router();

// Create order
router.post('/', protect, async (req, res) => {
  try {
    const { items, total, shippingAddress } = req.body;
    // Mock data - replace with actual database insertion
    const order = {
      id: Date.now(),
      userId: req.user?.id,
      items,
      total,
      shippingAddress,
      status: 'pending',
      createdAt: new Date().toISOString(),
    };
    res.status(201).json(order);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Error creating order' });
  }
});

// Get user orders
router.get('/user', protect, async (req, res) => {
  try {
    // Mock data - replace with actual database query
    const orders = [
      {
        id: 1,
        userId: req.user?.id,
        items: [
          {
            id: 1,
            name: 'Premium Skincare Set',
            price: 1299,
            quantity: 1,
          },
        ],
        total: 1299,
        status: 'completed',
        createdAt: '2024-04-15T10:00:00Z',
      },
    ];
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

// Get order by ID
router.get('/:id', protect, async (req, res) => {
  try {
    const { id } = req.params;
    // Mock data - replace with actual database query
    const order = {
      id: parseInt(id),
      userId: req.user?.id,
      items: [
        {
          id: 1,
          name: 'Premium Skincare Set',
          price: 1299,
          quantity: 1,
        },
      ],
      total: 1299,
      status: 'completed',
      shippingAddress: {
        street: '123 Main St',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
      },
      createdAt: '2024-04-15T10:00:00Z',
    };
    res.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ message: 'Error fetching order' });
  }
});

// Update order status (admin only)
router.put('/:id/status', protect, async (req, res) => {
  try {
    // Check if user is admin
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }
    const { id } = req.params;
    const { status } = req.body;
    // Add validation and database update here
    res.json({ message: 'Order status updated successfully', id, status });
  } catch (error) {
    console.error('Error updating order status:', error);
    res.status(500).json({ message: 'Error updating order status' });
  }
});

// Get all orders (admin only)
router.get('/', protect, async (req, res) => {
  try {
    // Check if user is admin
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }
    // Mock data - replace with actual database query
    const orders = [
      {
        id: 1,
        userId: 1,
        items: [
          {
            id: 1,
            name: 'Premium Skincare Set',
            price: 1299,
            quantity: 1,
          },
        ],
        total: 1299,
        status: 'completed',
        createdAt: '2024-04-15T10:00:00Z',
      },
    ];
    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Error fetching orders' });
  }
});

export default router; 