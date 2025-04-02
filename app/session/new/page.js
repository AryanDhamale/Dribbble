"use client";
import { FcGoogle } from "react-icons/fc";
import { BiLogoGmail } from "react-icons/bi";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

function Signup()
{
    const {data:session}=useSession();
    const router=useRouter();
    useEffect(()=>{
        if(session)
        {
         router.push('/');
        }
    })
    return ( 
          <div className="w-[69%] drop-shadow-lg flex justify-center items-center">
            <div className="w-2/5 flex flex-col gap-y-6">
                <h1 className="text-2xl font-bold mb-8">Register to Dribbble</h1>

                <div>
                    application form here //
                </div>
                {/* <div onClick={()=>signIn('google')} className="cursor-pointer bg-slate-900 text-white flex justify-center items-center gap-x-4 py-4 px-4 rounded-full w-[95%] mx-auto">
                <FcGoogle className="text-2xl"/>
                <span className="font-medium">Sign up with google</span>
                </div> */}

                {/* <div className="flex justify-center items-center w-[95%] mx-auto">
                    <div className="border border-slate-200 flex-1"></div>
                    <span className="mx-2 font-medium text-base opacity-50">or</span>
                    <div className="border border-slate-200 flex-1"></div>
                </div> */}

                {/* <div className="cursor-pointer border border-slate-400 flex justify-center items-center gap-x-4 py-4 px-4 rounded-full w-[95%] mx-auto">
                <BiLogoGmail className="text-2xl"/>
                <span className="font-medium">Sign up with Email</span>
                </div> */}

                <div className="mt-7 flex flex-col gap-y-5"> 
                    <p className="opacity-50 text-center text-xs">By creating an account you agree with our <span className="underline underline-offset-2">Terms of Service, Privacy Policy,</span> and our default <span className="underline underline-offset-2">Notification Settings.</span> </p>
                    <Link href={'/session'}>
                    <p className="cursor-pointer text-center opacity-60 font-medium text-sm">Already have account? <span className="underline underline-offset-2">Log in</span></p>
                    </Link>
                </div>
            </div>
          </div>
    ); 
}

export default Signup;