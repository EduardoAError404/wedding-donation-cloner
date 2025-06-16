
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Heart, ArrowLeft, Shield, Lock, Target, Trophy, Users, Gift, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Donate = () => {
  const [donationAmount, setDonationAmount] = useState("50");
  const [customAmount, setCustomAmount] = useState("");
  const [tipAmount, setTipAmount] = useState("3");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [showTip, setShowTip] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState({ firstName: false, lastName: false, email: false });

  const presetAmounts = ["25", "50", "100", "250", "500"];
  const tipOptions = ["0", "3", "5", "10"];

  const finalAmount = customAmount || donationAmount;
  const totalAmount = parseFloat(finalAmount) + parseFloat(tipAmount);

  const validateFields = () => {
    const errors = {
      firstName: !firstName.trim(),
      lastName: !lastName.trim(),
      email: !email.trim() || !/\S+@\S+\.\S+/.test(email)
    };
    setFieldErrors(errors);
    return !Object.values(errors).some(error => error);
  };

  const handleDonate = async () => {
    if (!validateFields()) {
      setMessage("Please fill in all required fields correctly.");
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:3000/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Math.round(totalAmount * 100),
          email: email,
          name: `${firstName} ${lastName}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = data.url;
      } else {
        setMessage(data.error || "An error occurred while creating the payment session.");
      }
    } catch (error) {
      setMessage("Connection error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const isFieldValid = (field) => {
    switch (field) {
      case 'firstName': return firstName.trim() && !fieldErrors.firstName;
      case 'lastName': return lastName.trim() && !fieldErrors.lastName;
      case 'email': return email.trim() && /\S+@\S+\.\S+/.test(email) && !fieldErrors.email;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-gray-600 hover:text-gray-900 mr-4 sm:mr-6">
                <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                <span className="text-sm sm:text-base">Back</span>
              </Link>
              <h1 className="text-xl sm:text-2xl font-bold text-green-600">GoFundMe</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Side - Campaign Info */}
          <div className="space-y-4 sm:space-y-6">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-green-800 to-green-600 rounded-lg shadow-sm p-6 sm:p-8 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center mx-auto sm:mx-0">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-xl sm:text-2xl font-bold">Experience an Unforgettable Day</h2>
                  <p className="text-green-100 text-sm sm:text-base">A VIP Golf & Charity Experience</p>
                </div>
              </div>
              
              <div className="aspect-video bg-gradient-to-br from-green-100 to-green-50 rounded-lg overflow-hidden mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=800&h=450&fit=crop"
                  alt="Golf charity event"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-base sm:text-lg mb-4 text-center sm:text-left">
                Join us for a legendary golf experience while supporting those in need through our community platform.
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                <div className="bg-white/10 rounded-lg p-2 sm:p-3">
                  <Trophy className="h-4 w-4 sm:h-6 sm:w-6 mx-auto mb-1 sm:mb-2" />
                  <div className="text-xs sm:text-sm">Professional Instruction</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2 sm:p-3">
                  <Users className="h-4 w-4 sm:h-6 sm:w-6 mx-auto mb-1 sm:mb-2" />
                  <div className="text-xs sm:text-sm">Networking</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2 sm:p-3">
                  <Target className="h-4 w-4 sm:h-6 sm:w-6 mx-auto mb-1 sm:mb-2" />
                  <div className="text-xs sm:text-sm">Charity Impact</div>
                </div>
              </div>
            </div>

            {/* Campaign Details */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">Supporting Our Community</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>€18,750 raised</span>
                  <span>€25,000 goal</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>156 donations</span>
                  <span>12 days left</span>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <h4 className="font-semibold text-green-800 mb-2">How It Works</h4>
                <div className="space-y-2 text-sm text-green-700">
                  <div className="flex items-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs mr-2 sm:mr-3 flex-shrink-0">1</div>
                    <span>Make your donation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs mr-2 sm:mr-3 flex-shrink-0">2</div>
                    <span>Receive your confirmation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs mr-2 sm:mr-3 flex-shrink-0">3</div>
                    <span>Help those who need it most</span>
                  </div>
                </div>
              </div>

              {/* Donation Rewards Table */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-4">Donation Rewards</h4>
                <div className="space-y-3 sm:space-y-4 text-sm">
                  <div className="border-b border-blue-200 pb-3">
                    <div className="font-semibold text-blue-800 mb-2">€100+</div>
                    <div className="space-y-1 text-blue-700">
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Digital certificate</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Premium keychain</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-b border-blue-200 pb-3">
                    <div className="font-semibold text-blue-800 mb-2">€250+</div>
                    <div className="space-y-1 text-blue-700">
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Official event t-shirt</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Signed cap</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-b border-blue-200 pb-3">
                    <div className="font-semibold text-blue-800 mb-2">€500+</div>
                    <div className="space-y-1 text-blue-700">
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Golf gift box</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>VIP dinner</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-semibold text-blue-800 mb-2">Major Donor</div>
                    <div className="space-y-1 text-blue-700">
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Custom golf driver</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        <span>Special mention</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About the Cause */}
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">About Our Cause</h3>
              <div className="prose max-w-none text-sm sm:text-base">
                <p className="text-gray-700 mb-4">
                  100% of donations go to the Children's Health Foundation through our GoFundMe platform,
                  helping families registered in our system who are facing difficulties.
                </p>
                <p className="text-gray-700 mb-4">
                  Our mission is to connect generous people with those who need support most in our community.
                  Every donation makes a difference in a family's life.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Full Transparency:</strong> Track how your donation is being used through regular reports.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Direct Impact:</strong> We directly connect donors with verified beneficiaries.
                  </p>
                </div>
              </div>
            </div>

            {/* Security Info */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-medium text-blue-900">Your donation is protected</h3>
                  <p className="text-sm text-blue-700 mt-1">
                    We guarantee full refund for up to one year in the rare case of fraud.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Donation Form */}
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 h-fit lg:sticky lg:top-24">
            <h2 className="text-xl sm:text-2xl font-bold mb-6">Make your donation</h2>

            {/* What You Get Section */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 mb-6">
              <div className="flex items-start space-x-3">
                <Gift className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">🎁 By donating €100+, you guarantee:</h4>
                  <div className="space-y-1 text-sm text-green-700">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Exclusive auction invitation</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Premium donation rewards</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Chance to experience a day with a golf legend</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  How much would you like to donate?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4">
                  {presetAmounts.map((amount) => (
                    <Button
                      key={amount}
                      variant={donationAmount === amount && !customAmount ? "default" : "outline"}
                      onClick={() => {
                        setDonationAmount(amount);
                        setCustomAmount("");
                      }}
                      className={`text-sm ${donationAmount === amount && !customAmount ? "bg-green-600 hover:bg-green-700" : ""}`}
                    >
                      €{amount}
                    </Button>
                  ))}
                </div>
                
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">€</span>
                  <Input
                    type="number"
                    placeholder="Other amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="pl-8 text-lg h-12"
                  />
                </div>
              </div>

              {/* Tip Section */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-sm sm:text-base">GoFundMe Service Fee</span>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-sm"
                    onClick={() => setShowTip(!showTip)}
                  >
                    Learn more
                  </Button>
                </div>
                
                {showTip && (
                  <p className="text-sm text-gray-600 mb-3">
                    GoFundMe has 0% fee for organizers. A voluntary contribution helps keep GoFundMe running.
                  </p>
                )}

                <RadioGroup value={tipAmount} onValueChange={setTipAmount} className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {tipOptions.map((tip) => (
                    <div key={tip} className="flex items-center space-x-2">
                      <RadioGroupItem value={tip} id={`tip-${tip}`} className="sr-only" />
                      <Label 
                        htmlFor={`tip-${tip}`} 
                        className={`cursor-pointer border rounded-lg p-2 text-center w-full text-sm ${
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
                <h3 className="font-medium">Personal information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <div className="relative">
                      <Input
                        id="firstName"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                          if (fieldErrors.firstName && e.target.value.trim()) {
                            setFieldErrors(prev => ({ ...prev, firstName: false }));
                          }
                        }}
                        placeholder="First name"
                        required
                        className={`${fieldErrors.firstName ? 'border-red-500' : isFieldValid('firstName') ? 'border-green-500' : ''}`}
                      />
                      {isFieldValid('firstName') && (
                        <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500" />
                      )}
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <div className="relative">
                      <Input
                        id="lastName"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                          if (fieldErrors.lastName && e.target.value.trim()) {
                            setFieldErrors(prev => ({ ...prev, lastName: false }));
                          }
                        }}
                        placeholder="Last name"
                        required
                        className={`${fieldErrors.lastName ? 'border-red-500' : isFieldValid('lastName') ? 'border-green-500' : ''}`}
                      />
                      {isFieldValid('lastName') && (
                        <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500" />
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (fieldErrors.email && /\S+@\S+\.\S+/.test(e.target.value)) {
                          setFieldErrors(prev => ({ ...prev, email: false }));
                        }
                      }}
                      placeholder="Email address"
                      required
                      className={`${fieldErrors.email ? 'border-red-500' : isFieldValid('email') ? 'border-green-500' : ''}`}
                    />
                    {isFieldValid('email') && (
                      <CheckCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500" />
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  📬 Your name will only be used to send the exclusive auction link.
                </p>
              </div>

              {/* Urgency Notice */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 text-orange-600 flex-shrink-0" />
                  <p className="text-sm text-orange-800">
                    ⏳ Last spots for the auction — secure yours before July 21st!
                  </p>
                </div>
              </div>

              {/* Total Summary */}
              <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-sm sm:text-base">
                  <span>Your donation</span>
                  <span className="font-medium">€{finalAmount}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>GoFundMe fee</span>
                  <span>€{tipAmount}</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between font-semibold text-base sm:text-lg">
                  <span>Total today</span>
                  <span>€{totalAmount.toFixed(2)}</span>
                </div>
              </div>

              {/* Error/Success Message */}
              {message && (
                <div className={`p-3 rounded-lg text-sm ${
                  message.includes("error") || message.includes("Please") 
                    ? "bg-red-50 text-red-700 border border-red-200" 
                    : "bg-green-50 text-green-700 border border-green-200"
                }`}>
                  {message}
                </div>
              )}

              {/* Security Trust Badge */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <p className="text-sm text-green-800 font-medium">
                    🔒 100% secure transaction via Stripe — the world's leading payment platform.
                  </p>
                </div>
              </div>

              {/* Donate Button */}
              <Button 
                onClick={handleDonate}
                disabled={isLoading}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </div>
                ) : (
                  <>
                    <Heart className="w-5 h-5 mr-2" />
                    Complete my donation - €{totalAmount.toFixed(2)}
                  </>
                )}
              </Button>

              {/* Security Notice */}
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Lock className="h-4 w-4 flex-shrink-0" />
                <span className="text-center">Your payment information is secure and encrypted</span>
              </div>

              {/* Terms */}
              <p className="text-xs text-gray-500 text-center">
                By continuing, you agree to GoFundMe's{" "}
                <a href="#" className="text-blue-600 hover:underline">terms</a> and{" "}
                <a href="#" className="text-blue-600 hover:underline">privacy policy</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Donate;
