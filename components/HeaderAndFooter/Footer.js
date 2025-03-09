"use client"
import { FaBuilding } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer()
{
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-14 px-20 py-6">
                <div>
                    <p className="flex gap-x-2 items-center"><FaBuilding/><span className="text-gray-900 font-normal">Our Office</span> </p>
                    <p className="opacity-50 text-sm">Located across the country, ready to assist in planning & booking your perfect vacation.</p>
                    <p className="font-medium text-blue-800">Located Us</p>
                </div>
                <div>
                    <p className="flex gap-x-2 items-center"><LuPhoneCall/><span className="text-gray-900 font-normal">Call Us</span> </p>
                    <p className="opacity-50 text-sm">Request a quote, or just chat about your next vacation. We're always happy to help!</p>
                    <p className="font-medium text-blue-800">1800 22 7979</p>
                </div>
                <div>
                    <p className="flex gap-x-2 items-center"><MdOutlineLocalPostOffice/><span className="text-gray-900 font-normal">Write to Us</span> </p>
                    <p className="opacity-50 text-sm">Be it an enquiry, feedback or a simple suggestion, write to us.</p>
                    <p className="font-medium text-blue-800">aryandhamale07@gmail.com</p>
                </div>
                <div>
                    <p className="flex gap-x-2 items-center"><FaShareAlt/><span className="text-gray-900 font-normal">Contact with Us</span> </p>
                    <p className="opacity-50 text-sm">Located across the country, ready to assist in planning & booking your perfect vacation.</p>
                    <p className="flex items-center space-x-2.5 mt-2">
                    <FaFacebook className="text-2xl"/>
                    <FaYoutube className="text-2xl"/>
                    <FaLinkedin className="text-2xl"/>
                    <FaInstagram className="text-2xl"/>
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 bg-[#0e1e2c] px-20 py-16 text-white">
                <div className="pl-3.5">
                    <p className="text-2xl font-semibold italic cursor-pointer py-2">Dribbble</p>
                    <p className="font-semibold">Keep travelling all year round!</p>
                    <p className="text-xs">Subscribe to our newsletter to find travel inspiration in your inbox.</p>
                    <p className="text-xs">© 2019-2024; BookMyTour Travel. All Rights Reserved.</p>
                </div>
                <div className="pl-3.5">
                    <p className="font-semibold mb-2">Discover us</p>
                    <p className="text-sm font-normal opacity-50 cursor-pointer hover:text-yellow-300 hover:opacity-100 pb-1">Guests Review</p>
                    <p className="text-sm font-normal opacity-50 cursor-pointer hover:text-yellow-300 hover:opacity-100 pb-1">About Us</p>
                    <p className="text-sm font-normal opacity-50 cursor-pointer hover:text-yellow-300 hover:opacity-100 pb-1">Our Team</p>
                    <p className="text-sm font-normal opacity-50 cursor-pointer hover:text-yellow-300 hover:opacity-100 pb-1">Tour Manager</p>
                    <p className="text-sm font-normal opacity-50 cursor-pointer hover:text-yellow-300 hover:opacity-100 pb-1">CSR Policy</p>
                </div>
                <div className="pl-3.5">
                    <p className="font-semibold mb-2">Support</p>
                    <p className="text-sm font-normal opacity-50 cursor-pointer hover:text-yellow-300 hover:opacity-100 pb-1">Contact Us</p>
                    <p className="text-sm font-normal opacity-50 cursor-pointer hover:text-yellow-300 hover:opacity-100 pb-1">Leave your Feedback</p>
                    <p className="text-sm font-normal opacity-50 cursor-pointer hover:text-yellow-300 hover:opacity-100 pb-1">Traval Deal</p>
                    <p className="text-sm font-normal opacity-50 cursor-pointer hover:text-yellow-300 hover:opacity-100 pb-1">Sigapur Visa</p>
                    <p className="text-sm font-normal opacity-50 cursor-pointer hover:text-yellow-300 hover:opacity-100 pb-1">Annual Reture</p>
                </div>
                <div className="pl-3.5">
                    <p className="font-semibold mb-2">Resource</p>
                    <p className="text-sm font-normal opacity-50 cursor-pointer hover:text-yellow-300 hover:opacity-100 pb-1">Tour Status</p>
                    <p className="text-sm font-normal opacity-50 cursor-pointer hover:text-yellow-300 hover:opacity-100 pb-1">Blog</p>
                    <p className="text-sm font-normal opacity-50 cursor-pointer hover:text-yellow-300 hover:opacity-100 pb-1">Podcast</p>
                    <p className="text-sm font-normal opacity-50 cursor-pointer hover:text-yellow-300 hover:opacity-100 pb-1">Video Blog</p>
                    <p className="text-sm font-normal opacity-50 cursor-pointer hover:text-yellow-300 hover:opacity-100 pb-1">Customized Travel Planner</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;