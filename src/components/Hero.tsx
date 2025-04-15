
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, MovingDot } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mouse position for hover effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate parallax transform values
  const getParallaxStyle = (depth: number) => {
    const translateY = scrollY * depth;
    const rotateX = scrollY * 0.02 * depth;
    const scale = 1 + (scrollY * 0.0004 * depth);
    
    return {
      transform: `translateY(${translateY}px) rotateX(${rotateX}deg) scale(${scale})`,
      transition: 'transform 0.1s cubic-bezier(0.17, 0.67, 0.83, 0.67)'
    };
  };
  
  // Mouse-following effect for dynamic lighting
  const getDynamicLightingStyle = () => {
    const x = (mousePosition.x / window.innerWidth) * 100;
    const y = (mousePosition.y / window.innerHeight) * 100;
    
    return {
      background: `radial-gradient(circle at ${x}% ${y}%, rgba(139, 92, 246, 0.15), transparent 50%)`,
    };
  };

  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="relative min-h-[100vh] bg-gradient-to-br from-shop-purple/90 via-shop-purple-dark to-black text-white overflow-hidden">
      {/* Dynamic lighting effect based on mouse position */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={getDynamicLightingStyle()}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/10"
          style={{
            width: Math.random() * 10 + 2 + "px",
            height: Math.random() * 10 + 2 + "px",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * -30 - 10],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Animated background patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute w-full h-full bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2256%22%20height%3D%2256%22%20fill%3D%22%23fff%22%20opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M8%2025h4v1H8v-1zm8%200h4v1h-4v-1zm8%200h4v1h-4v-1zm8%200h4v1h-4v-1zm8%200h4v1h-4v-1zM4%2025H0v1h4v-1z%22%2F%3E%3C%2Fsvg%3E')]"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Animated grid lines */}
        <motion.div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "40px 40px"]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 opacity-20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, delay: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-20">
        <motion.div 
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{...getParallaxStyle(-0.05)}}
        >
          <motion.div 
            className="inline-flex items-center bg-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm border border-white/20"
            variants={itemVariants}
          >
            <Sparkles className="w-4 h-4 mr-2 text-yellow-300" />
            <span className="text-sm font-medium">The Future of Shopping Is Here</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-purple-400">
              Elevate Your Lifestyle
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-300 to-white">
              With Curated Excellence
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-2xl"
            variants={itemVariants}
          >
            Experience a new dimension of online shopping where innovation meets elegance.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            variants={itemVariants}
          >
            <Button 
              size="lg" 
              className="bg-white/20 backdrop-blur-md text-white hover:bg-white/30 rounded-full font-medium group transition-all duration-300 transform hover:scale-105 border border-white/30 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
            >
              Explore Collection 
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full backdrop-blur-sm"
            >
              Watch Showcase
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-white/50 text-sm mb-2">Scroll to Discover</div>
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full"
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
