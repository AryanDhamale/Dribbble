import Popular from "./Popular";
import { getallListing } from "@/serverAction/action";

async function PopularWrapper()
{
    try {
      const responce = await getallListing(8);
      if(responce.success) {
        return <Popular responce={responce.arr}/>
      }else {
        console.log("not found!");
      }
    }catch(err){
        console.log({msg:"popularWrapper",err});
    }
}

export default PopularWrapper;