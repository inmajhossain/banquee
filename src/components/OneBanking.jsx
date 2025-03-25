import React from "react";
import {
  RiBankCard2Line,
  RiFlashlightLine,
  RiLineChartLine,
  RiSafe2Fill,
  RiSmartphoneLine,
  RiWifiLine,
} from "react-icons/ri";
import Image from "next/image";
import App1 from "@/assets/App1.png";

export default function OneBanking() {
  return (
    <div className="lg:w-[1200px] mx-auto flex flex-col items-center lg:items-start lg:flex-row gap-[50px] lg:gap-[124px] mb-[50px]">
      {/* Left Start */}
      <div className="flex flex-col gap-[64px] items-center lg:items-start">
        <h2 className="text-[40px] lg:text-[80px] lg:w-[490px] lg:mb-[25px] lg:leading-[90px]">
          One app. One Banking
        </h2>

        {/* Six-Boxex */}
        <div className="lg:w-[600px] lg:h-[856px] flex flex-col gap-[32px] flex-wrap items-center ">
          {/* One */}
          <div className="w-[284px] h-[264px] rounded-[16px] p-[10px] flex flex-col items-start justify-around border-[1px] border-black">
            <div className="bg-[#E8F2EE] size-[50px] flex items-center rounded-full">
              <RiFlashlightLine className="mx-auto size-[28px]  " />
            </div>
            <h3 className="text-[20px] w-[100px] font-semibold">
              Instant transactions
            </h3>
            <p className="text-16px w-[220px]">
              Odio euismod lacinia at quis. Amet purus gravida quis blandit
              turpis.
            </p>
          </div>
          {/* Two */}
          <div className="w-[284px] h-[264px] rounded-[16px] p-[10px] flex flex-col items-start justify-around border-[1px] border-black">
            <div className="bg-[#E8F2EE] size-[50px] flex items-center rounded-full">
              <RiSafe2Fill className="mx-auto size-[28px]  " />
            </div>
            <h3 className="text-[20px] w-[100px] font-semibold">
              Saving accounts
            </h3>
            <p className="text-16px w-[220px]">
              Odio euismod lacinia at quis. Amet purus gravida quis blandit
              turpis.
            </p>
          </div>
          {/* Three */}
          <div className="w-[284px] h-[264px] rounded-[16px] p-[10px] flex flex-col items-start justify-around border-[1px] border-black">
            <div className="bg-[#E8F2EE] size-[50px] flex items-center rounded-full">
              <RiSmartphoneLine className="mx-auto size-[28px]  " />
            </div>
            <h3 className="text-[20px] w-[100px] font-semibold">
              Mobile banking
            </h3>
            <p className="text-16px w-[220px]">
              Odio euismod lacinia at quis. Amet purus gravida quis blandit
              turpis.
            </p>
          </div>
          {/* Four */}
          <div className="w-[284px] h-[264px] rounded-[16px] p-[10px] flex flex-col items-start justify-around border-[1px] border-black">
            <div className="bg-[#E8F2EE] size-[50px] flex items-center rounded-full">
              <RiLineChartLine className="mx-auto size-[28px]  " />
            </div>
            <h3 className="text-[20px] w-[100px] font-semibold">
              Advanced statistics
            </h3>
            <p className="text-16px w-[220px]">
              Odio euismod lacinia at quis. Amet purus gravida quis blandit
              turpis.
            </p>
          </div>
          {/* Five */}
          <div className="w-[284px] h-[264px] rounded-[16px] p-[10px] flex flex-col items-start justify-around border-[1px] border-black">
            <div className="bg-[#E8F2EE] size-[50px] flex items-center rounded-full">
              <RiBankCard2Line className="mx-auto size-[28px]  " />
            </div>
            <h3 className="text-[20px] w-[100px] font-semibold">
              Virtual cards
            </h3>
            <p className="text-16px w-[220px]">
              Odio euismod lacinia at quis. Amet purus gravida quis blandit
              turpis.
            </p>
          </div>
          {/* Six */}
          <div className="w-[284px] h-[264px] rounded-[16px] p-[10px] flex flex-col items-start justify-around border-[1px] border-black">
            <div className="bg-[#E8F2EE] size-[50px] flex items-center rounded-full">
              <RiWifiLine className="mx-auto size-[28px]  " />
            </div>
            <h3 className="text-[20px] w-[100px] font-semibold">
              Contactless payments
            </h3>
            <p className="text-16px w-[220px]">
              Odio euismod lacinia at quis. Amet purus gravida quis blandit
              turpis.
            </p>
          </div>
        </div>
      </div>
      {/* Left End */}
      {/* Right */}
      <div>
        <Image className="" src={App1} alt={App1} width={380} height={800} />
      </div>
    </div>
  );
}
