import { useToast } from "@/components/ui/use-toast";

export const useCartToast = () => {
  const { toast } = useToast();

  const showAddToCartToast = (productName: string) => {
    toast({
      title: "Added to Cart",
      description: `${productName} has been added to your cart.`,
      className: "bg-green-500 text-white",
    });
  };

  return { showAddToCartToast };
}; 