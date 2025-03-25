import React from "react";
import Image from "next/image";
import Link from "next/link";
import grid2 from "@/assets/grid2.png";

import badge from "@/assets/badge.svg";
import { RiArrowRightLine } from "react-icons/ri";

export default function Notification() {
  return (
    <div className="w-full mx-auto lg:w-[1200px] lg:h-[800px] flex flex-col lg:flex-row justify-between items-center mb-[50px] lg:mb-0">
      {/* Left Start */}
      <div className="flex flex-col lg:items-start items-center lg:gap-[10px] mb-[50px] lg-mb-0 ">
        <h3 className="text-[18px]">Notifications</h3>
        <h2 className="text-[30px] lg:text-[64px] lg:mt-[-20px]">
          Stay notified
        </h2>
        <h2 className="text-[30px] lg:text-[64px] lg:leading-[45px] mb-[10px]">
          Money instantly
        </h2>
        <p className="text-[18px] w-[390px] md:w-[538px] lg:w-[538px] text-center lg:text-left">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="flex flex-col mt-[20px] mb-[50px] lg:mb-0">
          <div className="flex items-center gap-[10px] ">
            <Image
              className="bg-[#5BB5A2] size-[25px] rounded-full"
              alt={badge}
              src={badge}
              width={20}
              height={20}
            />
            <h2 className="text-black text-[18px]">Malesuada Ipsum</h2>
          </div>
          <div className="flex items-center gap-[10px] mt-[10px]">
            <Image
              className="bg-[#5BB5A2] size-[25px] rounded-full"
              alt={badge}
              src={badge}
              width={20}
              height={20}
            />
            <h2 className="text-black text-[18px]">Vestibulum</h2>
          </div>
          <div className="flex items-center gap-[10px] mt-[10px]">
            <Image
              className="bg-[#5BB5A2] size-[25px] rounded-full"
              alt={badge}
              src={badge}
              width={20}
              height={20}
            />
            <h2 className="text-black text-[18px]">Parturient Lorem</h2>
          </div>
        </div>
        <button
          href={"/compare"}
          className=" text-[18px] text-[#5BB5A2] mt-[20px] flex items-center gap-[10px]"
        >
          Compare Cards <RiArrowRightLine />
        </button>
      </div>
      {/* Left End */}
      {/* Right Start */}
      <div>
        <Image
          src={grid2}
          alt={grid2}
          width={500}
          height={475}
          className="w-[380px] lg:w-[500px]"
        />
      </div>
      {/* Right End */}
    </div>
  );
}
