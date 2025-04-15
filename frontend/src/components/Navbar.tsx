import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, User, Menu, X, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useCart } from "@/lib/cart-context";
import { useAuth } from "@/lib/auth-context";
import { LoginDialog } from "@/components/LoginDialog";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { items, totalItems, totalPrice } = useCart();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  // Get user's name from email (everything before @)
  const getUserName = () => {
    if (!user?.email) return "";
    return user.email.split('@')[0];
  };

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
            
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Hello, {getUserName()}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleLogout}
                  className="hover:scale-105 transition-transform duration-200"
                >
                  <LogOut className="w-5 h-5" />
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsLoginOpen(true)}
                className="hover:scale-105 transition-transform duration-200"
              >
                <User className="w-5 h-5" />
              </Button>
            )}
            
            {/* Cart Link */}
            <Link to="/cart">
              <Button 
                variant="outline" 
                className="rounded-full hover:scale-105 transition-all duration-200 hover:shadow-lg hover:border-shop-purple"
              >
                <ShoppingBag className="w-5 h-5 mr-2 text-shop-purple" />
                {totalItems > 0 && (
                  <span className="bg-shop-purple text-white rounded-full px-2 py-0.5 text-xs animate-scale-in">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
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
            
            {user ? (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Hello, {getUserName()}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={handleLogout}
                  className="relative"
                >
                  <LogOut className="w-5 h-5" />
                </Button>
              </div>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsLoginOpen(true)}
                className="relative"
              >
                <User className="w-5 h-5" />
              </Button>
            )}
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-shop-purple text-white rounded-full text-xs flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>
            
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
            </div>
          </div>
        )}
      </div>

      {/* Search Dialog */}
      <Dialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Search Products</DialogTitle>
            <DialogDescription>
              Find what you're looking for
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2">
            <Input
              type="search"
              placeholder="Search products..."
              className="flex-1"
            />
            <Button type="submit">Search</Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Login Dialog */}
      <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} />
    </nav>
  );
};

export default Navbar;
