
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{id: string; name: string; price: number; quantity: number}[]>([]);
  
  // This would typically come from your cart context or store
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-display font-bold text-shop-purple">
            ShopSphere
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-gray-700 hover:text-shop-purple transition-colors duration-200">
              Shop
            </Link>
            <Link to="/categories" className="text-gray-700 hover:text-shop-purple transition-colors duration-200">
              Categories
            </Link>
            <Link to="/collections" className="text-gray-700 hover:text-shop-purple transition-colors duration-200">
              Collections
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-shop-purple transition-colors duration-200">
              About
            </Link>
          </div>

          {/* Search and User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Dialog Trigger */}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            
            {/* Cart Sheet Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="rounded-full">
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  <span>{cartCount}</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  {cartItems.length > 0 ? (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                          <span>{item.name} (x{item.quantity})</span>
                          <span>${item.price.toFixed(2)}</span>
                        </div>
                      ))}
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>
                            ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-shop-purple">
                        Checkout
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <ShoppingBag className="mx-auto w-12 h-12 text-gray-300" />
                      <h3 className="mt-4 text-lg font-medium">Your cart is empty</h3>
                      <p className="mt-2 text-gray-500">
                        Looks like you haven't added anything to your cart yet.
                      </p>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsSearchOpen(true)}
              className="relative"
            >
              <Search className="w-5 h-5" />
            </Button>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="w-5 h-5" />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 w-4 h-4 bg-shop-purple text-white rounded-full text-xs flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Your Cart</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  {cartItems.length > 0 ? (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                          <span>{item.name} (x{item.quantity})</span>
                          <span>${item.price.toFixed(2)}</span>
                        </div>
                      ))}
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>
                            ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
                          </span>
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-shop-purple">
                        Checkout
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-10">
                      <ShoppingBag className="mx-auto w-12 h-12 text-gray-300" />
                      <h3 className="mt-4 text-lg font-medium">Your cart is empty</h3>
                      <p className="mt-2 text-gray-500">
                        Looks like you haven't added anything to your cart yet.
                      </p>
                    </div>
                  )}
                </div>
              </SheetContent>
            </Sheet>
            
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/products" 
                className="text-gray-700 hover:text-shop-purple py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/categories" 
                className="text-gray-700 hover:text-shop-purple py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link 
                to="/collections" 
                className="text-gray-700 hover:text-shop-purple py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Collections
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-shop-purple py-2 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <div className="flex items-center pt-2">
                <Button variant="ghost" size="icon">
                  <User className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Search Products</DialogTitle>
          </DialogHeader>
          <div className="mt-6">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <Search className="ml-3 text-gray-400 w-5 h-5" />
              <Input 
                type="text"
                placeholder="Search for products..." 
                className="flex-1 border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                autoFocus
              />
            </div>
            
            <div className="mt-6">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {['Sneakers', 'Summer Collection', 'Dresses', 'Electronics', 'Home Decor'].map((term) => (
                  <Button 
                    key={term}
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                    onClick={() => console.log(`Search for ${term}`)}
                  >
                    {term}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
};

export default Navbar;
