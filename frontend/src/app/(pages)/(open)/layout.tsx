'use client';
import NavBar from "@/components/NavBar";
import React, { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="bg-black">
            <NavBar />
            {children}
        </div>
    );
}