import React from "react";
import App from "@/assets/app.png";
import Image from "next/image";
import badge from "@/assets/badge.svg";
import AppleStore from "@/assets/AppleStore.png";
import GoogleStore from "@/assets/GoogleStore.png";

export default function OneApp() {
  return (
    <div className="mx-auto w-full pt-[43px] lg:w-[1200px] lg:h-[600px] bg-[#5BB5A2] flex flex-col lg:flex-row gap-[50px] lg:gap-0 justify-around rounded-2xl mb-[150px]">
      {/* Left Side: Content and Features */}
      <div className="lg:w-[540px] text-center lg:text-left flex flex-col items-center lg:items-start gap-[10px] mt-[30px] text-white">
        <h2 className="text-[64px]">One app.</h2>
        <h2 className="text-[64px] mt-[-40px]">One banking.</h2>
        <p className="text-[18px] w-[350px] md:w-[600px] lg:w-[600px]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet aperiam
          excepturi facilis quasi delectus deleniti.
        </p>

        {/* Features List */}
        <div className="flex gap-[50px]">
          {/* Left Column of Features */}
          <div>
            {["Instant transactions", "Saving accounts"].map((feature) => (
              <FeatureItem key={feature} feature={feature} />
            ))}
          </div>
          {/* Right Column of Features */}
          <div>
            {["Payments worldwide", "100% mobile banking"].map((feature) => (
              <FeatureItem key={feature} feature={feature} />
            ))}
          </div>
        </div>

        {/* App Store Links */}
        <div className="flex gap-[20px] mt-[20px]">
          <Image src={AppleStore} width={150} height={50} alt="Apple Store" />
          <Image src={GoogleStore} width={150} height={50} alt="Google Store" />
        </div>
      </div>

      {/* Right Side: App Image */}
      <div>
        <Image
          className="mx-auto lg:mt-[60px]"
          alt="App Image"
          src={App}
          width="380"
          height="350"
        />
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
