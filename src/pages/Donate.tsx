
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState("100");
  const [customAmount, setCustomAmount] = useState("");
  const [tipPercentage, setTipPercentage] = useState("17.5");
  const [paymentMethod, setPaymentMethod] = useState("paypal");
  const [showAnonymous, setShowAnonymous] = useState(false);
  const [receiveUpdates, setReceiveUpdates] = useState(false);

  const presetAmounts = ["50", "100", "200", "300", "500", "1000"];

  const finalAmount = customAmount || donationAmount;
  const tipAmount = (parseFloat(finalAmount) * parseFloat(tipPercentage)) / 100;
  const totalAmount = parseFloat(finalAmount) + tipAmount;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 mr-6">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Campanha
              </Link>
              <h1 className="text-2xl font-bold text-green-500">gofundme</h1>
            </div>
            <div className="text-sm text-gray-600">
              Já tem uma conta? <a href="#" className="text-green-500 hover:underline">Entrar</a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Campaign Info */}
          <div className="flex items-start space-x-4 mb-6">
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?w=80&h=80&fit=crop&crop=face"
              alt="Enilio & Marta"
              className="w-20 h-20 rounded-lg object-cover"
            />
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                Você está apoiando Enilio & Marta wedding
              </h2>
              <p className="text-sm text-gray-600">
                Sua doação beneficiará Ines Gaspar
              </p>
            </div>
          </div>

          {/* Amount Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Digite sua doação</h3>
            
            <div className="grid grid-cols-3 gap-2 mb-4">
              {presetAmounts.map((amount) => (
                <Button
                  key={amount}
                  variant={donationAmount === amount && !customAmount ? "default" : "outline"}
                  onClick={() => {
                    setDonationAmount(amount);
                    setCustomAmount("");
                  }}
                  className={`relative ${donationAmount === amount && !customAmount ? "bg-green-500 hover:bg-green-600 text-white" : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"}`}
                >
                  €{amount}
                  {donationAmount === amount && !customAmount && amount === "100" && (
                    <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                      SUGERIDO
                    </span>
                  )}
                </Button>
              ))}
            </div>
            
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">€</span>
              <Input
                type="text"
                placeholder=".00"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="pl-12 pr-16 text-lg h-14 text-right border-gray-300"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">EUR</span>
            </div>
          </div>

          {/* Tip Section */}
          <div className="mb-6">
            <h3 className="text-base font-medium text-gray-900 mb-2">Gorjeta para os serviços do GoFundMe</h3>
            <p className="text-sm text-gray-600 mb-4">
              A tarifa da plataforma GoFundMe para os organizadores é 0%. O GoFundMe continua a 
              oferecer seus serviços graças aos doadores, que doam uma quantia opcional aqui:
            </p>
            
            <div className="text-center mb-4">
              <span className="text-2xl font-bold text-gray-900">{tipPercentage}%</span>
            </div>
            
            <div className="text-center">
              <button className="text-green-500 underline text-sm">
                Inserir gorjeta personalizada
              </button>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <h3 className="text-base font-medium text-gray-900 mb-4">Forma de pagamento</h3>
            
            <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-3">
              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <RadioGroupItem value="paypal" id="paypal" />
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">P</span>
                  </div>
                  <Label htmlFor="paypal" className="flex-1">PayPal</Label>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <RadioGroupItem value="google" id="google" />
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-white border rounded flex items-center justify-center">
                    <span className="text-xs">G</span>
                  </div>
                  <Label htmlFor="google" className="flex-1">Google Pay</Label>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 border rounded-lg">
                <RadioGroupItem value="card" id="card" />
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center">
                    <span className="text-xs">💳</span>
                  </div>
                  <Label htmlFor="card" className="flex-1">Crédito ou débito</Label>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Checkboxes */}
          <div className="mb-6 space-y-3">
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="anonymous"
                checked={showAnonymous}
                onChange={(e) => setShowAnonymous(e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="anonymous" className="text-sm text-gray-700">
                Não mostrar as minhas informações publicamente na arrecadação de fundos.
              </label>
            </div>
            
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="updates"
                checked={receiveUpdates}
                onChange={(e) => setReceiveUpdates(e.target.checked)}
                className="mt-1"
              />
              <label htmlFor="updates" className="text-sm text-gray-700">
                Sim, quero receber atualizações do GoFundMe sobre como mudar a vida das pessoas. Pode cancelar a assinatura em qualquer altura.
              </label>
            </div>
          </div>

          {/* Total Summary */}
          <div className="mb-6 space-y-2">
            <h3 className="text-base font-medium text-gray-900 mb-3">Sua doação</h3>
            
            <div className="flex justify-between text-sm">
              <span>Sua doação</span>
              <span>€{parseFloat(finalAmount).toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between text-sm">
              <span>Gorjeta para o GoFundMe</span>
              <span>€{tipAmount.toFixed(2)}</span>
            </div>
            
            <hr className="my-3" />
            
            <div className="flex justify-between font-medium">
              <span>Total devido hoje</span>
              <span>€{totalAmount.toFixed(2)}</span>
            </div>
          </div>

          {/* PayPal Button */}
          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-4 text-lg font-medium mb-4">
            PayPal
          </Button>

          {/* Terms */}
          <p className="text-xs text-gray-500 text-center mb-6">
            Ao clicar em 'PayPal', você concorda com os{" "}
            <a href="#" className="text-blue-600 hover:underline">Termos de Serviço</a> e{" "}
            <a href="#" className="text-blue-600 hover:underline">Aviso de Privacidade</a> do 
            GoFundMe. Saiba mais sobre{" "}
            <a href="#" className="text-blue-600 hover:underline">preços e tarifas</a>.
          </p>

          {/* Protection Notice */}
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-gray-600 mt-0.5" />
              <div>
                <h3 className="font-medium text-gray-900">O GoFundMe protege a sua doação</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Garantimos um reembolso total por até um ano no caso raro de ocorrência de 
                  fraude. <a href="#" className="text-green-500 hover:underline">Consulte nossa Garantia de Doação GoFundMe</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Donate;
