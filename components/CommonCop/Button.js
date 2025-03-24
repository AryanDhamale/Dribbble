import Link from "next/link";

function Button({text,width,link,round})
{
    return (
        <Link href={link}>
        <button className={`bg-[#872bff] active:bg-[#872bffd4] font-medium cursor-pointer drop-shadow-lg text-white w-[${width}] rounded-${round} block mx-auto my-2.5 py-3`}>{text}</button></Link>
    );
}

export default Button; 