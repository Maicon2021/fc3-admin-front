import { w } from "@vidstack/react/dist/types/vidstack.js";
import { headers } from "next/dist/client/components/headers";
'use client';
import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";
import { NavLinks } from "./NavLinks";
import { UserProfile } from "./UserProfile";
import { useScroll } from "../hooks/useScroll";


export default function Header () {
    const isScrolled = useScroll();         

    return (
        <header className={`${isScrolled && 'bg-black'} fixed top-0 z-50 flex w-full items-center justify-between 
        bg-gradient-to-t from-transparent to-black p-2 px-4 transition-all lg:px-16 lg:py-6 `}> 

            <div className=" flex items-center space-x-2 md:space-x-8">
                <Link href='/'>
                    <Logo />                
                </Link>
                <NavLinks />
            </div>            
                           
            <UserProfile />           
            
        </header>        

    )
}