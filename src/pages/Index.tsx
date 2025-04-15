
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import TrendingSection from "@/components/TrendingSection";
import Testimonials from "@/components/Testimonials";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import FeatureHighlights from "@/components/FeatureHighlights";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureHighlights />
        <FeaturedProducts />
        <TrendingSection />
        <Categories />
        <Testimonials />
        <Newsletter />
        
        {/* Brands Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold text-gray-700">Trusted by Top Brands</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
              {['Nike', 'Apple', 'Samsung', 'Sony', 'LG', 'Adidas'].map((brand) => (
                <div key={brand} className="text-xl md:text-2xl font-bold text-gray-400 hover:text-shop-purple transition-colors">
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
