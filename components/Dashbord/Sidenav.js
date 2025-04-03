"use client";
// import { PiVeer-PawasLogoFill } from "react-icons/pi";
import { PiSignOutFill } from "react-icons/pi";
import { CiBookmarkMinus } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";
import { VscCodeReview } from "react-icons/vsc";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { findUser } from "@/serverAction/user";
import { memo } from "react";

function Sidenav({ session }) {
  const [userdata, setuserdata] = useState({});

  useEffect(() => {
    async function fetchData() {
      if (session) {
        let res = await findUser(session.user.id);
        if (res.success) {
          setuserdata(res.user);
        }
      }
    }
    fetchData();
  }, [session]);

  const links = [{ name: 'Account', logo: <RiAccountCircleFill className="text-[1.4rem] text-purple-500" />, link: 'account' },
  { name: 'Booking', logo: <CiBookmarkMinus className="text-[1.4rem] text-green-400" />, link: 'booking' },
  { name: 'Wishlist', logo: <FaHeart className="text-[1.4rem] text-red-500" />, link: 'wishlist' },
  { name: 'Reviews', logo: <VscCodeReview className="text-[1.4rem] text-blue-500" />, link: 'review' }
  ];
  return (
    <div className="h-full w-full flex flex-col gap-y-4 relative">

      <div className="text-[#f411cf] w-full h-25 flex items-center justify-center gap-x-3">
        {/* <PiVeer-PawasLogoFill className="text-3xl" /> */}
        <Link href={'/'}><span className="italic font-medium text-lg">Veer-Pawas</span></Link>
      </div>

      <div className="w-full flex flex-col items-center gap-y-3">
        <div className="bg-slate-100 p-1 size-15 rounded-full drop-shadow-lg">
          <Image className="w-full h-full rounded-full" width={100} height={100} src={ session ? session.user.image : "https://avatars.githubusercontent.com/u/124599?v=4"} alt="this is an image" />
        </div>

        <div>
          <p className="font-medium text-lg">{session ? session.user.name : "Null"}</p>
          <p className="font-normal text-sm opacity-30">{session ? session.user.email : "Null"}</p>
          <p className="font-normal text-sm opacity-30">{'+91 ' + userdata.mobileNo || "not found!"}</p>
        </div>
      </div>

      <div>
        <ul className="py-3 flex flex-col gap-y-4 h-[25rem] overflow-y-auto">
          {
            links.map((ele, idx) =>
              <Link key={idx} href={`/dashboard?section=${ele.link}`}>
                <li className="hover:bg-[#ececff] w-[95%] mx-auto rounded-md ps-6 cursor-pointer py-3 flex items-center gap-x-4"> {ele.logo} <span className="text-base">{ele.name}</span></li>
              </Link>
            )
          }
        </ul>
      </div>

      <div className="absolute w-full bottom-0 h-20">
        <div className="flex items-center justify-center gap-x-3">
          <PiSignOutFill className="text-[1.2rem]" />
          <span onClick={() => signOut()} className="font-medium text-base cursor-pointer">Log-out</span>
        </div>
        <h2 className="py-2 px-2 text-xs"><span className="opacity-50">This website was designed by</span> <span className="font-medium">Tejas Dhamale.</span> </h2>
      </div>
    </div>
  );
}

export default memo(Sidenav);