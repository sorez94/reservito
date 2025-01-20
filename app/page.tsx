"use client"
import Banner from "@/app/home-components/Banner";
import Slogan from "@/app/home-components/Slogan";
import FastFoodDisadvantages from "@/app/home-components/FastFoodDisadvantages";
import Navbar from "@/app/home-components/Navbar";
import Footer from "@/app/home-components/Footer";

export default function Home() {
    return (
        <div>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <Banner/>
                <Slogan/>
                <FastFoodDisadvantages/>
            </main>
        </div>
    );
}
