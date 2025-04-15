
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import TrendingSection from "@/components/TrendingSection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FeatureHighlights from "@/components/FeatureHighlights";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-shop-purple-dark/5 to-transparent pointer-events-none"></div>
          <FeatureHighlights />
        </div>
        <FeaturedProducts />
        <TrendingSection />
        <Categories />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
          <Testimonials />
        </div>
        <Newsletter />
        
        {/* Brands Section */}
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-50 to-transparent"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-display font-bold text-gray-800 mb-4">Trusted by Global Brands</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-shop-purple to-shop-purple-light mx-auto"></div>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              {['Nike', 'Apple', 'Samsung', 'Sony', 'LG', 'Adidas'].map((brand) => (
                <div 
                  key={brand}
                  className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600 hover:from-shop-purple hover:to-shop-purple-dark transition-all duration-300 cursor-pointer"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
