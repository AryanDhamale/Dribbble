
import CityCard from "./CityCard";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { FaCity, FaLongArrowAltRight } from "react-icons/fa";

function City() {
    const arr = new Array(10).fill(0);
    return (
        <div className="bg-[#f5f8ff] py-14">
            <div className= "px-4 md:px-20 flex flex-col gap-y-4">
                <div>
                    <h2 className="text-3xl font-normal">City Tour</h2>
                    <div className="mt-1 bg-[#24b985] h-1.5 w-20"></div>
                </div>
                <p className="font-medium opacity-50">No matter where you are in India or around the World, Choose from a wide range of tours, conveniently departing from your city.</p>
                <p className="font-medium text-xs text-slate-500">Explore tour packages from</p>
            </div>
            <div className="mt-4 w-[98%] lg:w-[90%] mx-auto">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="relative"
                >
                    <CarouselContent className="ml-4">
                        {
                            arr.map((ele, idx) => <CarouselItem key={idx} className="pl-4 basis-50"> <CityCard className="mx-auto" /> </CarouselItem>)
                        }
                    </CarouselContent>
                    <CarouselPrevious className="abosulte left-1.5 lg:-left-12"/>
                    <CarouselNext className="abosulte right-1.5 lg:-right-12"/>
                </Carousel>
            </div>
        </div>
    );
}

export default City;