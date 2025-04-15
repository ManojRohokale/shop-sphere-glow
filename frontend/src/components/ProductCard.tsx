import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/lib/cart-context";
import { useCartToast } from "@/components/Toast";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  description?: string;
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  image, 
  category, 
  isNew = false, 
  isSale = false,
  description
}: ProductProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { showAddToCartToast } = useCartToast();

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      price,
      image,
    });
    showAddToCartToast(name);
  };

  return (
    <Card 
      className="group overflow-hidden border-none rounded-lg shadow-sm hover:shadow-md transition-all duration-300 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-[300px] overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        
        {/* Product badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge className="bg-shop-purple text-white">New</Badge>
          )}
          {isSale && (
            <Badge className="bg-red-500 text-white">Sale</Badge>
          )}
        </div>
        
        {/* Quick actions */}
        <div 
          className={`absolute inset-x-0 bottom-0 flex justify-between items-center p-3 bg-white/90 backdrop-blur-sm
            transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
        >
          <Button 
            size="sm" 
            variant="outline" 
            className="rounded-full w-10 h-10 p-0"
          >
            <Heart className="h-4 w-4" />
          </Button>
          <Button 
            size="sm" 
            className="rounded-full bg-shop-purple hover:bg-shop-purple-dark"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      <div className="p-4">
        <div className="text-sm text-gray-500 mb-1">{category}</div>
        <h3 className="font-medium text-lg mb-1 line-clamp-1">{name}</h3>
        {description && (
          <p className="text-sm text-gray-500 mb-2">{description}</p>
        )}
        <div className="font-semibold text-shop-purple-dark">
          ${price.toFixed(2)}
          {isSale && <span className="ml-2 text-gray-400 line-through text-sm">${(price * 1.2).toFixed(2)}</span>}
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
