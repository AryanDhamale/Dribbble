"use client";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
    const {data:session}=useSession();
    const router=useRouter();
    const [username,setusername]=useState('');
    const [password,setpassword]=useState('');
    const handleSubmit=async(e)=>{
       console.log("here");
       e.preventDefault();
       const res=await signIn('Credentials',{
        redirect : false ,
        username , 
        password
       });
       console.log(res);
    }
    return (
        <div className="w-full md:w-[69%] drop-shadow-lg flex justify-center items-center">
            <div className="w-[90%] md:w-2/5 flex flex-col gap-y-6">
                <h1 className="text-2xl font-bold mb-8">Log-in to Veer-Pawas</h1>

                <div onClick={()=>signIn('google')} className="cursor-pointer border border-slate-400 flex justify-center items-center gap-x-4 py-4 px-4 rounded-full w-[95%] mx-auto">
                    <FcGoogle className="text-2xl" />
                    <span className="font-medium">Sign up with google</span>
                </div>

                <div className="flex justify-center items-center w-[95%] mx-auto">
                    <div className="border border-slate-200 flex-1"></div>
                    <span className="mx-2 font-medium text-base opacity-50">log in with gmail</span>
                    <div className="border border-slate-200 flex-1"></div>
                </div>

                <div>
                    <form action="#" className="flex flex-col gap-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="text-lg font-medium" htmlFor="username">Username or email</label>
                        <input onChange={(e)=>setusername(e.target.value)} value={username} className="mt-2 border border-slate-200 hover:border-pink-300 outline-0 w-full py-4 px-4 rounded-lg" type="text" name="userName" id="username" />
                    </div>
                    <div>
                        <label className="text-lg font-medium" htmlFor="password">Password</label>
                        <input onChange={(e)=>setpassword(e.target.value)} value={password} className="mt-2 border border-slate-200 hover:border-pink-300 outline-0 w-full py-4 px-4 rounded-lg" type="password" name="passWord" id="username" />
                    </div>

                    <div className="cursor-pointer bg-slate-900 text-white  flex justify-center items-center gap-x-4 py-4 px-4 rounded-full w-[95%] mx-auto">
                    <button type="submit" className="font-medium">Log in</button>
                   </div>
                    </form>
                </div>

                <div className="mt-7 flex flex-col gap-y-5">
                    <Link href={'/session/new'}>
                    <p className="cursor-pointer text-center opacity-60 font-medium text-sm">Don&apos;t have account? <span className="underline underline-offset-2">Sign in</span></p>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;