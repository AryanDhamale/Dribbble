"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

//import Autoplay from "embla-carousel-autoplay"
import ReviewCard from "./ReviewCard.js";

function Cardcontainer() {
    const arr = new Array(5).fill(0);
    return (
        <div className="bg-[#16283a] text-white py-10">
            <p className="text-2xl font-medium text-center"> <span className="italic">Dribbble</span> Tour Review</p>
            <p className="text-sm font-medium text-center">What are you waiting for? Chalo Bag Bharo Nikal Pado!</p>
            <div className="py-3.5 w-[90%] mx-auto">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="relative"
                >
                    <CarouselContent >
                        {
                            arr.map((ele, idx) => <CarouselItem key={idx} className="basic-3/10 lg:basis-35/100"> <ReviewCard/> </CarouselItem>)
                        }
                    </CarouselContent>
                    <CarouselPrevious className="text-black abosulte left-1.5 lg:-left-12"/>
                    <CarouselNext className="text-black abosulte right-1.5 lg:-right-12" />
                </Carousel>
            </div>
            <button className="cursor-pointer text-[#0c709c] border border-white bg-white px-8 py-2 font-light text-base tracking-wide m 
            block mt-10 mx-auto">Read more</button>
        </div>
    );
}

export default Cardcontainer;
