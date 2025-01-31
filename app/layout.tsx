import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import Navbar from "@/app/home-components/Navbar";
import Footer from "@/app/home-components/Footer";
import "./globals.css";
import React from "react";
import ReactQueryProvider from "@/app/ReactQueryProvider";
import { ToastContainer } from 'react-toastify';

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
    icons: {
        icon: '/favicon.ico',
    },
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
        <ReactQueryProvider>
            <ToastContainer />
            <main>{children}</main>
        </ReactQueryProvider>
        <Footer/>
        </body>
        </html>
    );
};

export default RootLayout;
