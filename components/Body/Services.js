import { BsBuildingsFill } from "react-icons/bs";
import { GiHotMeal } from "react-icons/gi";
import { GiCarWheel } from "react-icons/gi";
import { FcManager } from "react-icons/fc";
import { GiWavyItinerary } from "react-icons/gi";
import { GiCommercialAirplane } from "react-icons/gi";

function Services() {
    return (
        <div className="px-10 lg:px-30 py-16">
            <h1 className="text-xl font-normal text-center mb-8">All inclusive tours, Chalo Bag Bharo Nikal Pado!</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
                <div className="flex justfiy-center items-center px-2.5 gap-x-4">
                    <BsBuildingsFill  className="size-[3rem]" />
                    <div>
                        <p className="font-medium text-lg">Accommodation</p>
                        <p className="font-normal text-xs opacity-50">Comfortable & convenient hotels cherry picked by our hotel management team</p>
                    </div>
                </div>
                <div className="flex justfiy-center items-center px-2.5 gap-x-4">
                    <GiHotMeal  className="size-[3rem]" />
                    <div>
                        <p className="font-medium text-lg">All meals</p>
                        <p className="font-normal text-xs opacity-50">Eat to your heart's content Breakfast. Lunch. Dinner.</p>
                    </div>
                </div>
                <div className="flex justfiy-center items-center px-2.5 gap-x-4">
                    <GiCarWheel  className="size-[4rem]" />
                    <div>
                        <p className="font-medium text-lg">On-tour transport</p>
                        <p className="font-normal text-xs opacity-50">Our itineraries include all rail, sea and road transport as part of the itinerary so you can enjoy tension free</p>
                    </div>
                </div>
                <div className=" flex justfiy-center items-center px-2.5 gap-x-4">
                    < FcManager className="size-[3rem]"/>
                    <div>
                        <p className="font-medium text-lg">Tour managers</p>
                        <p className="font-normal text-xs opacity-50">We have an exclusive team of 350 tour managers specialising in India and World tours</p>
                    </div>
                </div>
                <div className=" flex justfiy-center items-center px-2.5 gap-x-4">
                    <GiWavyItinerary  className="size-[4rem]" />
                    <div>
                        <p className="font-medium text-lg">Best value itinerary</p>
                        <p className="font-normal text-xs opacity-50">Our dedicated product & destination research team spends hours curating the best value for money itineraries</p>
                    </div>
                </div>
                <div className=" flex justfiy-center items-center px-2.5 gap-x-4">
                    <GiCommercialAirplane  className="size-[4rem]" />
                    <div>
                        <p className="font-medium text-lg">To and fro airfare</p>
                        <p className="font-normal text-xs opacity-50">Veena World tours are inclusive of airfare from many hubs within India unless you pick the joining-leaving option</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;