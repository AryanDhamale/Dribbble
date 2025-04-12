"use client";
//  local dependancys // 
import { useForm, Controller } from "react-hook-form";
import { upDateExitinguser, findUser } from "@/serverAction/user";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { memo } from "react";
import Image from "next/image";


// Schadcn.ui dependancy // 
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Textarea } from "@/components/ui/textarea";




function Account({ session }) {
  const [userdata, setuserdata] = useState(null);

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

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const check = (data) => {
    return (data.mobileNo == userdata.mobileNo && data.gender == userdata.gender && data.state==userdata.state && data.address==userdata.address);
  }

  const sendData = async (data) => {
    if(check(data)) {
      toast("your data has been already updated !");
      return;
    }
    let res = await upDateExitinguser(session.user.id,data);
    if(res.success){
      setuserdata(res.user);
      toast(res.msg);
    }else {
      toast(res.msg);
      return;
    }
  }

  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ];

  return (
    <div className="w-[90%] mx-auto h-screen flex flex-col gap-y-3">

      <Card>
        <CardHeader>
          <CardTitle>Welcome , {session?.user.name} </CardTitle>
        </CardHeader>
        <CardContent>
          {userdata ? <div className="flex items-center gap-x-4">
            <Image width={100} height={100} className="drop-shadow-lg size-15 rounded-full" src={session?.user.image || "https://avatars.githubusercontent.com/u/124599?v=4"} alt="this is an image" />
            <div className="flex flex-col gap-y-0.5">
              <span className="font-medium text-sm">{session?.user.email || "undefined"}</span>
              <span className="font-normal text-sm opacity-50">+91 {userdata.mobileNo || "undefined"}</span>
            </div>
          </div>
            :
            <div className="flex items-center gap-x-4">
              <Skeleton className='size-15 rounded-full' />
              <div className="flex flex-col gap-y-2">
                <Skeleton className='h-4 w-[300px] ' />
                <Skeleton className='h-4 w-[250px] ' />
              </div>
            </div>}

        </CardContent>
      </Card>


      <form onSubmit={handleSubmit(sendData)}>
      <Card>
        <CardHeader>
          <CardTitle>Account details ,</CardTitle>
          <CardDescription className='font-medium'>all <span className="text-red-500">*</span> are required!</CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-y-6'>
          <div className="flex flex-wrap items-center gap-y-3 gap-x-5">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name">Username <span className="text-red-500">*</span> </Label>
              <Input disabled type="text" id="name" placeholder="Username" value={userdata?.name || 'loading...'} />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email <span className="text-red-500">*</span> </Label>
              <Input disabled type="email" id="email" placeholder="Email" value={userdata?.email || 'loading...'} />
            </div>
          </div>

            <div className="flex flex-wrap items-center gap-y-3 gap-x-5">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="mobileNo">Mobile no. <span className="text-red-500">*</span> </Label>
                <Input type="tel" id="mobileNo" placeholder="Mobille no." {...register("mobileNo", { required: { value: true, message: "mobile no. is required!" }, pattern: { value: /^[6-9]\d{9}$/, message: 'invalid mobile no.' } })} />
                {errors.mobileNo && <span className="text-red-500 text-xs font-medium">{errors.mobileNo.message}</span>}
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="gender">Gender <span className="text-red-500">*</span> </Label>
                <Controller
                name="gender"
                rules={{required:{value:true,message:"gender is required!"}}}
                control={control}
                render={({field})=>(
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                )}
                />
                {errors.gender && <span className="text-red-500 font-medium text-xs">{errors.gender.message}</span>}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-y-3 gap-x-5">

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="country">Country <span className="text-red-500">*</span> </Label>
                <Input disabled type="text" id="country" placeholder="country" value="Indian" />
                {/* <Skeleton className='w-full max-w-sm h-9'/> */}
                <span className="text-green-500 text-xs font-medium">default conutry will india</span>
              </div>

              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="state">State <span className="text-red-500">*</span> </Label>
                <Controller 
                name="state"
                rules={{required:{value:true,message:"state is required!"}}}
                control={control}
                render={({field})=>(
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="State" />
                  </SelectTrigger>
                  <SelectContent>
                    {
                      indianStates.map((ele, idx) => <SelectItem key={idx} value={ele}>{ele}</SelectItem>)
                    }
                  </SelectContent>
                </Select>
                )}
                />
                {errors.state && <span className="text-red-500 font-medium text-xs">{errors.state.message}</span>}
              </div>
            </div>

            <div className="grid w-full max-w-md gap-1.5">
              <Label htmlFor="address">Address <span className="text-red-500">*</span> </Label>
              <Textarea id='address' placeholder="Please enter your address here"  {...register('address',{required:{value:true,message:"address is required!"},minLength:{vlaue:10,message:"atleast 10 char is required!"}})} />
              {errors.address && <span className="text-red-500 font-medium text-xs">{errors.address.message}</span>}
            </div>
        </CardContent>
        <CardFooter className='flex items-center gap-x-4 gap-y-6'>
          {!isSubmitting ? <Button disabled={!userdata && true } type='submit'>Send Data</Button> : 
          <Button disabled>
            <Loader2 className="animate-spin" />
            Please wait
          </Button>}
        </CardFooter>
      </Card>
      </form>

    </div>
  );
}

export default memo(Account);