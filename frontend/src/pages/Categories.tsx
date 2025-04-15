import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';

const categories = [
  {
    id: 'skincare',
    name: 'Skincare',
    description: 'Discover our premium skincare collection',
    image: '/images/categories/skincare.jpg',
    featuredProducts: [
      {
        id: 1,
        name: 'Hydrating Serum',
        price: 1299,
        image: '/images/products/serum.jpg',
        rating: 4.7,
      },
      {
        id: 2,
        name: 'Night Cream',
        price: 1499,
        image: '/images/products/night-cream.jpg',
        rating: 4.5,
      },
    ],
  },
  {
    id: 'makeup',
    name: 'Makeup',
    description: 'Explore our luxury makeup range',
    image: '/images/categories/makeup.jpg',
    featuredProducts: [
      {
        id: 3,
        name: 'Liquid Foundation',
        price: 1799,
        image: '/images/products/foundation.jpg',
        rating: 4.8,
      },
      {
        id: 4,
        name: 'Lipstick Set',
        price: 1999,
        image: '/images/products/lipstick.jpg',
        rating: 4.9,
      },
    ],
  },
  // Add more categories...
];

export const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Categories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-48">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h2 className="text-2xl font-bold">{category.name}</h2>
                <p className="text-sm">{category.description}</p>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4">Featured Products</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.featuredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    rating={product.rating}
                  />
                ))}
              </div>
              
              <Link
                to={`/shop?category=${category.id}`}
                className="mt-4 inline-block w-full text-center py-2 bg-shop-purple text-white rounded-md hover:bg-shop-purple-dark transition-colors"
              >
                View All {category.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories; 