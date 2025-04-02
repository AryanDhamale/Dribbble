import Image from "next/image";

function Bookingcard({ data }) {

    const before = () => {
        if (data.bookingDate) {
            let date = new Date(data.bookingDate);
            return `${String(date.getDate()).padStart(2, '0')}-${date.toLocaleString("en-US", { month: "long" })}-${date.getFullYear()}`;
        }
        else "Null";
    };

    const compare = () => {
        let currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);
        let selectDate = new Date(data.bookingDate);
        selectDate.setHours(0, 0, 0, 0);
        if(currentDate <= selectDate) {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <div className="border border-slate-200 bg-white drop-shadow-lg rounded-2xl px-2 py-2 w-[98%] mx-auto flex gap-x-0.5 sm:gap-x-4">

            <Image className="my-auto sm:my-0 block size-15 sm:size-30 object-cover rounded-md" width={100} height={100} src={data.image} alt="this is an image" />
            <div className="flex-1 flex justify-between px-4 items-center">
                <div>
                    <div className="flex flex-col gap-y-0.5 text-xs">
                        <p className="font-medium">{data.location}</p>
                        <p className="font-medium sm:text-base"><span className="opacity-50">Start-from </span>: <span className="font-bold text-green-400">&#8377; {(data.cost).toLocaleString('en-IN')} * {data.totalPerson}</span> </p>
                        {/* <p className="font-light opacity-50 sm:text-sm">per person had applyed</p> */}
                        <div>
                            <p className="sm:text-base py-1"> <span>Starting - </span> {before()} </p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-x-2">
                    <button className={`${compare() ? "bg-green-400" : "bg-red-400"}  text-white text-xs sm:text-base rounded-full px-3 py-1 sm:px-5 sm:py-2 flex gap-x-2 items-center`}>{compare() ? "Ongoing" : "Missed"}</button>
                </div>

            </div>

        </div>
    );
}

export default Bookingcard;