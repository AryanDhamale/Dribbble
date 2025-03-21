import Filter from "@/components/showAllListings/Filter";
import ListingCard from "@/components/showAllListings/ListiingCard";

function All()
{
  const arr=new Array(10).fill(0);
  return (
    <div className="mt-26 border border-red-500 w-[90%] mx-auto">
      <Filter/>
      <div className="px-4 py-3 flex justify-start items-center flex-wrap gap-y-6 gap-x-4">
        {
          arr.map((ele,idx)=><ListingCard key={idx}/>)
        }
      </div>
    </div>
  );
}

export default All;