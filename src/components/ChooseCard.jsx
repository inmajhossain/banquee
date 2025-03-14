import React from "react";
import Image from "next/image";
import Card1 from "@/assets/Card1.png";
import Card2 from "@/assets/Card2.png";
import Card3 from "@/assets/Card3.png";
export default function ChooseCard() {
  return (
    <div className="w-full  mx-auto lg:w-[1200px] lg:h-[730px] flex flex-col items-center gap-[50px] lg:gap-0 justify-around mb-[100px]">
      {/* Top Start */}
      <div className="text-center">
        <h3>Accounts</h3>
        <h2 className="text-[40px] lg:text-[64px]">Choose your card</h2>
        <p className="text-[16px] w-[350px] mx-auto">
          Senectus et netus et malesuada fames ac turpis. Sagittis vitae et leo
          duis ut diam.
        </p>
      </div>
      {/* Top End */}
      {/* Bottom Start */}
      <div className="flex flex-col lg:flex-row gap-[50px] lg:gap-0 justify-between ">
        {/* One Start*/}
        <div className="flex flex-col gap-[25px] items-center w-[400px]">
          <h3 className="font-semibold text-[20px]">
            Basic{" "}
            <span className="text-[#5BB5A2] text-[15px] px-[5px] py-[2px] rounded-[4px] bg-[#E8F2EE]">
              Popular
            </span>
          </h3>
          <h2 className="text-[40px] font-semibold mt-[-20px] mb-[-30px]">
            Free
          </h2>
          <p className="w-[220px] text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <Image src={Card1} width={355} height={213} />
          <button className="w-[355px] h-[39px] text-white bg-[#5BB5A2] rounded-[5px]">
            Get started
          </button>
        </div>
        {/* One End*/}
        {/* Two Start*/}
        <div className="flex flex-col gap-[25px] items-center w-[400px]">
          <h3 className="font-semibold text-[20px]">Basic </h3>
          <h2 className="text-[40px] font-semibold mt-[-20px] mb-[-30px]">
            $5 <span className="font-normal text-[20px]">per month</span>
          </h2>
          <p className="w-[220px] text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <Image src={Card2} width={355} height={213} />
          <button className="w-[355px] h-[39px] text-white bg-[#5BB5A2] rounded-[5px]">
            Get started
          </button>
        </div>
        {/* Two End*/}
        {/* Three Start*/}
        <div className="flex flex-col gap-[25px] items-center w-[400px]">
          <h3 className="font-semibold text-[20px]">Basic </h3>
          <h2 className="text-[40px] font-semibold mt-[-20px] mb-[-30px]">
            $10 <span className="font-normal text-[20px]">per month</span>
          </h2>
          <p className="w-[220px] text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
          <Image src={Card3} width={355} height={213} />
          <button className="w-[355px] h-[39px] text-white bg-[#5BB5A2] rounded-[5px]">
            Get started
          </button>
        </div>
        {/* Three End*/}
      </div>
      {/* Bottom End */}
    </div>
  );
}
