import Image from "next/image";
import localFont from "next/font/local";
import Navbar from "@/pages/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = localFont({
  src: "./fonts/Inter.woff",
  variable: "--font-inter",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistMono.variable}`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Navbar />
        سلام. من soheil هستم
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
