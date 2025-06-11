
import { Heart } from "lucide-react";

const RecentDonations = () => {
  const donations = [
    {
      name: "Sarah Johnson",
      amount: 100,
      message: "Wishing you both a lifetime of happiness! Can't wait to celebrate with you.",
      time: "2 hours ago",
      anonymous: false
    },
    {
      name: "Anonymous",
      amount: 250,
      message: "Congratulations on your upcoming wedding! You two are perfect together.",
      time: "5 hours ago",
      anonymous: true
    },
    {
      name: "Michael & Lisa Rodriguez",
      amount: 150,
      message: "So happy for you both! Here's to a beautiful wedding and an even more beautiful marriage.",
      time: "1 day ago",
      anonymous: false
    },
    {
      name: "Jennifer Martinez",
      amount: 75,
      message: "Love you both so much! ❤️",
      time: "2 days ago",
      anonymous: false
    },
    {
      name: "Anonymous",
      amount: 50,
      message: "",
      time: "3 days ago",
      anonymous: true
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Recent donations ({donations.length})</h2>
      
      <div className="space-y-4">
        {donations.map((donation, index) => (
          <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <Heart className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{donation.name}</p>
                  <p className="text-sm text-gray-500">{donation.time}</p>
                </div>
              </div>
              <span className="font-semibold text-green-600">${donation.amount}</span>
            </div>
            
            {donation.message && (
              <p className="text-gray-700 text-sm ml-13">{donation.message}</p>
            )}
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 text-green-600 hover:text-green-700 font-medium text-sm">
        See all donations
      </button>
    </div>
  );
};

export default RecentDonations;
