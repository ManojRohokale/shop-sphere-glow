
import { useState } from "react";
import ProductCard, { ProductProps } from "./ProductCard";

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  const products: ProductProps[] = [
    {
      id: "1",
      name: "Premium Wireless Headphones",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Electronics",
      isNew: true
    },
    {
      id: "2",
      name: "Designer Leather Backpack",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      category: "Fashion",
      isSale: true
    },
    {
      id: "3",
      name: "Smart Home Speaker System",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Electronics"
    },
    {
      id: "4",
      name: "Minimalist Watch Collection",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1539874754764-5a96559165b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
      category: "Fashion",
      isNew: true
    },
    {
      id: "5",
      name: "Modern Ceramic Vase Set",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1612375689547-b5c1e957b617?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      category: "Home"
    },
    {
      id: "6",
      name: "Organic Cotton T-Shirt",
      price: 34.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
      category: "Fashion",
      isSale: true
    },
    {
      id: "7",
      name: "Wireless Charging Station",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1625903742930-91508e234de8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Electronics"
    },
    {
      id: "8",
      name: "Artisanal Coffee Set",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      category: "Home"
    }
  ];

  const filteredProducts = activeTab === "all" 
    ? products 
    : products.filter(product => product.category.toLowerCase() === activeTab);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the finest products across all categories.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
            {['all', 'electronics', 'fashion', 'home'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-full text-sm transition-colors duration-200
                  ${activeTab === tab 
                    ? 'bg-shop-purple text-white shadow-md' 
                    : 'text-gray-700 hover:text-shop-purple'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="animate-scale-in">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
