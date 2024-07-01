"use client";

import React from "react";
import MobileNavBar from "./MobileNavBar";
import MainNavBar from "./MainNavBar";
import { cn } from "@/lib/utils";

function Navbar() {
    return (
        <nav
            className={cn(
                "bg-background text-foreground z-50 flex h-16 w-full items-center px-8 py-4",
            )}
        >
            <MainNavBar />
            <MobileNavBar />
        </nav>
    );
}

export default Navbar;
