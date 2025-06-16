
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState("");
  const [showTip, setShowTip] = useState(false);

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setSelectedAmount(0);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 sticky top-20 sm:top-24">
      <h2 className="text-lg sm:text-xl font-semibold mb-4">Make a donation</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter your donation
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
            {presetAmounts.map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount ? "default" : "outline"}
                onClick={() => handleAmountSelect(amount)}
                className={`text-sm ${selectedAmount === amount ? "bg-green-600 hover:bg-green-700" : ""}`}
              >
                ${amount}
              </Button>
            ))}
          </div>
          
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
            <Input
              type="number"
              placeholder="Other amount"
              value={customAmount}
              onChange={(e) => handleCustomAmountChange(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm">Your donation</span>
            <span className="font-semibold">${customAmount || selectedAmount}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <span>GoFundMe tip</span>
              <Button 
                variant="link" 
                className="p-0 h-auto text-xs ml-1"
                onClick={() => setShowTip(!showTip)}
              >
                Learn more
              </Button>
            </div>
            <span>$3.00</span>
          </div>
          
          {showTip && (
            <p className="text-xs text-gray-500 mt-2">
              GoFundMe has a 0% platform fee for organizers. A voluntary tip helps keep GoFundMe running.
            </p>
          )}
          
          <hr className="my-3" />
          
          <div className="flex items-center justify-between font-semibold">
            <span className="text-sm sm:text-base">Total due today</span>
            <span>${(parseFloat(customAmount) || selectedAmount) + 3}</span>
          </div>
        </div>

        <Link to="/donate" className="block">
          <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
            <Heart className="w-4 h-4 mr-2" />
            Donate now
          </Button>
        </Link>

        <p className="text-xs text-gray-500 text-center">
          By continuing, you agree with GoFundMe's{" "}
          <a href="#" className="text-blue-600 hover:underline">terms</a> and{" "}
          <a href="#" className="text-blue-600 hover:underline">privacy policy</a>.
        </p>
      </div>
    </div>
  );
};

export default DonationForm;
