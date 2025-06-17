
import { Button } from "@/components/ui/button";
import { Clock, Heart, ArrowLeft, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const Cancel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center px-4 py-8">
      <div className="max-w-2xl w-full">
        {/* Main Cancel Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 text-center">
          {/* Cancel Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-orange-100 rounded-full flex items-center justify-center animate-scale-in">
                <Clock className="w-12 h-12 sm:w-14 sm:h-14 text-orange-600" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-lg">⏸️</span>
              </div>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Looks like you cancelled the payment...
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
            No worries! If you change your mind, you can still join the charity auction 
            with Rory McIlroy and help the Children's Health Foundation.
          </p>

          {/* Encouragement Message */}
          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-4 sm:p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Heart className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
              <div className="text-left">
                <h3 className="font-semibold text-orange-800 mb-2">💭 Take Your Time</h3>
                <p className="text-sm sm:text-base text-orange-700">
                  We understand that making a donation is a meaningful decision. 
                  Your support, whenever you're ready, will make a real difference in children's lives.
                </p>
              </div>
            </div>
          </div>

          {/* What You're Missing */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6 mb-8 text-left">
            <h3 className="text-lg sm:text-xl font-semibold text-blue-900 mb-4 text-center">
              🎯 What You Could Still Get
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-blue-800">
                  Exclusive invitation to the charity auction
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-blue-800">
                  Donation rewards based on your contribution level
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-blue-800">
                  The chance to experience a day with a golf legend
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                <span className="text-sm sm:text-base text-blue-800">
                  The satisfaction of helping families in need
                </span>
              </div>
            </div>
          </div>

          {/* Urgency Reminder */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-8">
            <div className="flex items-center justify-center space-x-2 text-yellow-800">
              <Clock className="h-5 w-5" />
              <span className="font-medium text-sm sm:text-base">
                ⏳ Auction spots are limited — secure yours before July 21st!
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link to="/donate" className="block">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 sm:py-4 text-base sm:text-lg font-medium rounded-xl transition-all duration-200 hover:scale-105">
                <Gift className="w-5 h-5 mr-2" />
                Try Again - Complete My Donation
              </Button>
            </Link>
            
            <Link to="/" className="block">
              <Button 
                variant="outline" 
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-xl transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Return to Homepage
              </Button>
            </Link>
          </div>

          {/* Footer Message */}
          <p className="text-sm text-gray-500 mt-6 leading-relaxed">
            Remember, every donation counts and makes a real impact. 
            We're here whenever you're ready to join our cause.
          </p>
        </div>

        {/* Additional Information */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            🤝 Questions about donating? Contact our support team • 
            <span className="ml-1">Your security and trust matter to us</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cancel;
