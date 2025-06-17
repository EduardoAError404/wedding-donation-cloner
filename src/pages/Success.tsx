
import { Button } from "@/components/ui/button";
import { CheckCircle, Medal, Gift, Mail, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Success = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        {/* Main Success Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-green-100 rounded-full flex items-center justify-center animate-scale-in">
                <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 text-green-600" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-fade-in">
                <Medal className="w-4 h-4 text-yellow-800" />
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Payment Confirmed Successfully!
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
            Thank you for supporting our cause and securing your spot in the exclusive auction.
          </p>

          {/* Emotional Message */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-4 sm:p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Gift className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-green-800 mb-2">🎉 You're In! Welcome to Something Special</h3>
                <p className="text-sm sm:text-base text-green-700">
                  Your generous donation brings us one step closer to helping families in need. 
                  Plus, you're now eligible for an unforgettable experience that money can't usually buy!
                </p>
              </div>
            </div>
          </div>

          {/* Next Steps Section */}
          <div className="bg-gray-50 rounded-xl p-4 sm:p-6 mb-8 text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 text-center">
              📋 What Happens Next?
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  1
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Check Your Email</h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    You'll receive a confirmation email with your donation receipt within the next few minutes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  2
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Auction Invitation</h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    You'll receive an email with the exclusive auction link on <strong>July 20th</strong> (one day before the event).
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                  3
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Your Donation Rewards</h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Keep an eye on your inbox to confirm your donation rewards and special perks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Reminders */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8">
            <div className="flex items-start space-x-3">
              <Mail className="h-5 w-5 text-yellow-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h4 className="font-medium text-yellow-800 mb-1">📧 Important Reminder</h4>
                <p className="text-sm text-yellow-700">
                  Please check your spam/junk folder if you don't see our emails. 
                  Add our sender to your contacts to ensure you receive all important updates!
                </p>
              </div>
            </div>
          </div>

          {/* Event Date Reminder */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-8">
            <div className="flex items-center justify-center space-x-2 text-blue-800">
              <Calendar className="h-5 w-5" />
              <span className="font-medium text-sm sm:text-base">
                🗓️ Event Date: July 21st, 2024
              </span>
            </div>
          </div>

          {/* Action Button */}
          <Link to="/" className="block">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 sm:py-4 text-base sm:text-lg font-medium rounded-xl transition-all duration-200 hover:scale-105">
              Return to Homepage
            </Button>
          </Link>

          {/* Footer Message */}
          <p className="text-sm text-gray-500 mt-6 leading-relaxed">
            Thank you for making a difference. Together, we're creating opportunities for families in need 
            while giving you the chance to experience something truly extraordinary.
          </p>
        </div>

        {/* Additional Trust Elements */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            🔒 Your payment was processed securely by Stripe • 
            <span className="ml-1">Questions? Contact our support team</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
