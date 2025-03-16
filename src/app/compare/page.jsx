import React from "react";
import Link from "next/link";
import Image from "next/image";
import Compare from "@/assets/Compare.png";
import { GrTwitter } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import { LuArrowRight } from "react-icons/lu";
export default function page() {
  return (
    <div className="w-full mx-auto lg:w-[1238px] flex flex-col items-center mt-[100px] mb-[50px]">
      <Link
        href="/"
        className="bg-emerald-200 text-black px-[15px] py-[2px] rounded-[3px]"
      >
        App
      </Link>
      <h2 className="w-[300px] lg:w-[750px] text-[25px] lg:text-[64px] text-center">
        How To Start Using Banko For Your Startup
      </h2>
      <p className="w-[350px] lg:w-[500px] text-[18px] text-center mb-[20px] lg:mb-0">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Dui accumsan sit
        amet nulla facilisi morbi.
      </p>
      <Image
        className=" mx-auto lg:mt-[60px]"
        alt="Compare Image" // Updated alt text for accessibility
        src={Compare} // Use the imported image variable
        width="full"
        height={600}
      />
      {/* Descrive Start */}
      <div className="mt-[50px] mb-[50px] w-[350px] lg:w-[600px] flex flex-col items-center lg:items-start gap-[20px] ">
        <h3 className="text-[28px]">Et malesuada fames ac turpis</h3>
        <p className="text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
          blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio morbi
          quis commodo odio. Et malesuada fames ac turpis egestas sed tempus
          urna. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci
          a. Fringilla ut morbi tincidunt augue interdum. Ultrices in iaculis
          nunc sed augue lacus viverra.{" "}
        </p>
        <p className="text-[18px]">
          Erat imperdiet sed euismod nisi porta. Morbi blandit cursus risus at
          ultrices mi tempus imperdiet nulla. Cras sed felis eget velit aliquet
          sagittis. Amet commodo nulla facilisi nullam vehicula ipsum a arcu
          cursus. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus
          at augue. Blandit aliquam etiam erat velit scelerisque in dictum. In
          hac habitasse platea dictumst vestibulum rhoncus. Molestie ac feugiat
          sed lectus vestibulum.
        </p>
        <h3 className="text-[28px]">Nascetur ridiculus mus</h3>
        <p className="text-left text-[18px]">
          Sed vulputate odio ut enim blandit volutpat maecenas. Sagittis orci a
          scelerisque purus semper eget duis at. Porta lorem mollis aliquam ut
          porttitor leo a diam. In fermentum et sollicitudin ac orci phasellus
          egestas tellus. Mauris cursus mattis molestie a iaculis at erat
          pellentesque adipiscing. Nascetur ridiculus mus mauris vitae
          ultricies. Dui nunc mattis enim ut tellus. Duis convallis convallis
          tellus id interdum. Quis ipsum suspendisse ultrices gravida dictum
          fusce. Scelerisque mauris pellentesque pulvinar pellentesque.
          Tincidunt augue interdum velit euismod. Nibh tortor id aliquet lectus.
          Amet commodo nulla facilisi nullam. Vulputate ut pharetra sit amet
          aliquam id diam maecenas. Tellus pellentesque eu tincidunt tortor.
          Ultrices vitae auctor eu augue ut lectus arcu bibendum.
        </p>
      </div>
      {/* Descrive End */}
      {/* Social Start */}
      <div className="flex flex-col items-center gap-[15px]">
        <h3 className="text-[18px]">Share article</h3>
        <div className="flex gap-[15px]">
          <Link href="www.twitter.com">
            <GrTwitter className="bg-emerald-100 border-black border-[1px] rounded-full p-[7px] size-[35px]" />
          </Link>
          <Link href="www.facebook.com">
            <FaFacebook className="bg-emerald-100 border-black border-[1px] rounded-full p-[7px] size-[35px]" />
          </Link>
          <Link href="www.instagram.com">
            <FaLinkedin className="bg-emerald-100 border-black border-[1px] rounded-full p-[7px] size-[35px]" />
          </Link>
          <Link href="www.pinterest.com">
            <FaInstagram className="bg-emerald-100 border-black border-[1px] rounded-full p-[7px] size-[35px]" />
          </Link>
        </div>
      </div>
      {/* Social End */}
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
