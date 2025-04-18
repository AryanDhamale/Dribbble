import Image from "next/image";
import Link from "next/link";
export const metadata = {
    title: "BlackBird",
    description: "Generated by create next app",
};

export default function LoginLayout({ children }) {
    return (
        <div className="w-full h-screen overflow-hidden flex">
            <div className="hidden md:block flex-1 relative">
                <div className="bg-[#0000002e] text-white absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center">
                    <Link href={'/'}><h3 className="absolute top-8 left-9 text-2xl font-medium italic">Veer-Pawas</h3></Link>
                    <div className="w-[80%] flex flex-col gap-y-3">
                       <h2 className="text-4xl font-bold">Adventure start here</h2>
                       <p className="text-base font-normal">Step into a world of breathtaking destinations and unforgettable experiences.</p>
                    </div>
                    <h3 className="absolute bottom-8 left-9 font-normal">Uploaded by Tejas Dhamale</h3>
                </div>
                <Image src={'/forLogin/steve.jpg'} width={100} height={100} quality={100}  unoptimized alt="this is an image" className="w-full h-full object-fill"></Image>
            </div>
            {children}
        </div>
    );
}
