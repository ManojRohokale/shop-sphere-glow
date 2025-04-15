
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = [
    {
      id: "fashion",
      name: "Fashion",
      description: "Discover the latest trends in clothing and accessories",
      image: "bg-category-fashion",
      link: "/categories/fashion"
    },
    {
      id: "electronics",
      name: "Electronics",
      description: "Cutting-edge technology for your lifestyle",
      image: "bg-category-electronics",
      link: "/categories/electronics"
    },
    {
      id: "home",
      name: "Home & Living",
      description: "Beautiful pieces for your perfect space",
      image: "bg-category-home",
      link: "/categories/home"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Browse our curated categories and find exactly what you're looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              to={category.link}
              key={category.id}
              className="group relative h-80 rounded-xl overflow-hidden shadow-md animate-fade-in"
            >
              {/* Background Image */}
              <div 
                className={`absolute inset-0 ${category.image} bg-cover bg-center transition-transform duration-500 group-hover:scale-110`}
              ></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="mb-4 text-gray-200">{category.description}</p>
                <div className="flex items-center font-medium transition-colors duration-200 text-shop-purple-light group-hover:text-white">
                  Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
