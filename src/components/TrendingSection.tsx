
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrendingSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Trending Now</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover what's hot and trending across all our collections.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Large Card */}
          <div className="relative group h-[500px] overflow-hidden rounded-xl shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-shop-purple/60 to-shop-purple-dark/80 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Premium headphones collection" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white z-20">
              <span className="uppercase tracking-wider text-sm font-semibold text-white/80 mb-2">Limited Edition</span>
              <h3 className="text-3xl font-bold mb-4">Premium Audio Experience</h3>
              <p className="mb-6 text-white/90 max-w-md">
                Discover our exclusive collection of high-end audio equipment designed for audiophiles.
              </p>
              <Button 
                variant="outline" 
                className="w-max border-white text-white hover:bg-white hover:text-shop-purple-dark transition-colors duration-200"
              >
                Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Right Column - 2 Smaller Cards */}
          <div className="flex flex-col gap-8">
            <div className="relative group h-[235px] overflow-hidden rounded-xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-shop-gray-dark/60 to-black/80 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Athletic footwear" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-20">
                <span className="uppercase tracking-wider text-xs font-semibold text-white/80 mb-1">New Season</span>
                <h3 className="text-2xl font-bold mb-2">Athletic Performance</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-max p-0 text-white hover:text-white hover:bg-transparent"
                >
                  Shop Now <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
            
            <div className="relative group h-[235px] overflow-hidden rounded-xl shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/60 to-amber-900/80 group-hover:opacity-90 transition-opacity duration-300 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Home decor collection" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white z-20">
                <span className="uppercase tracking-wider text-xs font-semibold text-white/80 mb-1">Handcrafted</span>
                <h3 className="text-2xl font-bold mb-2">Modern Home Decor</h3>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="w-max p-0 text-white hover:text-white hover:bg-transparent"
                >
                  Shop Now <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
