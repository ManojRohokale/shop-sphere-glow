
import { Truck, ShieldCheck, RotateCcw, Clock } from "lucide-react";
import { motion } from "framer-motion";

const FeatureHighlights = () => {
  const features = [
    {
      icon: Truck,
      title: "Express Delivery",
      description: "Free shipping on premium orders",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: ShieldCheck,
      title: "Secure Shopping",
      description: "100% protected transactions",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day hassle-free returns",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-6 transform transition-transform group-hover:rotate-6`}>
                  <feature.icon className="w-full h-full text-white" />
                </div>
                
                <h4 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 transition-colors duration-300">
                  {feature.title}
                </h4>
                
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
