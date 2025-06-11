
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
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Enilio & Marta Wedding
            </h1>
            <p className="text-gray-600">
              Help us celebrate our special day by contributing to our dream wedding
            </p>
          </div>
          
          <div className="flex space-x-2">
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Share className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Flag className="h-4 w-4" />
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
            <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-semibold mr-2">
              E
            </div>
            <span>Enilio Martinez is organizing this fundraiser</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignHero;
