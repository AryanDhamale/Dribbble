import Navbar from "@/components/HeaderAndFooter/Navbar";
import Footer from "@/components/HeaderAndFooter/Footer";
import Landing from "@/components/Body/Landing";
import Count from "@/components/VisitorCount/Count";
import Review from "@/components/Review/Review";
import Services from "@/components/Body/Services";
import Popular from "@/components/Listings/Popular";
import City from "@/components/Listings/City";
import OnGoing from "@/components/Listings/OnGoing";

function App()
{
  return (
    <div>
       <Navbar/>
       <Landing/>
       <Popular/>
       <City/>
       <Review/>
       <Services/>
       <Count/>
       <Footer/>
    </div>
  );
}

export default App;