import React from "react";
import Image from "next/image";
import App1 from "@/assets/App1.png";
import App2 from "@/assets/App2.png";
import App3 from "@/assets/App3.png";
import App4 from "@/assets/App4.png";
import badge from "@/assets/badge.svg";

export default function Application() {
  return (
    <div className="lg:mt-[150px] w-full mx-auto lg:w-[1200px] flex flex-col gap-[50px] lg:gap-[100px] mb-[50px]">
      {/* One Start */}
      <div className="w-full lg:w-[1200px] lg:h-[800px] flex flex-col lg:flex-row justify-between items-center">
        {/* Left Start */}
        <div className="flex flex-col lg:items-start items-center gap-[10px] mb-[50px] lg-mb-0 ">
          <h3 className="text-[18px]">Transactions</h3>
          <h2 className="text-[64px]">Send & receive</h2>
          <h2 className="text-[64px] mt-[-40px]">Money instantly</h2>
          <p className="text-[18px] w-[350px] md:w-[538px] lg:w-[538px] text-center lg:text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <div className="flex flex-col mt-[20px] ">
            <div className="flex items-center gap-[10px]">
              <Image
                className="bg-[#5BB5A2] size-[25px] rounded-full"
                src={badge}
                width={20}
                height={20}
              />
              <h2 className="text-black">Malesuada Ipsum</h2>
            </div>
            <div className="flex items-center gap-[10px] mt-[10px]">
              <Image
                className="bg-[#5BB5A2] size-[25px] rounded-full"
                src={badge}
                width={20}
                height={20}
              />
              <h2 className="text-black">Vestibulum</h2>
            </div>
            <div className="flex items-center gap-[10px] mt-[10px]">
              <Image
                className="bg-[#5BB5A2] size-[25px] rounded-full"
                src={badge}
                width={20}
                height={20}
              />
              <h2 className="text-black">Parturient Lorem</h2>
            </div>
          </div>
        </div>
        {/* Left End */}
        {/* Right Start */}
        <div>
          <Image src={App1} width={380} height={800} />
        </div>
        {/* Right End */}
      </div>
      {/* One End */}
      {/* Two Start */}
      <div className="w-full lg:w-[1200px] lg:h-[800px] flex flex-col lg:flex-row justify-between items-center">
        {/* Left Start */}
        <div className="flex flex-col lg:items-start items-center gap-[10px] mb-[50px] lg-mb-0 ">
          <h3 className="text-[18px]">Cards</h3>
          <h2 className="text-[64px]">Manage</h2>
          <h2 className="text-[64px] mt-[-40px]">your cards</h2>
          <p className="text-[18px] w-[350px] md:w-[538px] lg:w-[538px] text-center lg:text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <div className="flex flex-col mt-[20px] ">
            <div className="flex items-center gap-[10px]">
              <Image
                className="bg-[#5BB5A2] size-[25px] rounded-full"
                src={badge}
                width={20}
                height={20}
              />
              <h2 className="text-black">Malesuada Ipsum</h2>
            </div>
            <div className="flex items-center gap-[10px] mt-[10px]">
              <Image
                className="bg-[#5BB5A2] size-[25px] rounded-full"
                src={badge}
                width={20}
                height={20}
              />
              <h2 className="text-black">Vestibulum</h2>
            </div>
            <div className="flex items-center gap-[10px] mt-[10px]">
              <Image
                className="bg-[#5BB5A2] size-[25px] rounded-full"
                src={badge}
                width={20}
                height={20}
              />
              <h2 className="text-black">Parturient Lorem</h2>
            </div>
          </div>
        </div>
        {/* Left End */}
        {/* Right Start */}
        <div>
          <Image src={App2} width={380} height={800} />
        </div>
        {/* Right End */}
      </div>
      {/* Two End */}
      {/* Three Start */}
      <div className="w-full lg:w-[1200px] lg:h-[800px] flex flex-col lg:flex-row justify-between items-center">
        {/* Left Start */}
        <div className="flex flex-col lg:items-start items-center gap-[10px] mb-[50px] lg-mb-0 ">
          <h3 className="text-[18px]">Advanced Statistics</h3>
          <h2 className="text-[64px]">Keep control</h2>
          <h2 className="text-[64px] mt-[-40px]">over your money</h2>
          <p className="text-[18px] w-[350px] md:w-[538px] lg:w-[538px] text-center lg:text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <div className="flex flex-col mt-[20px] ">
            <div className="flex items-center gap-[10px]">
              <Image
                className="bg-[#5BB5A2] size-[25px] rounded-full"
                src={badge}
                width={20}
                height={20}
              />
              <h2 className="text-black">Malesuada Ipsum</h2>
            </div>
            <div className="flex items-center gap-[10px] mt-[10px]">
              <Image
                className="bg-[#5BB5A2] size-[25px] rounded-full"
                src={badge}
                width={20}
                height={20}
              />
              <h2 className="text-black">Vestibulum</h2>
            </div>
            <div className="flex items-center gap-[10px] mt-[10px]">
              <Image
                className="bg-[#5BB5A2] size-[25px] rounded-full"
                src={badge}
                width={20}
                height={20}
              />
              <h2 className="text-black">Parturient Lorem</h2>
            </div>
          </div>
        </div>
        {/* Left End */}
        {/* Right Start */}
        <div>
          <Image src={App3} width={380} height={800} />
        </div>
        {/* Right End */}
      </div>
      {/* Three End */}
      {/* Four Start */}
      <div className="w-full lg:w-[1200px] lg:h-[800px] flex flex-col lg:flex-row justify-between items-center">
        {/* Left Start */}
        <div className="flex flex-col lg:items-start items-center gap-[10px] mb-[50px] lg-mb-0 ">
          <h3 className="text-[18px]">Saving Accounts</h3>
          <h2 className="text-[64px]">Lorem et</h2>
          <h2 className="text-[64px] mt-[-40px]">ipsum dolor</h2>
          <p className="text-[18px] w-[350px] md:w-[538px] lg:w-[538px] text-center lg:text-left">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>

          <div className="flex flex-col mt-[20px] ">
            <div className="flex items-center gap-[10px]">
              <Image
                className="bg-[#5BB5A2] size-[25px] rounded-full"
                src={badge}
                width={20}
                height={20}
              />
              <h2 className="text-black">Malesuada Ipsum</h2>
            </div>
            <div className="flex items-center gap-[10px] mt-[10px]">
              <Image
                className="bg-[#5BB5A2] size-[25px] rounded-full"
                src={badge}
                width={20}
                height={20}
              />
              <h2 className="text-black">Vestibulum</h2>
            </div>
            <div className="flex items-center gap-[10px] mt-[10px]">
              <Image
                className="bg-[#5BB5A2] size-[25px] rounded-full"
                src={badge}
                width={20}
                height={20}
              />
              <h2 className="text-black">Parturient Lorem</h2>
            </div>
          </div>
        </div>
        {/* Left End */}
        {/* Right Start */}
        <div>
          <Image src={App4} width={380} height={800} />
        </div>
        {/* Right End */}
      </div>
      {/* Four End */}
    </div>
  );
}
