import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

//import Autoplay from "embla-carousel-autoplay"
import ReviewCard from "./ReviewCard.js";

function Review() {
    const arr = new Array(5).fill(0);
    return (
        <div className="text-black py-10">
            <p className="text-lg mb-1 font-medium text-center tracking-[5px] text-[#f411cf]">TESTIMONIALS</p>
            <p className="text-4xl font-semibold text-center">Trust Out Clients</p>
            <div className="py-3.5 w-[90%] mx-auto">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="relative"
                >
                    <CarouselContent >
                        {
                            arr.map((ele, idx) => <CarouselItem key={idx} className="basic-3/10 lg:basis-35/100 py-4"> <ReviewCard/> </CarouselItem>)
                        }
                    </CarouselContent>
                    <CarouselPrevious className="text-black abosulte left-1.5 lg:-left-12"/>
                    <CarouselNext className="text-black abosulte right-1.5 lg:-right-12" />
                </Carousel>
            </div>
        </div>
    );
}

export default Review;
