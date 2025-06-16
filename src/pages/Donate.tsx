import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Heart, ArrowLeft, Shield, CreditCard, Lock, Target, Trophy, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [tipAmount, setTipAmount] = useState("3");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [showTip, setShowTip] = useState(false);

  const presetAmounts = ["25", "50", "100", "250", "500"];
  const tipOptions = ["0", "3", "5", "10"];

  const finalAmount = customAmount || donationAmount;
  const totalAmount = parseFloat(finalAmount) + parseFloat(tipAmount);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 mr-6">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back
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
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-green-800 to-green-600 rounded-lg shadow-sm p-8 text-white">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Experience an Unforgettable Day</h2>
                  <p className="text-green-100">A VIP Golf & Charity Experience</p>
                </div>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-50 rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=450&fit=crop"
                  alt="Golf charity event"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-lg mb-4">
                Join us for a legendary golf experience while supporting those in need through our community platform.
              </p>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-3">
                  <Trophy className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm">Professional Instruction</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <Users className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm">Networking</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <Target className="h-6 w-6 mx-auto mb-2" />
                  <div className="text-sm">Charity Impact</div>
                </div>
              </div>
            </div>

            {/* Campaign Details */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Supporting Our Community</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>€18,750 arrecadados</span>
                  <span>€25,000 meta</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>156 doações</span>
                  <span>12 dias restantes</span>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-green-800 mb-2">Como Funciona</h4>
                <div className="space-y-2 text-sm text-green-700">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs mr-3">1</div>
                    <span>Faça sua doação</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs mr-3">2</div>
                    <span>Receba sua confirmação</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs mr-3">3</div>
                    <span>Ajude quem mais precisa</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Prêmios por Doação</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-blue-700">
                    <strong>€100+</strong><br />
                    Certificado digital
                  </div>
                  <div className="text-blue-700">
                    <strong>€250+</strong><br />
                    Kit exclusivo + certificado
                  </div>
                  <div className="text-blue-700">
                    <strong>€500+</strong><br />
                    Convite VIP para evento
                  </div>
                  <div className="text-blue-700">
                    <strong>€1000+</strong><br />
                    Experiência completa de golfe
                  </div>
                </div>
              </div>
            </div>

            {/* About the Cause */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4">Sobre Nossa Causa</h3>
              <div className="prose text-gray-700">
                <p className="mb-4">
                  100% das doações vão para a Children's Health Foundation através da nossa plataforma GoFundMe,
                  ajudando famílias registradas em nosso sistema que enfrentam dificuldades.
                </p>
                <p className="mb-4">
                  Nossa missão é conectar pessoas generosas com aqueles que mais precisam de apoio em nossa comunidade.
                  Cada doação faz a diferença na vida de uma família.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Transparência Total:</strong> Acompanhe como sua doação está sendo usada através de relatórios regulares.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Impacto Direto:</strong> Conectamos diretamente doadores com beneficiários verificados.
                  </p>
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
                    Garantimos reembolso total por até um ano no caso raro de fraude.
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
                  <span className="font-medium">Taxa de Serviço GoFundMe</span>
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
                    GoFundMe tem taxa 0% para organizadores. Uma contribuição voluntária ajuda a manter GoFundMe funcionando.
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
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Sobrenome</Label>
                    <Input
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Sobrenome"
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
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="font-medium mb-3">Método de pagamento</h3>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center space-x-3 p-3 border rounded-lg">
                    <RadioGroupItem value="card" id="card" />
                    <CreditCard className="h-5 w-5" />
                    <Label htmlFor="card" className="flex-1">Cartão de crédito ou débito</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Total Summary */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between">
                  <span>Sua doação</span>
                  <span className="font-medium">€{finalAmount}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Taxa GoFundMe</span>
                  <span>€{tipAmount}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total hoje</span>
                  <span>€{totalAmount.toFixed(2)}</span>
                </div>
              </div>

              {/* Donate Button */}
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg">
                <Heart className="w-5 h-5 mr-2" />
                Doar €{totalAmount.toFixed(2)}
              </Button>

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
