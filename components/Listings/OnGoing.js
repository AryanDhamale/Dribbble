import PopularCard from "./PopularCard";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

function OnGoing() {
    const arr = new Array(8).fill(0);
    return (
        <div className="px-4 md:px-20 flex flex-col gap-y-14 py-10">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-normal">Most Popular Tour</h2>
                    <div className="mt-1 bg-[#24b985] h-1.5 w-[40%]"></div>
                </div>
                <div>
                    <Link href={"/"} className="text-base flex justify-center items-center gap-x-2 text-gray-700"> <span className="text-sm">View more</span> <FaLongArrowAltRight /></Link>
                </div>
            </div>
            <div className="border border-red-500 w-[90%] mx-auto">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                >
                    <CarouselContent className="">
                        {
                            arr.map((ele, idx) => <CarouselItem key={idx} className="border border-green-500 basis-1/2"> <PopularCard/> </CarouselItem>)
                        }
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}

export default OnGoing;