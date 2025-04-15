
import { Truck, ShieldCheck, RotateCcw, Clock } from "lucide-react";

const FeatureHighlights = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On all orders over $50"
    },
    {
      icon: ShieldCheck,
      title: "Secure Payments",
      description: "100% protected transactions"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day return policy"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Dedicated customer service"
    }
  ];

  return (
    <section className="py-12 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-shop-purple/10 p-3 rounded-full mb-4">
                <feature.icon className="w-6 h-6 text-shop-purple" />
              </div>
              <h4 className="font-semibold mb-1">{feature.title}</h4>
              <p className="text-sm text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
