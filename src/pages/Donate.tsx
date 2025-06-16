import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Shield, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import StripePayment from "@/components/StripePayment";
import "@/utils/mockStripeCheckout"; // Import mock API

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [tipAmount, setTipAmount] = useState("3");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [showTip, setShowTip] = useState(false);

  const presetAmounts = ["25", "50", "100", "250", "500"];
  const tipOptions = ["0", "3", "5", "10"];

  const finalAmount = parseFloat(customAmount || donationAmount);
  const finalTipAmount = parseFloat(tipAmount);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 mr-6">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Voltar
              </Link>
              <h1 className="text-2xl font-bold text-green-600">GoFundMe</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Campaign Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  E
                </div>
                <div>
                  <h2 className="text-xl font-semibold">Casamento Enilio & Marta</h2>
                  <p className="text-gray-600">Organizado por Enilio Martinez</p>
                </div>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg overflow-hidden mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=450&fit=crop"
                  alt="Casal de noivos"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>€12.450 arrecadados</span>
                  <span>€20.000 meta</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '62%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>127 doações</span>
                  <span>18 dias restantes</span>
                </div>
              </div>
            </div>

            {/* Security Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-blue-900">Sua doação está protegida</h3>
                  <p className="text-sm text-blue-700 mt-1">
                    Garantimos reembolso total por até um ano no raro caso de fraude.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Donation Form */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-6">Faça sua doação</h2>

            <div className="space-y-6">
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Quanto você gostaria de doar?
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {presetAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={donationAmount === amount && !customAmount ? "default" : "outline"}
                      onClick={() => {
                        setDonationAmount(amount);
                        setCustomAmount("");
                      }}
                      className={donationAmount === amount && !customAmount ? "bg-green-600 hover:bg-green-700" : ""}
                    >
                      €{amount}
                    </Button>
                  ))}
                </div>
                
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">€</span>
                  <Input
                    type="number"
                    placeholder="Outro valor"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="pl-8 text-lg h-12"
                  />
                </div>
              </div>

              {/* Tip Section */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">Gorjeta para o GoFundMe</span>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-sm"
                    onClick={() => setShowTip(!showTip)}
                  >
                    Saiba mais
                  </Button>
                </div>
                
                {showTip && (
                  <p className="text-sm text-gray-600 mb-3">
                    O GoFundMe tem 0% de taxa para organizadores. Uma gorjeta voluntária ajuda a manter o GoFundMe funcionando.
                  </p>
                )}

                <RadioGroup value={tipAmount} onValueChange={setTipAmount} className="grid grid-cols-4 gap-2">
                  {tipOptions.map((tip) => (
                    <div key={tip} className="flex items-center space-x-2">
                      <RadioGroupItem value={tip} id={`tip-${tip}`} className="sr-only" />
                      <Label 
                        htmlFor={`tip-${tip}`} 
                        className={`cursor-pointer border rounded-lg p-2 text-center w-full ${
                          tipAmount === tip ? 'bg-green-100 border-green-500' : 'bg-white border-gray-300'
                        }`}
                      >
                        €{tip}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="font-medium">Informações pessoais</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">Nome</Label>
                    <Input
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Nome"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Sobrenome"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Endereço de email"
                    required
                  />
                </div>
              </div>

              {/* Total Summary */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Sua doação</span>
                  <span className="font-medium">€{finalAmount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Gorjeta GoFundMe</span>
                  <span>€{finalTipAmount.toFixed(2)}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total a pagar hoje</span>
                  <span>€{(finalAmount + finalTipAmount).toFixed(2)}</span>
                </div>
              </div>

              {/* Stripe Payment Integration */}
              <StripePayment
                amount={finalAmount}
                tipAmount={finalTipAmount}
                firstName={firstName}
                lastName={lastName}
                email={email}
              />

              {/* Security Notice */}
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Lock className="h-4 w-4" />
                <span>Suas informações de pagamento são seguras e criptografadas</span>
              </div>

              {/* Terms */}
              <p className="text-xs text-gray-500 text-center">
                Ao continuar, você concorda com os{" "}
                <a href="#" className="text-blue-600 hover:underline">termos</a> e{" "}
                <a href="#" className="text-blue-600 hover:underline">política de privacidade</a> do GoFundMe.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Donate;
