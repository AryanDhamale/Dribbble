"use client"; // Mark as a client component

import { useEffect } from "react";

function SomeComponent() {
    useEffect(() => {
        if (typeof document !== "undefined") {
            // Safe to use document here
            console.log("Document is accessible:", document.title);
        }
    }, []);

    return <div>Some Component</div>;
}

export default SomeComponent;
