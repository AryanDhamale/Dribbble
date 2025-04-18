import Hero from "@/components/Body/Hero";
import Count from "@/components/VisitorCount/Count";
import Review from "@/components/Review/Review";
import Services from "@/components/Body/Services";
import PopularWrapper from "@/components/home-Listings/popular/PopularWrapper";
import CityWrapper from "@/components/home-Listings/city/CityWrapper";
import { Suspense } from "react";
import Loading from "@/components/loader/CustomeLoading.js";
import Popup from "@/components/Popup/Popup";

function App()
{
  return (
       <>
       <Popup/>
       <Suspense fallback={<Loading />}>
       <Hero/>
       <PopularWrapper/>
       <CityWrapper/>
       <Review/>
       <Services/>
       <Count/>
       </Suspense>
      </>
  );
}

export default App;