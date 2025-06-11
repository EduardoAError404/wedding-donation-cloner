
import { useState, useEffect, useRef } from "react";
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
  const [stripe, setStripe] = useState<any>(null);
  const [elements, setElements] = useState<any>(null);
  const [cardElement, setCardElement] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const cardElementRef = useRef<HTMLDivElement>(null);

  const totalAmount = amount + tipAmount;

  useEffect(() => {
    if (window.Stripe) {
      const stripeInstance = window.Stripe("pk_test_51234567890abcdef"); // Replace with your publishable key
      setStripe(stripeInstance);
      
      const elementsInstance = stripeInstance.elements();
      setElements(elementsInstance);

      const card = elementsInstance.create("card", {
        style: {
          base: {
            fontSize: "16px",
            color: "#424770",
            "::placeholder": {
              color: "#aab7c4",
            },
          },
        },
      });

      if (cardElementRef.current) {
        card.mount(cardElementRef.current);
        setCardElement(card);
      }
    }
  }, []);

  const createPaymentIntent = async () => {
    try {
      const response = await fetch("/api/create-payment-intent", {
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
      return data.clientSecret;
    } catch (error) {
      console.error("Error creating payment intent:", error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!stripe || !elements || !cardElement) {
      setMessage("Stripe não foi carregado corretamente.");
      return;
    }

    if (!firstName || !lastName || !email) {
      setMessage("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const clientSecret = await createPaymentIntent();

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: `${firstName} ${lastName}`,
            email: email,
          },
        },
      });

      if (result.error) {
        setMessage(result.error.message || "Ocorreu um erro no pagamento.");
      } else {
        setMessage("Pagamento realizado com sucesso! Obrigado pela sua doação.");
        // Here you could redirect or show success message
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
      {/* Card Element */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Informações do cartão
        </label>
        <div 
          ref={cardElementRef}
          className="p-3 border border-gray-300 rounded-md bg-white"
          style={{ minHeight: "40px" }}
        />
      </div>

      {/* Payment Message */}
      {message && (
        <div className={`p-3 rounded-md text-sm ${
          message.includes("sucesso") 
            ? "bg-green-50 text-green-700 border border-green-200" 
            : "bg-red-50 text-red-700 border border-red-200"
        }`}>
          {message}
        </div>
      )}

      {/* Submit Button */}
      <Button 
        onClick={handleSubmit}
        disabled={isLoading || !stripe}
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
