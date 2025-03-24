"use client";
import Navbar from "@/components/HeaderAndFooter/Navbar";
import Footer from "@/components/HeaderAndFooter/Footer";
import { usePathname } from "next/navigation";

function LayputWrapper({children})
{
    const pathName = usePathname();
    const hiddenPaths=['/session','/session/new'];
    const shouldHiddenLayout=hiddenPaths.includes(pathName);
    return (
        <>
        {!shouldHiddenLayout && <Navbar/>}
        <div>
        {children}
        </div>
        {!shouldHiddenLayout && <Footer/>}
        </>
    );
}

export default LayputWrapper;