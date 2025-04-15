
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="bg-shop-purple py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            {/* Left content */}
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Join Our Newsletter
              </h2>
              <p className="text-shop-purple-light max-w-md mb-6">
                Subscribe to get special offers, free giveaways, and exclusive deals.
                Be the first to know when new products arrive.
              </p>
              
              {/* Social proof */}
              <div className="flex items-center space-x-2">
                <span className="text-sm">Join 20,000+ subscribers</span>
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="w-6 h-6 rounded-full bg-shop-purple-light border border-shop-purple text-center text-xs flex items-center justify-center"
                    >
                      {i}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right form */}
            <div className="flex-1 w-full">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/20">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Your email address" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <Button 
                    className="w-full bg-white text-shop-purple hover:bg-white/90"
                  >
                    Subscribe Now
                  </Button>
                  <p className="text-xs text-center text-white/70">
                    By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
