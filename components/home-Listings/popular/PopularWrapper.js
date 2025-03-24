import Popular from "./Popular";
import { getallListing } from "@/serverAction/action";

async function PopularWrapper()
{
    try {
      const responce = await getallListing(8);
      if(responce) {
        return <Popular responce={responce}/>
      }else {
        console.log("not found!");
      }
    }catch(err){
        console.log({msg:"popularWrapper",err});
    }
}

export default PopularWrapper;