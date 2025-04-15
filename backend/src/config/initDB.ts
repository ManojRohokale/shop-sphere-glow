import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product';
import User from '../models/User';
import bcrypt from 'bcryptjs';

dotenv.config();

const sampleProducts = [
  {
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation',
    price: 199.99,
    category: 'Electronics',
    image: 'https://example.com/headphones.jpg',
    stock: 50
  },
  {
    name: 'Smart Watch',
    description: 'Latest smart watch with health monitoring features',
    price: 299.99,
    category: 'Electronics',
    image: 'https://example.com/smartwatch.jpg',
    stock: 30
  },
  {
    name: 'Running Shoes',
    description: 'Comfortable running shoes for all terrains',
    price: 89.99,
    category: 'Sports',
    image: 'https://example.com/shoes.jpg',
    stock: 100
  }
];

const initDB = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Product.deleteMany({});
    await User.deleteMany({});
    console.log('Cleared existing data');

    // Create sample products
    const products = await Product.insertMany(sampleProducts);
    console.log('Created sample products');

    // Create admin user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('admin123', salt);

    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@shopsphere.com',
      password: hashedPassword,
      role: 'admin'
    });
    console.log('Created admin user');

    console.log('Database initialization completed successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
};

initDB(); 