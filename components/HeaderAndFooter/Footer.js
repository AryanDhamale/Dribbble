import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

function Footer()
{
    return (
            <div className="bg-[#121212] text-white h-[20rem] pt-15 flex flex-col gap-y-10">
                <div className="flex flex-col gap-y-6">
                  <h2 className="text-3xl font-medium text-center">Veer-Pawas</h2>
                  <ul className="flex justify-center gap-x-6">
                    <Link href={'/'}><li className="text-lg opacity-50 cursor-pointer hover:opacity-100">Home</li></Link>
                    <Link href={'/about'}><li className="text-lg opacity-50 cursor-pointer hover:opacity-100">About</li></Link>
                    <Link href={'/contact-us'}><li className="text-lg opacity-50 cursor-pointer hover:opacity-100">Contact-us</li></Link>
                  </ul>
                  <div>
                    <ul className="flex justify-center gap-x-6">
                      <li className="size-10 border border-[#a3de83] rounded-full flex justify-center items-center"><FaWhatsapp className="text-[#a3de83] text-2xl"/></li>
                      <li className="size-10 border border-[#a3de83] rounded-full flex justify-center items-center"><FaTwitter className="text-[#a3de83] text-2xl"/></li>
                      <li className="size-10 border border-[#a3de83] rounded-full flex justify-center items-center"><FaInstagram className="text-[#a3de83] text-2xl"/></li>
                    </ul>
                  </div>
                </div>

                <div className="text-center">
                  <p><span className="opacity-50">Copyright © 2025. All rights reserved. This website was created by</span> <span className="text-[#a3de83]">Tejas Dhamale</span> </p>
                </div>

            </div>
    );
}

export default Footer;