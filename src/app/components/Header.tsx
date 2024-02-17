import { w } from "@vidstack/react/dist/types/vidstack.js";
import { headers } from "next/dist/client/components/headers";
'use client';
import React, { useEffect, useState } from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import { NavLinks } from "./NavLinks";

export default function Header () {
    const [ isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 transition-all lg:px-10 lg:py-6 `}> 

            <div className=" flex items-center space-x-2 md:space-x-8">
                <Link href='/'>
                    <Logo />                
                </Link>
                <NavLinks />
            </div>
            
            <div className=" flex items-center space-x-2 md:space-x-8">
                
                <p className=" hidden cursor-not-allowed lg:inline">Kids</p>
                <img src="/profile.png" alt="profile" className=" cursor-pointer rounded"/>

            </div>
            
        </header>
        

    )


}