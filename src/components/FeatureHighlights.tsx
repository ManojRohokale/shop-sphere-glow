
import { Truck, ShieldCheck, RotateCcw, Clock, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const FeatureHighlights = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  
  const features = [
    {
      icon: Truck,
      title: "Express Delivery",
      description: "Free shipping on premium orders",
      gradient: "from-violet-600 to-fuchsia-600"
    },
    {
      icon: ShieldCheck,
      title: "Secure Shopping",
      description: "100% protected transactions",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day hassle-free returns",
      gradient: "from-emerald-500 to-teal-400"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section className="py-20 relative overflow-hidden">
      {/* Glossy background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-70"></div>
      
      {/* Animated background pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.1) 0%, transparent 50%), 
                              radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`,
          }}
        ></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse', ease: "linear" }}
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.07) 0%, transparent 8%)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">The ShopSphere Advantage</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-shop-purple to-shop-purple-light mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="relative"
              variants={itemVariants}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              whileHover={{ y: -5, transition: { type: "spring", stiffness: 300 } }}
            >
              <div className="h-full group relative bg-white backdrop-blur-lg bg-opacity-70 rounded-2xl p-7 transition-all duration-300
                           shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.07)] overflow-hidden">
                
                {/* Background gradient that shows on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}
                  initial={false}
                  animate={hoveredFeature === index ? { scale: 1.05 } : { scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 30 }}
                />
                
                {/* Particle effects (show on hover) */}
                {hoveredFeature === index && (
                  <>
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                          width: Math.random() * 4 + 2 + "px",
                          height: Math.random() * 4 + 2 + "px",
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        initial={{ opacity: 0 }}
                        animate={{
                          y: [0, Math.random() * -50 - 20],
                          x: [0, (Math.random() - 0.5) * 30],
                          opacity: [0, 0.8, 0],
                        }}
                        transition={{
                          duration: Math.random() * 1 + 1,
                          ease: "easeOut",
                        }}
                      />
                    ))}
                  </>
                )}
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} p-3.5 mb-6 
                                transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 
                                shadow-lg shadow-${feature.gradient.split('-')[1]}-400/20`}>
                    <feature.icon className="w-full h-full text-white" />
                  </div>
                  
                  <h4 className="text-xl font-semibold mb-3 text-gray-800 
                               group-hover:text-transparent group-hover:bg-clip-text 
                               group-hover:bg-gradient-to-r group-hover:from-[#8B5CF6] group-hover:to-[#D6BCFA] 
                               transition-colors duration-300">
                    {feature.title}
                  </h4>
                  
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Subtle icon in the bottom right */}
                  <div className="absolute bottom-4 right-4 text-gray-200 opacity-20 group-hover:opacity-30 transition-opacity">
                    <Zap className="w-12 h-12" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
