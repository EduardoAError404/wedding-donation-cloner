
import Header from "@/components/Header";
import CampaignHero from "@/components/CampaignHero";
import DonationForm from "@/components/DonationForm";
import CampaignStory from "@/components/CampaignStory";
import RecentDonations from "@/components/RecentDonations";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <CampaignHero />
            <CampaignStory />
            <RecentDonations />
          </div>
          
          <div className="lg:col-span-1">
            <DonationForm />
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-8 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">GoFundMe</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-600">About</a></li>
                <li><a href="#" className="hover:text-green-600">How it works</a></li>
                <li><a href="#" className="hover:text-green-600">Success stories</a></li>
                <li><a href="#" className="hover:text-green-600">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Fundraising</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-600">Start a GoFundMe</a></li>
                <li><a href="#" className="hover:text-green-600">Fundraising tips</a></li>
                <li><a href="#" className="hover:text-green-600">Common questions</a></li>
                <li><a href="#" className="hover:text-green-600">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-600">Help center</a></li>
                <li><a href="#" className="hover:text-green-600">Blog</a></li>
                <li><a href="#" className="hover:text-green-600">Press center</a></li>
                <li><a href="#" className="hover:text-green-600">Contact us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-green-600">Terms</a></li>
                <li><a href="#" className="hover:text-green-600">Privacy</a></li>
                <li><a href="#" className="hover:text-green-600">Legal</a></li>
                <li><a href="#" className="hover:text-green-600">Accessibility</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            <p>&copy; 2024 GoFundMe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
