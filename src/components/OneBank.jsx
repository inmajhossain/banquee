import React from "react";
import Image from "next/image";
import Statistics from "@/assets/Statistics.png";
import Cards from "@/assets/Cards.png";
import Grid from "@/assets/Grid.png";
import Laptop from "@/assets/Laptop.png";
import Apple2 from "@/assets/Apple2.png";
export default function OneBank() {
  return (
    <div className="lg:mt-[150px] w-full mx-auto lg:w-[1200px] flex flex-col gap-[50px] lg:mb-[100px]">
      {/* Top Start */}
      <div className="text-center">
        <h2 className="text-[40px] lg:text-[64px]">All in one bank. Really.</h2>
        <p className="text-[16px] w-[350px] mx-auto">
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>
      </div>
      {/* Top End */}
      {/* Middle Start */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Left Start */}
        <div className="lg:w-[584px] h-[500px] flex flex-col justify-between items-center bg-[#F8F8F8] rounded-[10px]">
          <div className="py-[60px]">
            <h2 className="text-[40px] text-center">Statistics</h2>
            <p className="w-[350px] text-center text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              numquam?
            </p>
          </div>
          <Image src={Statistics} alt={Statistics} width={380} height={257} />
        </div>
        {/* Left End */}
        {/* Right Start */}
        <div className="lg:w-[584px] h-[500px] flex flex-col justify-between items-center bg-[#F8F8F8] rounded-[10px]">
          <div className="py-[60px]">
            <h2 className="text-[40px] text-center">Cards</h2>
            <p className="w-[350px] text-center text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
              numquam?
            </p>
          </div>
          <Image src={Cards} alt={Cards} width={723} height={253} />
        </div>
        {/* Right End */}
      </div>
      {/* Middle End */}
      {/* Bottom Start */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* One Start */}
        <div className="lg:w-[378px] h-[550px] flex flex-col justify-around items-center bg-[#F8F8F8] rounded-[10px]">
          <div className=" ml-[30px] ">
            <h2 className="text-[40px] text-left">Easy</h2>
            <h3 className="text-[40px] text-left mt-[-20px]">integration</h3>
            <p className="w-[310px] text-left text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <Image src={Grid} alt={Grid} width={723} height={253} />
        </div>
        {/* One End */}
        {/* Two Start */}
        <div className="lg:w-[378px] h-[550px] flex flex-col justify-around items-center bg-[#F8F8F8] rounded-[10px]">
          <div className=" ml-[30px] ">
            <h2 className="text-[40px] text-left">Saving</h2>
            <h3 className="text-[40px] text-left mt-[-20px]">accounts</h3>
            <p className="w-[310px] text-left text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <Image
            className="mr-[-33px]"
            src={Laptop}
            alt={Laptop}
            width={344}
            height={219}
          />
        </div>
        {/* Two End */}
        {/* Three Start */}
        <div className="lg:w-[378px] h-[550px] flex flex-col justify-around items-center bg-[#F8F8F8] rounded-[10px]">
          <div className=" ml-[30px] ">
            <h2 className="text-[40px] text-left">Instant</h2>
            <h3 className="text-[40px] text-left mt-[-20px]">transactions</h3>
            <p className="w-[310px] text-left text-[18px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <Image
            className=""
            src={Apple2}
            alt={Apple2}
            width={300}
            height={281}
          />
        </div>
        {/* Three End */}
      </div>
      {/* Bottom End */}
    </div>
  );
}
