import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import Navbar from "@/app/home-components/Navbar";
import Footer from "@/app/home-components/Footer";
import "./globals.css";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "رزرویتو",
    description: "Generated by create next app",
};

const RootLayout = ({
                        children,
                    }: {
    children: React.ReactNode;
}) => {
    return (
        <html lang="en" dir="rtl" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="antialiased">
        <Navbar/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
};

export default RootLayout;
