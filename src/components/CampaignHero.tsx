
import { Heart, Share, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";

const CampaignHero = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-pink-100 to-purple-100 relative">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=450&fit=crop"
          alt="Wedding couple"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      </div>
      
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-4">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Enilio & Marta Wedding
            </h1>
            <p className="text-gray-600 text-sm sm:text-base">
              Help us celebrate our special day by contributing to our dream wedding
            </p>
          </div>
          
          <div className="flex space-x-2 justify-end sm:justify-start">
            <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
              <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
              <Share className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
              <Flag className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>$12,450 raised</span>
            <span>$20,000 goal</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '62%' }}></div>
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>127 donations</span>
            <span>18 days left</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-2 text-xs sm:text-sm">
              E
            </div>
            <span className="text-xs sm:text-sm">Enilio Martinez is organizing this fundraiser</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignHero;
