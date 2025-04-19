"use server";
import connetDb from "@/lib/connetDb";
import Listing from "@/models/Listing";
import Razorpay from "razorpay";
import mongoose from "mongoose";
import Booking from "@/models/Booking";
import User from "@/models/User";


// decrease count as per Totalperson // 
export const decreaseCount = async (userId, id, from, totalPerson) => { // user_id , package_id , from_date , totalPeron=count
  if (!userId || !id || !from || !totalPerson) return {
    success: false,
    msg: "All parameters are required!"
  }
  await connetDb();
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    let res = await Listing.findById(id);
    if (!res) {
      throw new Error("Package not found!");
    }
    if (totalPerson > res.totalPerson) {
      throw new Error("Too much count have!");
    }

    // check if it's already booked or not ? // 
    let user = await User.findById(userId).populate('booking');
    if (!user) {
      throw new Error("user not found");
    }

    // cheking here // 
    user.booking.forEach((ele,idx)=>{
      if((ele.location===res.title) && (ele.tourStatus=='ongoing')) { // no logic here // 
        throw new Error("you can booked this package only onces!");
      }
    });
  

    res.totalPerson -= totalPerson;
    await res.save();

    let booking = await Booking.create({
      location: res.title,
      image: res.image,
      cost: res.cost,
      totalPerson,
      bookingDate: new Date(from),
    });

    user.booking.push(booking);
    await user.save();

    // success fully completion of transition // 
    session.commitTransaction();

    return { success: true, msg: "opration has done!", id: booking._id.toString() };

  } catch (err) {
    session.abortTransaction();
    return { success: false, msg: err.message || "can't do booking!" };
  }

  finally {
    session.endSession();
  }
}


export const appendIDtoOrder = async (bookingID, orderID) => {
  try {
    if (!bookingID || !orderID) {
      throw new Error("id's are required!");
    }
    let db = await connetDb();
    let res = await Booking.findByIdAndUpdate(bookingID, { oid: orderID }, { new: true });
    return { success: true, msg: "append id to booking model!" };
  } catch (err) {
    return { success: false, err };
  }
}


// making order_instance for user_payment // 
export const startBooking = async (cost) => {
  console.log("type", typeof (cost));
  var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_RAYZORPAY_ID, key_secret: process.env.NEXT_PUBLIC_RAYZORPAY_SECRET });
  var options = {
    amount: cost * 100,  // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    receipt: "order_rcptid_11"
  };
  let x = await instance.orders.create(options);
  return x;
}