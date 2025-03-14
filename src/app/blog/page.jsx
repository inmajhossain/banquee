import React from "react";
import Link from "next/link";
import Image from "next/image";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";

export default function page() {
  return (
    <div className="w-full mx-auto lg:w-[1200px] flex flex-col items-center lg:items-start justify-between mb-[150px]">
      <h2 className="text-[64px] mx-auto mt-[50px]">Blog</h2>
      <nav className="flex justify-between items-center gap-[10px] lg:mt-[50px] mb-[30px] lg-mb-0">
        <h3 className="">Categories</h3>
        <Link
          href="/blog/all"
          className="bg-[#F8F8F8] px-[10px] py-[2px] rounded-[3px]"
        >
          All
        </Link>
        <Link
          href="/blog/product"
          className="bg-[#F8F8F8] px-[10px] py-[2px] rounded-[3px]"
        >
          Product
        </Link>
        <Link
          href="/blog/technology"
          className="bg-[#F8F8F8] px-[10px] py-[2px] rounded-[3px]"
        >
          Technology
        </Link>
        <Link
          href="/blog/applicationapp"
          className="bg-[#F8F8F8] px-[10px] py-[2px] rounded-[3px]"
        >
          App
        </Link>
      </nav>
      {/* Blog Items Start */}
      <div className="w-full mx-auto lg:w-[1200px] flex flex-col lg:flex-row flex-wrap justify-between items-center gap-y-[50px]">
        {/* One Start */}
        <div className="w-[378px] h-[637px] flex flex-col justify-between gap-[10px]">
          <Image
            className="mx-auto lg:mt-[60px]"
            alt="Image1"
            src={image1}
            width="378"
            height="378"
          />
          <h3 className="text-[28px]">
            How To Start Using Banko For Your Startup
          </h3>
          <p className="text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            accumsan sit amet nulla facilisi morbi.
          </p>
          <div className="flex justify-items-start items-center gap-[10px]">
            <Link
              href="/blog/technology"
              className="bg-[#F8F8F8] px-[10px] py-[2px] rounded-[3px]"
            >
              Technology
            </Link>
            <Link
              href="/blog/applicationapp"
              className="bg-[#F8F8F8] px-[10px] py-[2px] rounded-[3px]"
            >
              App
            </Link>
          </div>
        </div>
        {/* Two Start */}
        <div className="w-[378px] h-[637px] flex flex-col justify-between gap-[10px]">
          <Image
            className="mx-auto lg:mt-[60px]"
            alt="Image2"
            src={image2}
            width="378"
            height="378"
          />
          <h3 className="text-[28px]">10 Things Nobody Told You About Banko</h3>
          <p className="text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            accumsan sit amet nulla facilisi morbi.
          </p>
          <div className="flex justify-items-start items-center gap-[10px]">
            <Link
              href="/blog/technology"
              className="bg-[#F8F8F8] px-[10px] py-[2px] rounded-[3px]"
            >
              Technology
            </Link>
          </div>
        </div>
        {/* Three Start */}
        <div className="w-[378px] h-[637px] flex flex-col justify-between gap-[10px]">
          <Image
            className="mx-auto lg:mt-[60px]"
            alt="Image3"
            src={image3}
            width="378"
            height="378"
          />
          <h3 className="text-[28px]">
            How To Start Using Banko For Your Startup
          </h3>
          <p className="text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            accumsan sit amet nulla facilisi morbi.
          </p>
          <div className="flex justify-items-start items-center gap-[10px]">
            <Link
              href="/blog/applicationapp"
              className="bg-[#F8F8F8] px-[10px] py-[2px] rounded-[3px]"
            >
              App
            </Link>
            <Link
              href="/blog/product"
              className="bg-[#F8F8F8] px-[10px] py-[2px] rounded-[3px]"
            >
              Product
            </Link>
          </div>
        </div>
        {/* Four Start */}
        <div className="w-[378px] h-[637px] flex flex-col justify-between gap-[10px]">
          <Image
            className="mx-auto lg:mt-[60px]"
            alt="Image4"
            src={image4}
            width="378"
            height="378"
          />
          <h3 className="text-[28px]">
            Why We Love Banko (And You Should, Too!)
          </h3>
          <p className="text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            accumsan sit amet nulla facilisi morbi.
          </p>
          <div className="flex justify-items-start items-center gap-[10px]">
            <Link
              href="/blog/product"
              className="bg-[#F8F8F8] px-[10px] py-[2px] rounded-[3px]"
            >
              Product
            </Link>
            <Link
              href="/blog/technology"
              className="bg-[#F8F8F8] px-[10px] py-[2px] rounded-[3px]"
            >
              Technology
            </Link>
          </div>
        </div>
        {/* Five Start */}
        <div className="w-[378px] h-[637px] flex flex-col justify-between gap-[10px]">
          <Image
            className="mx-auto lg:mt-[60px]"
            alt="Image5"
            src={image5}
            width="378"
            height="378"
          />
          <h3 className="text-[28px]">5 Principles Of Crypto Investing</h3>
          <p className="text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            accumsan sit amet nulla facilisi morbi.
          </p>
          <div className="flex justify-items-start items-center gap-[10px]">
            <Link
              href="/blog/applicationapp"
              className="bg-[#F8F8F8] px-[10px] py-[2px] rounded-[3px]"
            >
              App
            </Link>
          </div>
        </div>
        {/* Six Start */}
        <div className="w-[378px] h-[637px] flex flex-col justify-between gap-[10px]">
          <Image
            className="mx-auto lg:mt-[60px]"
            alt="Image6"
            src={image6}
            width="378"
            height="378"
          />
          <h3 className="text-[28px]">
            7 Things About Banko Your Friends Want To Know
          </h3>
          <p className="text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            accumsan sit amet nulla facilisi morbi.
          </p>
          <div className="flex justify-items-start items-center gap-[10px]">
            <Link
              href="/blog/technology"
              className="bg-[#F8F8F8] px-[10px] py-[2px] rounded-[3px]"
            >
              Technology
            </Link>
          </div>
        </div>

        {/* Six End */}
      </div>
      {/* Blog Items End */}
    </div>
  );
}
