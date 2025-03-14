import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
    <div className="column-xl text-white flex justify-around items-center max-w-screen">
      <div className="bg-slate-900">Menu</div>
      <div className="bg-green-900">Today's</div>
      <div className="bg-gray-200">Task</div>
    </div>
    </>
  );
}
