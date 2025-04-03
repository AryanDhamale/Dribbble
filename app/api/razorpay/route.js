"use server";
import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import connetDb from "@/lib/connetDb";
import Booking from "@/models/Booking";

export async function POST(request)
{
    try{
        let body=await request.formData();
        body=Object.fromEntries(body);
        
        // meaning less // 
        if(!body.razorpay_payment_id  || !body.razorpay_order_id || !body.razorpay_signature){
            return NextResponse.json({success:false , msg:"credentails are required!"});
        }
    
        let {razorpay_signature,razorpay_order_id,razorpay_payment_id} = body;
        let db = await connetDb();
        let b=await Booking.findOne({oid : razorpay_order_id});
        if(!b) {
           return NextResponse.json({success:false,msg:"order not found"});
        }
    
    
        let xx = validatePaymentVerification({"order_id": b.oid, "payment_id":razorpay_payment_id},razorpay_signature,process.env.NEXT_PUBLIC_RAYZORPAY_SECRET);
        if(xx){
            b.paymentStatus="completed";
            await b.save();
            return NextResponse.redirect(process.env.NODE_ENV==='development' ? `http://localhost:3000/dashboard?section=booking&&message=success&&oid=${b.oid}` : process.env.NEXT_PUBLIC_PREFIX+ `dashboard?section=booking&&message=success&&oid=${b.oid}`)
        }else {
           return NextResponse.json({success:false,msg:'something went wrong!'});
        }

    }catch(err){
      return NextResponse.json({msg:"something went wrong at backend!"},{status:501});
    }
}