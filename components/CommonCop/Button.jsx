
function Button({text,width,link,round})
{
    return (
        <button className={`bg-[#24b985] active:bg-[#24b999cc] font-medium cursor-pointer drop-shadow-lg text-white w-[${width}] rounded-${round} block mx-auto my-2.5 py-3`}>{text}</button>
    );
}

export default Button; 