import { getallCities } from "@/serverAction/action";
import City from "./City";

async function CityWrapper()
{
    try{
      const responce=await getallCities();
      if(responce){
       return <City responce={responce}/>
      }else {
        console.log("not found!");
      }
    }catch(err){
        console.log({msg:"CityWrapper" ,err});
    }
}

export default CityWrapper;