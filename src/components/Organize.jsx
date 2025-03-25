import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import Image from "next/image";
import Frame1 from "@/assets/Frame 1.svg";
import Frame2 from "@/assets/Frame 2.svg";
import Frame3 from "@/assets/Frame 3.svg";
import Frame4 from "@/assets/Frame 4.svg";
import Frame5 from "@/assets/Frame 5.svg";

export default function () {
  return (
    <div className="w-[390px] lg:w-[1200px] mx-auto mt-[50px] lg:mt-[160px] ">
      {/* Top Start */}
      <div className="flex flex-col lg:items-start items-center lg:gap-[10px] mb-[50px] lg-mb-0 ">
        <h3 className="text-[18px] mb-[20px]">Saving Accounts</h3>
        <h2 className="text-[22px] font-semibold lg:font-normal lg:text-[64px] lg:mt-[-20px] lg:w-[600px] lg:leading-[70px]">
          Organize your money the right way
        </h2>

        <div className=" lg:w-[1200px] flex flex-col  lg:flex-row items-center lg:items-end lg:justify-between">
          <p className="mt-[10px] text-[18px] w-[390px] md:w-[538px] lg:w-[538px] text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <button
            href={"/compare"}
            className=" text-[18px] text-[#5BB5A2] mt-[20px] flex items-center gap-[10px] lg:text-right"
          >
            All Features <RiArrowRightLine />
          </button>
        </div>
      </div>
      {/* Top End */}
      {/* Bottom Start */}
      <div className="flex flex-col items-center lg:flex-row gap-[33px] lg:items-start">
        {/* One */}
        <div>
          <Image
            className=" mb-[20px]"
            alt={Frame1}
            src={Frame1}
            width={214}
            height={214}
          />
          <h3 className="text-[20px] font-semibold">New Laptop</h3>
          <p className="text-[14px]">400$</p>
        </div>
        {/* Two */}
        <div>
          <Image
            className=" mb-[20px]"
            alt={Frame2}
            src={Frame2}
            width={214}
            height={214}
          />
          <h3 className="text-[20px] font-semibold">Dream Bike</h3>
          <p className="text-[14px]">200$</p>
        </div>
        {/* Three */}
        <div>
          <Image
            className=" mb-[20px]"
            alt={Frame3}
            src={Frame3}
            width={214}
            height={214}
          />
          <h3 className="text-[20px] font-semibold">Holiday</h3>
          <p className="text-[14px]">14000$</p>
        </div>
        {/* Four */}
        <div>
          <Image
            className=" mb-[20px]"
            alt={Frame4}
            src={Frame4}
            width={214}
            height={214}
          />
          <h3 className="text-[20px] font-semibold">Camera</h3>
          <p className="text-[14px]">100$</p>
        </div>
        {/* Five */}
        <div>
          <Image
            className=" mb-[20px]"
            alt={Frame5}
            src={Frame5}
            width={214}
            height={214}
          />
        </div>
      </div>
      {/* Bottom End */}
    </div>
  );
}
