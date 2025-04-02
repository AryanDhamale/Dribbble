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
        <div className="border border-slate-200 bg-white drop-shadow-lg rounded-2xl px-2 py-2 w-[98%] mx-auto flex gap-x-4">

            <Image className="my-auto sm:my-0 block size-15 sm:size-30 object-cover rounded-md" width={100} height={100} src={data.image} alt="this is an image" />
            <div className="flex-1 flex justify-between px-4 items-center">
                <div>

                    <h2 className="font-medium text-base truncate w-[13rem] sm:w-auto sm:text-lg">{data.title}</h2>
                    <div className="flex flex-col gap-y-0.5">
                        <p className="font-medium text-sm sm:text-base"><span className="opacity-50">Start-from </span>: <span className="font-bold">&#8377; {(data.cost).toLocaleString('en-IN')} * {data.totalPerson}</span> </p>
                        <p className="font-light opacity-50 text-sm">per person had applyed</p>
                        <div>
                            <p className="text-xs sm:text-base py-1"> <span>Starting - </span> {before()} </p>
                            {/* <p> <span>End - </span> {after()} </p> */}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-x-2">
                    {/* <Link href={`/show-all`}><button className="bg-[#bedbff] active:bg-[#bedbffd7] cursor-pointer rounded-full px-5 py-2 flex gap-x-2 items-center"><span>Check</span><GoChevronRight /></button></Link> */}
                    <button className={`${compare() ? "bg-green-400" : "bg-red-400"}  text-white text-xs sm:text-base rounded-full px-3 py-1 sm:px-5 sm:py-2 flex gap-x-2 items-center`}>{compare() ? "Ongoing" : "Missed"}</button>
                </div>

            </div>

        </div>
    );
}

export default Bookingcard;