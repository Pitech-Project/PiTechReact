"use client"

import { usePathname } from "next/navigation";
import Footer from "../footer";
import { NavbarComponent } from "../header/Navbar";
import Preloader from "../preloader";

export default function LayoutWrapper({ children }: { children: React.ReactNode }){
    const pathname = usePathname();
    // const noHeaderPaths = ['/admin', '/register'];
    // const shouldShowHeader = !noHeaderPaths.includes(pathname);
    const noHeaderPaths = ['/login', '/dashboard', '/career-enquiry', '/contact-enquiry'];
    const shouldShowHeader = !noHeaderPaths.includes(pathname);
    return(
        <>
            <NavbarComponent />
            {shouldShowHeader && (
                <Preloader />
            )}
            
            {children}
            <Footer/>
        </>
    )
}