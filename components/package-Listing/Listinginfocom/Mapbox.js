
function Mapbox() {
    return (
        <div className="flex flex-col gap-y-4" id="mapbox">
            <h2 className="text-lg font-medium mt-4">Check where is it..</h2>
            <div className="border border-slate-200 rounded-md drop-shadow-lg h-[20rem] w-[75%] flex justify-center items-center">
                <div className="text-red-500">
                    <h2>MAP-1 STALL</h2>
                    <ul>
                        <li>-THR LEVER 1 ........... IDLE</li>
                        <li>-MAP PARAMETERS ........... IDLE</li>
                        <span className="ps-6">.IF ABNORMAL :</span>
                        <li>-MAP-1 ........... STALL</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Mapbox;