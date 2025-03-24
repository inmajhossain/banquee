//For Loading Use Start (Step-1)
"use client";
import { useState, useEffect } from "react";
//For Loading Use End
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
  //For Loading Use Start (Step-2)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingPage = async () => {
      setTimeout(() => {
        setLoading(false);
      }); // Simulate a loading delay
    };

    loadingPage();
  }, []);

  if (loading)
    return (
      <div className="mt-[150px] lg:mt-[350px] mx-auto w-[500px] h-[800px] flex gap-[30px] flex-col items-center">
        <div className="flex gap-[30px]">
          <div className="animate-spin h-10 w-10 rounded-full border-4 border-sky-900 border-b-transparent"></div>
          <div className="animate-spin h-10 w-10 rounded-full border-4 border-red-600 border-b-transparent"></div>
          <div className="animate-spin h-10 w-10 rounded-full border-4 border-orange-600 border-b-transparent"></div>
          <div className="animate-spin h-10 w-10 rounded-full border-4 border-black border-b-transparent"></div>
          <div className="animate-spin h-10 w-10 rounded-full border-4 border-indigo-600 border-b-transparent"></div>
        </div>
        <div>
          <h2 className="text-[30px] font-semibold text-indigo-500 text-center">
            Loading.......
          </h2>
        </div>
      </div>
    );
  //For Loading Use End
  return (
    //Custom font tektur from Global CSS
    <div className=" w-full mx-auto lg:w-[1200px] flex flex-col items-center lg:items-start justify-between mb-[150px]">
      <h2 className=" text-[64px] mx-auto mt-[50px]">Blog</h2>
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
          <Link href={"/blog/applicationapp"}>
            <Image
              className="mx-auto lg:mt-[60px]"
              alt="Image1"
              src={image1}
              width="378"
              height="378"
            />
          </Link>
          <h3 className=" text-black text-[28px]">
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
