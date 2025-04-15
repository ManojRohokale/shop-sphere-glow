import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import TrendingSection from "@/components/TrendingSection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FeatureHighlights from "@/components/FeatureHighlights";
import { motion } from "framer-motion";

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
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-50 to-transparent"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)'
            }}
          />
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0px 0px', '100px 100px'],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundImage: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, transparent 5%)',
                backgroundSize: '60px 60px',
              }}
            />
          </div>
          
          {/* Content */}
          <motion.div 
            className="container mx-auto px-4 relative z-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl font-display font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Trusted by Global Brands
              </motion.h2>
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-shop-purple to-shop-purple-light mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </div>
            
            {/* Animated brand logos */}
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
              {['Nike', 'Apple', 'Samsung', 'Sony', 'LG', 'Adidas'].map((brand, index) => (
                <motion.div 
                  key={brand}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  <div className="text-2xl md:text-3xl font-bold relative group">
                    {/* Base text with gradient */}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600 
                                   group-hover:from-shop-purple group-hover:to-shop-purple-dark 
                                   transition-all duration-300">
                      {brand}
                    </span>
                    
                    {/* Glowing effect on hover */}
                    <div className="absolute inset-0 rounded-md filter blur-md bg-shop-purple/0 
                               group-hover:bg-shop-purple/20 transition-all duration-300 -z-10"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
