import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{id: string; name: string; price: number; quantity: number}[]>([]);
  
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
          className="relative hover:scale-105 transition-transform duration-200"
        >
          <Search className="w-5 h-5" />
        </Button>
        
        <Button variant="ghost" size="icon" className="hover:scale-105 transition-transform duration-200">
          <User className="w-5 h-5" />
        </Button>
        
        {/* Cart Sheet Trigger */}
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="outline" 
              className="rounded-full hover:scale-105 transition-all duration-200 hover:shadow-lg hover:border-shop-purple"
            >
              <ShoppingBag className="w-5 h-5 mr-2 text-shop-purple" />
              {cartCount > 0 && (
                <span className="bg-shop-purple text-white rounded-full px-2 py-0.5 text-xs animate-scale-in">
                  {cartCount}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="sm:max-w-md">
            <SheetHeader>
              <SheetTitle className="text-2xl font-display text-shop-purple flex items-center gap-2">
                <ShoppingBag className="w-6 h-6" />
                Your Cart
              </SheetTitle>
            </SheetHeader>
            <div className="mt-8">
              {cartItems.length > 0 ? (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div 
                      key={item.id} 
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:shadow-md transition-all duration-200 animate-fade-in"
                    >
                      <div className="flex flex-col">
                        <span className="font-medium text-gray-900">{item.name}</span>
                        <span className="text-sm text-gray-500">Quantity: {item.quantity}</span>
                      </div>
                      <span className="font-semibold text-shop-purple">${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total:</span>
                      <span className="text-shop-purple">
                        ${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-shop-purple hover:bg-shop-purple-dark transition-colors duration-200 animate-scale-in">
                    Proceed to Checkout
                  </Button>
                </div>
              ) : (
                <div className="text-center py-12 space-y-4 animate-fade-in">
                  <ShoppingBag className="mx-auto w-16 h-16 text-gray-300" />
                  <h3 className="text-xl font-medium text-gray-900">Your cart is empty</h3>
                  <p className="text-gray-500 max-w-sm mx-auto">
                    Looks like you haven't added anything to your cart yet.
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-shop-purple text-shop-purple hover:bg-shop-purple hover:text-white transition-all duration-200"
                  >
                    Continue Shopping
                  </Button>
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
        <DialogContent className="sm:max-w-[600px] p-6 animate-scale-in">
          <DialogHeader>
            <DialogTitle className="text-2xl font-display text-shop-purple">Search Products</DialogTitle>
            <DialogDescription>
              Find your perfect item from our collection
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 space-y-6">
            <div className="flex items-center border-2 border-gray-200 rounded-lg overflow-hidden hover:border-shop-purple transition-colors duration-200">
              <Search className="ml-3 text-gray-400 w-5 h-5" />
              <Input 
                type="text"
                placeholder="Search for products..." 
                className="flex-1 border-0 focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-lg"
                autoFocus
              />
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-3">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {['Sneakers', 'Summer Collection', 'Dresses', 'Electronics', 'Home Decor'].map((term) => (
                  <Button 
                    key={term}
                    variant="outline"
                    size="sm"
                    className="rounded-full border-shop-purple text-shop-purple hover:bg-shop-purple hover:text-white transition-all duration-200"
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
