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
