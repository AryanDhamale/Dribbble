"use server";
import connetDb from "@/lib/connetDb";
import Listing from "@/models/Listing";
import Booking from "@/models/Booking";
import User from "@/models/User";

export const expiredPackages = async (arr) => {
    try {
        if (!arr.length) {
            throw new Error("empty array!");
        }
        let db = await connetDb();
        arr.forEach(async (ele, idx) => {
            let Package = await Listing.findOne({ title: ele.location });

            if (ele.paymentStatus === 'pending' && !ele.returned) { // for pending packages // 
                let booked = await Booking.findByIdAndUpdate(ele._id, { returned: true }, { new: true });
                if ((Package.totalPerson + ele.totalPerson) <= 10) {
                    Package.totalPerson += ele.totalPerson;
                    await Package.save();
                }
            } else { // for payment complete packages // 
                let todayDate = new Date();
                let bookedDate = new Date(ele.bookingDate);
                todayDate.setHours(0, 0, 0, 0);
                bookedDate.setHours(0, 0, 0, 0);
                if (todayDate > bookedDate && !ele.returned) { // expired package // 
                    let booked = await Booking.findByIdAndUpdate(ele._id, { returned: true, tourStatus: 'missed' }, { new: true });
                    if ((Package.totalPerson + ele.totalPerson) <= 10) {
                        Package.totalPerson += ele.totalPerson;
                        Package.save();
                    }
                }
            }
        })
        return { success: true, msg: "done Package has been updated" };
    } catch (err) {
        return { success: false, msg: err.message || "something went wrong to backend-11" };
    }
}


export const fucking = async () => {
    let db = connetDb();
    let u = await User.findOne().populate('booking');
    console.log(u);
}