import React from "react";
import Link from "next/link";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Heroimg from "@/assets/Heroimg.png";
import Image from "next/image";
// //Custom Font Added Start
// import { Tektur } from "next/font/google";
// import { Jaini } from "next/font/google";

// const tektur = Tektur({
//   subsets: ["latin"],
//   variable: "--font-tektur",
//   weight: ["400"],
// });
// const jaini = Jaini({
//   subsets: ["latin"],
//   variable: "--font-jaini",
//   weight: ["400"],
// });
// //Custom Font Added End

export default function Hero() {
  return (
    // className={`${tektur.className} lg:text-[88px] text-[50px]`}>
    <div className=" w-full flex flex-col justify-between lg:h-[840px] bg-[#E8F2EE] mb-[50px]">
      <div className="mx-auto text-center py-[90px]">
        <h1 className=" lg:text-[88px] text-[50px]">All in one card.</h1>
        <p className=" w-[400px] mx-auto leading-[30px]">
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>
        <div className="mx-auto mt-[30px] flex justify-around w-[380px] gap-[30px] items-center">
          <Link
            href="#"
            className="bg-[#5BB5A2] text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Open Account
          </Link>
          <div className="flex items-center gap-[10px]">
            <Link href="#">Compare Cards </Link>
            <Link href="#">
              <IoArrowForwardCircleOutline className="size-[25px]" />{" "}
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Image
          className=" mx-auto lg:mt-[60px]"
          alt="Hero Image" // Updated alt text for accessibility
          src={Heroimg} // Use the imported image variable
          width="full"
          height={350}
        />
      </div>
    </div>
  );
}
