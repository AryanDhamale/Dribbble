"use client";
//  local dependancys // 
import { useForm, Controller } from "react-hook-form";
import { upDateExitinguser, findUser } from "@/serverAction/user";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { memo } from "react";


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
} from "@/components/ui/select"


function Account({ session }) {
  const [userdata, setuserdata] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let res = await findUser(session.user.id);
      if (res.success) {
        setuserdata(res.user);
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
    return (data.mobileNo == userdata.mobileNo && data.gender == userdata.gender);
  }

  const onSubmit = async (data) => {
    if (userdata.mobileNo && userdata.gender && check(data)) {
      toast("your data has been already updated !");
      return;
    }
    let res = await upDateExitinguser(session.user.id, data);
    if (res.success) {
      setuserdata(res.user);
      toast(res.msg);
    }
    else {
      toast("some error occured in the backend!");
    }
  }
  return (
    <div className="w-full h-full flex items-center">
      <Card className={'mx-4 w-[40%]'}>
        <CardHeader>
          <CardTitle className={'text-2xl font-medium'}>Acccount details </CardTitle>
          <CardDescription className={'text-red-400'}>all field are required !</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className={'flex flex-col gap-y-3'}>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="username">Username</Label>
              <Input disabled type="text" id="username" value={userdata ? userdata.name : "Not Found"} />
              {errors.name && <span className="text-red-400 text-xs">{errors.name.message}</span>}
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input disabled type="email" id="email" value={userdata ? userdata.email : "Not Found"} />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="mobile">Mobile no.</Label>
              <Input {...register("mobileNo", {
                required: { value: true, message: "Mobile no. is required!" },
                pattern: {
                  value: /^[6-9]\d{9}$/, // Ensures 10-digit mobile number starting with 6-9
                  message: "Invalid mobile number!"
                }
              })} type="tel" id="mobile" placeholder="mobile no." />
              {errors.mobileNo && <span className="text-red-400 text-xs">{errors.mobileNo.message}</span>}
            </div>

            <div>
              <Controller
                name='gender'
                control={control}
                rules={{ required: { value: true, message: "Gender is required" } }}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue {...register('gender')} placeholder="Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>

                )}
              />
              {errors.gender && <span className="text-red-400 text-xs">{errors.gender.message}</span>}
            </div>

          </CardContent>
          <CardFooter className={'flex items-center justify-end gap-x-3'}>
            {
              isSubmitting ? <Button disabled>
                <Loader2 className="animate-spin" />
                Please wait
              </Button> : <Button>Update credentials</Button>
            }

          </CardFooter>
        </form>
      </Card>
    </div>
  );
}

export default memo(Account);