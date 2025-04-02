"use client";
import Navbar from "@/components/HeaderAndFooter/Navbar";
import Footer from "@/components/HeaderAndFooter/Footer";
import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/sonner"
import { Provider } from 'react-redux'
import store from "@/redux/store";

function LayputWrapper({ children }) {
    const pathName = usePathname();
    const hiddenPaths = ['/session', '/session/new'];
    const shouldHiddenLayout = hiddenPaths.includes(pathName) || pathName.startsWith('/dashboard');
    
    return (
        <>
        <Provider store={store}>
        {!shouldHiddenLayout && <Navbar />}
        <div className="scroll-smooth">
        {children}
        <Toaster/>
        </div>
        {!shouldHiddenLayout && <Footer />}
        </Provider>
        </>
    );
}

export default LayputWrapper;