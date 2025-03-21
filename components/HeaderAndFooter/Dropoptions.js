import { useSession,signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

function Dropoptions({control})
{
    const {data:session}=useSession();
    return (
        <div className="bg-white text-slate-900 absolute w-60 right-8 mt-2 px-6 py-6 rounded-lg drop-shadow-lg">
           <div className="flex flex-col items-center gap-y-1">
             <Image width={100} height={100} className="size-10 rounded-full" src={session.user.image || '/default_img.png'} alt="this is an image"></Image>
             <p>{session.user.name}</p>
           </div>
           <div>
            <ul className="mt-2 flex flex-col gap-y-2">
                <li onClick={()=>control(false)} className="hover:bg-slate-100 px-2 py-1.5 cursor-pointer rounded-md text-sm font-normal"><Link href={'/dashbord'}>Setting</Link></li>
                {/* <hr /> */}
                <li onClick={()=>signOut()} className="hover:bg-slate-100 px-2 py-1.5 cursor-pointer rounded-md text-sm font-medium">Signout</li>
            </ul>
           </div>
        </div>
    );
}

export default Dropoptions;