"use client";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { BiLogoYelp } from "react-icons/bi";
import { MdNoMeals } from "react-icons/md";
import { AiTwotonePlusCircle } from "react-icons/ai";
import { useState, useEffect } from 'react';

function Itineary({ data }) {
    const [items, setItems] = useState([]);
    const generateItinerary = (data) => {
        let dayCounter = 1;
        let itinerary = [];
        data.cities.forEach((ele, idx) => {
            const match = ele.match(/(.+)\((\d+)N\)/);
            const city = match[1];
            const nights = parseInt(match[2]);
            for (let i = 0; i < nights; i++) {
                itinerary.push({
                    day: dayCounter++,
                    city,
                    acitivites: getActivites(city, i == 0),
                    accommodation: `Hotel in ${city}`,
                    meals: i === 0 ? ["Dinner"] : ["Breakfast", "Lunch"],
                })
            }
        });
        setItems(itinerary);
    }

    const getActivites = (city, isFirstDay) => {
        const activitiesMap = {
            "Delhi": ["Qutub Minar", "India Gate", "Lotus Temple"],
            "Agra": ["Taj Mahal", "Agra Fort", "Mehtab Bagh"],
            "Jaipur": ["Amber Fort", "Hawa Mahal", "City Palace"],
            "Munnar": ["Tea Gardens", "Eravikulam National Park"],
            "Thekkady": ["Periyar Wildlife Sanctuary", "Spice Plantation"],
            "Alleppey": ["Houseboat Cruise", "Backwater Tours"],
            "Jodhpur": ["Mehrangarh Fort", "Jaswant Thada"],
            "Udaipur": ["Lake Pichola", "City Palace"],
            "Pushkar": ["Pushkar Lake", "Brahma Temple"],
            "Goa": ["Calangute Beach", "Fort Aguada"],
            "Varanasi": ["Ganga Aarti", "Kashi Vishwanath Temple"],
            "Leh": ["Leh Palace", "Khardung La Pass"]
        };
        let activites = activitiesMap[city] || ["Sightseeing"];
        return isFirstDay ? [`Arrival, ${activites[0]}`] : activites;
    }

    useEffect(() => generateItinerary(data));

    return (
        <div className="flex flex-col gap-y-4" id='itineary'>
            <h2 className="text-lg font-medium mt-4">Itineary</h2>
            <div>
                {
                    items.map((ele, idx) =>
                        <Accordion key={idx}>
                            <AccordionSummary
                                expandIcon={<AiTwotonePlusCircle className='text-black text-xl' />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <h2 className='text-lg font-medium flex'> <span className='block w-[6rem]'>{ele.city}</span> Day-{ele.day}</h2>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className='flex flex-col gap-y-2'>

                                    <div className='rounded-md flex flex-col gap-y-1.5 bg-[ghostwhite] px-4 py-4'>
                                        <h2 className='font-medium text-base'>activities</h2>
                                        <ul className='font-medium text-xs flex flex-col gap-y-1.5'>
                                            {
                                              ele.acitivites.map((el,idx)=>
                                                <li className='flex items-center gap-x-1' key={idx}><BiLogoYelp className='text-sm text-[#24b985]'/> {el}</li>
                                              )
                                            }
                                        </ul>
                                    </div>

                                    <h2 className='font-medium text-base'>Accommodation : {ele.accommodation}</h2>

                                    <div className='rounded-md flex flex-col gap-y-1.5 bg-[ghostwhite] px-4 py-4'>
                                        <h2 className='font-medium text-base'>meals</h2>
                                        <ul className='font-medium text-xs flex flex-col gap-y-1.5'>
                                            {
                                                ele.meals.map((el,idx)=>
                                                    <li className='flex items-center gap-x-1' key={idx}><MdNoMeals className='text-sm text-[#24b985]' />{el}</li>
                                                )
                                            }
                                        </ul>
                                    </div>

                                </div>
                            </AccordionDetails>
                        </Accordion>
                    )
                }
            </div>
        </div>
    );
}

export default Itineary;