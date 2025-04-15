
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[90vh] bg-gradient-to-br from-shop-purple via-shop-purple-dark to-shop-gray-dark text-white overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        <div className="absolute w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2256%22%20height%3D%2256%22%20fill%3D%22%23fff%22%20opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M8%2025h4v1H8v-1zm8%200h4v1h-4v-1zm8%200h4v1h-4v-1zm8%200h4v1h-4v-1zm8%200h4v1h-4v-1zM4%2025H0v1h4v-1z%22%2F%3E%3C%2Fsvg%3E')] opacity-20 animate-[pulse_4s_ease-in-out_infinite]"></div>
      </div>

      {/* Floating circles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full mix-blend-overlay animate-float-${i + 1}`}
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              background: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 0.1)`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
            <span className="text-sm font-medium">Discover the Extraordinary</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
            Elevate Your Lifestyle With Curated Excellence
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            Experience a new dimension of online shopping where innovation meets elegance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-shop-purple-dark hover:bg-gray-100 rounded-full font-medium group transition-all duration-300 transform hover:scale-105"
            >
              Explore Collection 
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/50 text-white hover:bg-white/10 rounded-full backdrop-blur-sm"
            >
              Watch Showcase
            </Button>
          </div>
        </div>
      </div>

      {/* Dynamic gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  );
};

export default Hero;
