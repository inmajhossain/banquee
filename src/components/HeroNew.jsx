import React from "react";
import card7 from "@/assets/card7.png";
import Image from "next/image";
import badge from "@/assets/badge.svg";
import AppleStore from "@/assets/AppleStore.png";
import GoogleStore from "@/assets/GoogleStore.png";

export default function HeroNew() {
  return (
    <div className="mx-auto w-full pt-[43px] lg:h-[833px] bg-[#E8F2EE] flex flex-col lg:flex-row gap-[50px] lg:gap-0 justify-around lg:rounded-2xl mb-[150px]">
      <div className="lg:w-[1200px] lg:h-[580px] mx-auto  flex flex-col gap-[50px] lg:gap-0 lg:flex-row justify-between lg:mt-[100px]">
        {/* Left Side: Content and Features */}
        <div className="lg:w-[540px] text-center lg:text-left flex flex-col items-center lg:items-start gap-[10px] mt-[30px] text-black">
          <h2 className="font-semibold lg:w-[400px] lg:leading-[70px] text-[40px] lg:text-[64px]">
            Banking starts here.
          </h2>

          <p className="text-[18px] w-[380px] lg:w-[435px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>

          {/* Features List */}
          <div className="flex flex-col lg:flex-row items-start mt-[20px] ml-0 lg:ml-0 gap-[10px] lg:gap-[50px] ">
            <div>
              {/* Left */}
              <div className="flex items-center gap-[10px]">
                <Image
                  className="bg-[#5BB5A2] size-[25px] rounded-full"
                  alt={badge}
                  src={badge}
                  width={20}
                  height={20}
                />
                <h2 className="text-black">Instant Transfer</h2>
              </div>
              <div className="flex items-center gap-[10px] mt-[10px]">
                <Image
                  className="bg-[#5BB5A2] size-[25px] rounded-full"
                  alt={badge}
                  src={badge}
                  width={20}
                  height={20}
                />
                <h2 className="text-black">Saving accounts</h2>
              </div>
            </div>
            {/* Right */}
            <div>
              <div className="flex items-center gap-[10px]">
                <Image
                  className="bg-[#5BB5A2] size-[25px] rounded-full"
                  alt={badge}
                  src={badge}
                  width={20}
                  height={20}
                />
                <h2 className="text-black">Payments worldwide</h2>
              </div>
              <div className="flex items-center gap-[10px] mt-[10px]">
                <Image
                  className="bg-[#5BB5A2] size-[25px] rounded-full"
                  alt={badge}
                  src={badge}
                  width={20}
                  height={20}
                />
                <h2 className="text-black">100% mobile banking</h2>
              </div>
            </div>
          </div>

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

        {/* Right Side: Card Image */}
        <div>
          <Image
            className="mx-auto w-[350px] lg:w-[400px] py-[20px] lg:py-0 "
            alt="card7"
            src={card7}
            width="400"
            height="578"
          />
        </div>
      </div>
    </div>
  );
}

// FeatureItem Component for rendering individual feature items
const FeatureItem = ({ feature }) => (
  <div className="flex items-center gap-[10px] mt-[10px]">
    <Image src={badge} width={20} height={20} alt="Feature Badge" />
    <h2 className="text-white">{feature}</h2>
  </div>
);
