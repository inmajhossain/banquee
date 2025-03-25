import React from "react";
import Image from "next/image";
import Card6 from "@/assets/card6.png";

export default function PerfectCard() {
  return (
    <div className="mb-[50px] w-[290px] lg:w-[800px] mx-auto flex flex-col gap-[25px] items-center ">
      <h3 className=" text-[20px]">Account </h3>
      <h2 className=" w-[195px] lg:w-[550px] text-center text-[28px] lg:text-[80px] font-semibold mt-[-20px] mb-[-30px] lg:leading-[80px]">
        Perfect card for your needs.
      </h2>
      <p className="w-[370px] lg:w-[450px] mt-[16px] text-center text-[20px]">
        Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
        duis ut diam.
      </p>
      <Image
        src={Card6}
        alt={Card6}
        width={500}
        height={500}
        className="mt-[14px]"
      />
      <div className="flex justify-center gap-[10px] mt-[18px]">
        <button
          href={"/compare"}
          className="w-[165px] h-[50px] px-[24px] py-[12px] text-White text-[18px] bg-[#5BB5A2]  rounded-[5px]"
        >
          Open Account
        </button>
        <button
          href={"/compare"}
          className="w-[175px] h-[50px] px-[24px] py-[12px] text-black text-[18px] bg-[#E8E8E8] rounded-[5px]"
        >
          Compare Cards
        </button>
      </div>
    </div>
  );
}
