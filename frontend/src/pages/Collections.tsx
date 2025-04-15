import { Link } from 'react-router-dom';
import { ProductCard } from '@/components/ProductCard';

const collections = [
  {
    id: 'summer-essentials',
    name: 'Summer Essentials',
    description: 'Stay fresh and glowing this summer',
    image: '/images/collections/summer.jpg',
    products: [
      {
        id: 1,
        name: 'Sun Protection Kit',
        price: 1999,
        image: '/images/products/sun-protection.jpg',
        rating: 4.8,
      },
      {
        id: 2,
        name: 'Hydrating Mist',
        price: 899,
        image: '/images/products/hydrating-mist.jpg',
        rating: 4.6,
      },
      {
        id: 3,
        name: 'Lightweight Moisturizer',
        price: 1299,
        image: '/images/products/moisturizer.jpg',
        rating: 4.7,
      },
    ],
  },
  {
    id: 'luxury-gift-sets',
    name: 'Luxury Gift Sets',
    description: 'Perfect presents for your loved ones',
    image: '/images/collections/gift-sets.jpg',
    products: [
      {
        id: 4,
        name: 'Premium Skincare Set',
        price: 3499,
        image: '/images/products/skincare-set.jpg',
        rating: 4.9,
      },
      {
        id: 5,
        name: 'Makeup Collection',
        price: 2999,
        image: '/images/products/makeup-collection.jpg',
        rating: 4.8,
      },
      {
        id: 6,
        name: 'Fragrance Duo',
        price: 2499,
        image: '/images/products/fragrance-duo.jpg',
        rating: 4.7,
      },
    ],
  },
  // Add more collections...
];

export const Collections = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Collections</h1>
      
      <div className="space-y-12">
        {collections.map((collection) => (
          <div key={collection.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h2 className="text-3xl font-bold mb-2">{collection.name}</h2>
                <p className="text-lg">{collection.description}</p>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {collection.products.map((product) => (
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
                to={`/shop?collection=${collection.id}`}
                className="mt-6 inline-block px-6 py-2 bg-shop-purple text-white rounded-md hover:bg-shop-purple-dark transition-colors"
              >
                View All Products
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections; 