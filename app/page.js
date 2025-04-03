import Landing from "@/components/Body/Landing";
import Count from "@/components/VisitorCount/Count";
import Review from "@/components/Review/Review";
import Services from "@/components/Body/Services";
import PopularWrapper from "@/components/home-Listings/popular/PopularWrapper";
import CityWrapper from "@/components/home-Listings/city/CityWrapper";
import { Suspense } from "react";
import dynamic from "next/dynamic";
const Loading = dynamic(() => import("@/components/loader/loading"), { ssr: false });

function App()
{
  return (
    <div>
       <Suspense fallback={<Loading />}>
       <Landing/>
       <PopularWrapper/>
       <CityWrapper/>
       <Review/>
       <Services/>
       <Count/>
       </Suspense>
    </div>
  );
}

export default App;