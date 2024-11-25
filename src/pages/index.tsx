import localFont from "next/font/local";
import Navbar from "@/pages/components/Navbar";
import React from "react";
import Banner from "@/pages/components/Banner";



export default function Home() {
  return (
    <div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Navbar />
        <Banner />
        سلام. من soheil هستم
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
