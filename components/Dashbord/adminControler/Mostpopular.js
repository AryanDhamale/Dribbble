"use client";
// shadcn dependacies // 
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


// local dependencies // 
import Image from "next/image";
import { useState } from "react";
import { Loader2 } from "lucide-react"
import { toast } from "sonner";

// luci-icons // 
import { CirclePlus } from 'lucide-react';
import { Trash } from 'lucide-react';


function Mostpopular() {
    const [isUploading, setisUploading] = useState(false);
    const [previewUrl, setpreviewUrl] = useState(null);

    const fileValidation = (file) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/avif'];
        if (!file) {
            toast("please upload an file!");
            return true;
        }
        else if (file.size > (2 ** 20)) {
            toast("only 1Mb file size has supported!");
            return true;
        }
        else if (!allowedTypes.includes(file.type)) {
            toast('only jpg,png ,webp and avif formate are allowed!');
            return true;
        }
        else {
            return false;
        }
    }

    const handleUpload = (e) => {
        let file = e.target.files[0];

        if (fileValidation(file)) {
            return;
        }

        let url = URL.createObjectURL(file);
        setpreviewUrl(url);
    }

    return (
        <div className="flex flex-col gap-y-3 w-[95%] mx-auto min-h-screen">
            <Card>
                <CardHeader>
                    <CardTitle>Add new packages here</CardTitle>
                    <CardDescription className='text-rose-400 text-xs font-medium'>Toll powered by sandBox</CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col gap-y-5'>
                    <div>
                        {!previewUrl ? <div className="border border-slate-200 rounded-3xl h-[20rem] w-full flex justify-center items-center"> <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture">Picture</Label>
                            <Input id="picture" type="file" onChange={handleUpload} />
                        </div> </div> : <Image width={100} height={100} className="w-full h-[20rem] object-contain" unoptimized src={previewUrl} alt="this is an image" />}
                    </div>
                    <div className="flex items-center gap-x-3">
                        {previewUrl && <Button onClick={() => setpreviewUrl('')} className='cursor-pointer'> <Trash /> Remove Iamge</Button>}
                    </div>
                    <div className="flex flex-col gap-y-5">

                        <CardTitle>Package information here</CardTitle>

                        <form action="#" className="flex flex-col gap-y-5">
                            <div className="flex flex-wrap items-center gap-x-3">
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="title">Title</Label>
                                    <Input type="text" id="title" placeholder="eg: Highlights of Kashmir - Pune" />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="location">Location</Label>
                                    <Input type="text" id="location" placeholder="eg: Pune" />
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-x-3">
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="dayes">Total dayes</Label>
                                    <Input type="number" id="daye" placeholder="the total dayes must be equal to total no. of cities" />
                                </div>
                                <div className="grid w-full max-w-sm items-center gap-1.5">
                                    <Label htmlFor="cost">Cost</Label>
                                    <Input type="number" id="cost" placeholder="eg: 82000" />
                                </div>
                            </div>
                        </form>
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>good to go</Button>
                </CardFooter>
            </Card>

        </div>
    );
}

export default Mostpopular;