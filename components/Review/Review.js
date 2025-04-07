"use client";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

//import dynamic from "next/dynamic.js";
//const Autoplay = dynamic(() => import('embla-carousel-autoplay'), { ssr: false });
import Autoplay from "embla-carousel-autoplay"
import ReviewCard from "./ReviewCard.js";

function Review() {
    const arr = [
        {
            star: 5,
            location: 'Highlights of Kerala',
            msg: "\"Everything was great start from booking to goodbye\". Nimikesh and Nilesh were caring, knowledgeable and very cooperative. We have collected unforgettable memories...",
            name: "Tejas Dhamale",
            date: "Feb, 2025"
        },
        {
            star: 4,
            location: 'Goa Beach Tour',
            msg: "\"Amazing beaches and vibrant nightlife!\". Our guide, Raj, was very friendly and made sure we had the best experience. The seafood was delicious!",
            name: "Priya Sharma",
            date: "Mar, 2025"
        },
        {
            star: 5,
            location: 'Himalayan Trekking Adventure',
            msg: "\"Breathtaking views and an unforgettable journey!\". The trek was challenging but worth it. Special thanks to guide Arjun for his expertise and support.",
            name: "Rahul Verma",
            date: "Jan, 2025"
        },
        {
            star: 5,
            location: 'Cultural Rajasthan',
            msg: "\"A perfect blend of history and luxury!\". The palaces, forts, and local cuisine were incredible. Kudos to tour manager Meena for her excellent arrangements.",
            name: "Ananya Patel",
            date: "Apr, 2025"
        },
        {
            star: 4,
            location: 'Backwaters of Alleppey',
            msg: "\"Peaceful and mesmerizing houseboat experience!\". The serene backwaters and delicious Kerala meals made it a perfect getaway. Captain Suresh was very hospitable.",
            name: "Vikram Singh",
            date: "Dec, 2024"
        }
    ];
    return (
        <div className="text-black py-10">
            <p className="text-lg mb-1 font-medium text-center tracking-[5px] text-[#f411cf]">TESTIMONIALS</p>
            <p className="text-xl md:text-4xl font-semibold text-center">Trust Out Clients</p>
            <div className="py-3.5 w-[90%] mx-auto">

               <Carousel  opts={{align: "start", loop: true}}  plugins={[Autoplay({delay: 3000,})]}>
                    <CarouselContent className='-ml-20 sm:-ml-1'>
                       {
                        arr.map((ele,idx)=><CarouselItem className='-pl-20 sm:-pl-1 basis-full md:basis-1/2 lg:basis-1/3' key={idx}>  <ReviewCard data={ele}/> </CarouselItem>)
                       }
                    </CarouselContent>
                </Carousel>

            </div>
        </div>
    );
}

export default Review;
