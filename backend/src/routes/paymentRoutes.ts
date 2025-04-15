import express from 'express';
import { authenticate } from '../middleware/auth';

const router = express.Router();

// Create order
router.post('/create-order', authenticate, async (req, res) => {
  try {
    const { items, userId } = req.body;

    // Here you would typically save the order to your database
    // For now, we'll just return a success response
    res.json({
      success: true,
      message: 'Order created successfully',
      orderId: `order_${Date.now()}`,
      items,
      userId
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Error creating order' });
  }
});

export default router; 