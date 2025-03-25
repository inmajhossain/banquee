import React from "react";
import Image from "next/image";
import badge from "@/assets/badge.svg";
import grid1 from "@/assets/grid1.png";
export default function Seemless() {
  return (
    <div className="w-[390px] mx-auto lg:w-[1200px] lg:h-[610px] flex flex-col items-start gap-[64px] lg:mb-[160px] bprder-black border-b-[1px] mb-[50px] ">
      {/* Up Start */}
      <div>
        <Image
          src={grid1}
          alt={grid1}
          width={722}
          height={136}
          className="mt-[14px] w-[380px] lg:w-[722px]"
        />
      </div>
      {/* Up End */}
      {/* Down Start */}
      <div className="w-[390px] lg:w-[1200px] mx-auto lg:ml-0 flex flex-col lg:flex-row items-center lg:items-end lg:gap-[163px] text-center lg:text-left">
        {/* Left Start */}
        <div className="flex flex-col">
          <h3 className="text-[20px]">Tools</h3>
          <h2 className="text-[30px] lg:text-[64px] lg:w-[200px] lg:leading-[70px] mb-[20px]">
            SeemLess integration
          </h2>
          <p className=" text-[18px]  lg:w-[538px]">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        {/* Left End */}
        <div className="flex flex-col mt-[20px] mb-[50px] lg:mb-0">
          <div className="flex items-center gap-[10px] ">
            <Image
              className="bg-[#5BB5A2] size-[25px] rounded-full"
              alt={badge}
              src={badge}
              width={20}
              height={20}
            />
            <h2 className="text-black text-[18px]">
              Secure and encrypted integration
            </h2>
          </div>
          <div className="flex items-center gap-[10px] mt-[10px]">
            <Image
              className="bg-[#5BB5A2] size-[25px] rounded-full"
              alt={badge}
              src={badge}
              width={20}
              height={20}
            />
            <h2 className="text-black text-[18px]">Fully API interface</h2>
          </div>
          <div className="flex items-center gap-[10px] mt-[10px]">
            <Image
              className="bg-[#5BB5A2] size-[25px] rounded-full"
              alt={badge}
              src={badge}
              width={20}
              height={20}
            />
            <h2 className="text-black text-[18px]">Payments worldwide</h2>
          </div>
        </div>
        {/* Right Start */}
        {/* Right End */}
      </div>
      {/* Down End */}
    </div>
  );
}
