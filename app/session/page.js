"use client";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form"

function Login() {


    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
      } = useForm();

    const sendData=(data)=>console.log(data);

    return (
        <div className="w-full md:w-[69%] flex justify-center items-center">
            <div className="w-[90%] md:w-2/5 flex flex-col gap-y-6">
                <h1 className="text-2xl font-bold mb-8">Log-in to Veer-Pawas</h1>

                <div onClick={()=>signIn('google')} className="cursor-pointer bg-white drop-shadow-lg flex justify-center items-center gap-x-4 py-4 px-4 rounded-full w-[95%] mx-auto">
                    <FcGoogle className="text-2xl" />
                    <span className="font-medium">Sign up with google</span>
                </div>

                <div className="flex justify-center items-center w-[95%] mx-auto">
                    <div className="border border-slate-200 flex-1"></div>
                    <span className="mx-2 font-medium text-base opacity-50">log in with gmail</span>
                    <div className="border border-slate-200 flex-1"></div>
                </div>

                <div>
                    <form onSubmit={handleSubmit(sendData)} className="flex flex-col gap-y-6">
                    <div>
                        <label className="text-lg font-medium" htmlFor="username">Username <span className="text-red-500">*</span> </label>
                        <input className="mt-2 border border-slate-200 hover:border-pink-300 outline-0 w-full py-4 px-4 rounded-lg" type="text" name="userName" id="username" {...register('name',{required:{value:true,message:"username is required!"}})} />
                        {errors.name && <span className="text-red-500 text-xs font-medium">{errors.name.message}</span> } 
                    </div>
                    <div>
                        <label className="text-lg font-medium" htmlFor="password">Password <span className="text-red-500">*</span> </label>
                        <input className="mt-2 border border-slate-200 hover:border-pink-300 outline-0 w-full py-4 px-4 rounded-lg" type="password" name="passWord" id="username" {...register('password',{required:{value:true,message:"password is required!"},minLength:{value:8,message:"minLength is 8"},maxLength:{value:15,message:"maxLength is 15"}})} />
                        {errors.password && <span className="text-red-500 text-xs font-medium">{errors.password.message}</span>}
                    </div>

                    <button type="submit" className="cursor-pointer bg-slate-900 text-white  flex justify-center items-center gap-x-4 py-4 px-4 rounded-full w-[95%] mx-auto font-medium">Log in</button>
                   
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