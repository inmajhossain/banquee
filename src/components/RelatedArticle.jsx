import React from "react";
import Link from "next/link";
import Image from "next/image";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import { LuArrowRight } from "react-icons/lu";
export default function RelatedArticle() {
  return (
    <div className="w-full mx-auto lg:w-[1238px] flex flex-col items-center mt-[100px] mb-[50px]">
      {/* Related Article Start */}
      <div className="mt-[50px] lg:mt-[100px] border-t-1 py-[30px] w-full mx-auto lg:w-[1200px] flex flex-col lg:flex-row justify-between items-center">
        <h3 className="text-[28px] font-semibold">Related Article</h3>
        <div className="flex items-center gap-[10px] text-[#5BB5A2]">
          <h2>All Articles</h2>
          <LuArrowRight className="size-[20px]" />
        </div>
      </div>
      {/* Related Article Items Start */}
      <div className="w-full mx-auto lg:w-[1200px] flex flex-col lg:flex-row flex-wrap justify-between items-center gap-y-[50px] mb-[100px]">
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
      </div>
    </div>
  );
}
