
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Loader2 } from "lucide-react";

interface StripePaymentProps {
  amount: number;
  tipAmount: number;
  firstName: string;
  lastName: string;
  email: string;
}

declare global {
  interface Window {
    Stripe: any;
  }
}

const StripePayment = ({ amount, tipAmount, firstName, lastName, email }: StripePaymentProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const totalAmount = amount + tipAmount;

  const createCheckoutSession = async () => {
    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Math.round(totalAmount * 100), // Convert to cents
          currency: "eur",
          customer_name: `${firstName} ${lastName}`,
          customer_email: email,
        }),
      });

      const data = await response.json();
      return data.sessionId;
    } catch (error) {
      console.error("Error creating checkout session:", error);
      throw error;
    }
  };

  const handleDonate = async () => {
    if (!firstName || !lastName || !email) {
      setMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (!window.Stripe) {
      setMessage("Stripe não foi carregado corretamente.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const stripe = window.Stripe("pk_test_51234567890abcdef"); // Replace with your publishable key
      const sessionId = await createCheckoutSession();

      const result = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });

      if (result.error) {
        setMessage(result.error.message || "Erro ao redirecionar para o pagamento.");
      }
    } catch (error) {
      setMessage("Erro ao processar pagamento. Tente novamente.");
      console.error("Payment error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Payment Message */}
      {message && (
        <div className="p-3 rounded-md text-sm bg-red-50 text-red-700 border border-red-200">
          {message}
        </div>
      )}

      {/* Submit Button */}
      <Button 
        onClick={handleDonate}
        disabled={isLoading}
        className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Processando...
          </>
        ) : (
          <>
            <Heart className="w-5 h-5 mr-2" />
            Doar €{totalAmount.toFixed(2)}
          </>
        )}
      </Button>

      {/* Security Notice */}
      <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
        <span>Pagamento seguro processado pelo Stripe</span>
      </div>
    </div>
  );
};

export default StripePayment;
