
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative h-[80vh] bg-gradient-to-r from-shop-gray-dark to-shop-purple-dark text-white overflow-hidden">
      {/* Hero content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Discover Our Latest Collection</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Elevate your style with our premium selection of fashion, electronics, and home goods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-shop-purple-dark hover:bg-gray-100 rounded-full font-medium"
            >
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10 rounded-full"
            >
              Explore Collections
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative circles */}
      <div className="absolute top-1/4 left-2/3 w-96 h-96 bg-shop-purple opacity-20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-shop-purple-light opacity-10 rounded-full blur-3xl"></div>
      
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2256%22%20height%3D%2256%22%20fill%3D%22%23fff%22%20opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M8%2025h4v1H8v-1zm8%200h4v1h-4v-1zm8%200h4v1h-4v-1zm8%200h4v1h-4v-1zm8%200h4v1h-4v-1zM4%2025H0v1h4v-1z%22%2F%3E%3C%2Fsvg%3E')] opacity-30"></div>
    </div>
  );
};

export default Hero;
