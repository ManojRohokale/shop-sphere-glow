import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart-context";
import { useAuth } from "@/lib/auth-context";

interface PaymentProps {
  onSuccess: () => void;
  onError: (error: string) => void;
}

export const Payment = ({ onSuccess, onError }: PaymentProps) => {
  const { totalPrice, items } = useCart();
  const { user } = useAuth();

  const handleCheckout = async () => {
    try {
      // Create order in backend
      const response = await fetch('http://localhost:5000/api/payments/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: items,
          userId: user?.uid,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create order');
      }

      // Clear cart and show success message
      onSuccess();
    } catch (error: any) {
      onError(error.message || 'Error processing order');
    }
  };

  return (
    <Button
      onClick={handleCheckout}
      className="w-full bg-shop-purple hover:bg-shop-purple-dark"
    >
      Place Order ₹{totalPrice.toFixed(2)}
    </Button>
  );
};

export default Payment; 