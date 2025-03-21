import Navbar from "@/components/HeaderAndFooter/Navbar";
import Footer from "@/components/HeaderAndFooter/Footer";
import Landing from "@/components/Body/Landing";
import Count from "@/components/VisitorCount/Count";
import Review from "@/components/Review/Review";
import Services from "@/components/Body/Services";
import Popular from "@/components/home-Listings/Popular";
import City from "@/components/home-Listings/City";

function App()
{
  return (
    <div>
       <Landing/>
       <Popular/>
       <City/>
       <Review/>
       <Services/>
       <Count/>
    </div>
  );
}

export default App;