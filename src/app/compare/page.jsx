import Image from "next/image";
import Card1 from "@/assets/Card1.png";
import Card2 from "@/assets/Card2.png";
import Card3 from "@/assets/Card3.png";
import Card5 from "@/assets/card5.png";
import { MdOutlineCheck } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import {
  RiBankLine,
  RiCopperDiamondLine,
  RiLineChartLine,
  RiMailUnreadLine,
  RiMessageFill,
  RiPhoneFill,
  RiSafe2Fill,
  RiSmartphoneLine,
} from "react-icons/ri";
import Link from "next/link";
import { RiBankCard2Line } from "react-icons/ri";
import { RiRefundLine } from "react-icons/ri";
import { RiWifiLine } from "react-icons/ri";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { RiGlobalLine } from "react-icons/ri";

export default function page() {
  return (
    <div className="w-full mx-auto mb-[50px]">
      {/* Section One Start */}
      <div className="w-full mx-auto lg:py-0 lg:h-[472px]  bg-[#E8F2EE] flex flex-col lg:flex-row  items-center lg:items-end lg:justify-around mb-0 gap-[20px] lg:gap-0">
        <div className="flex flex-col text-center lg:text-left py-[25px] lg:py-0">
          <h3 className="text-[20px] ">Compare Cards</h3>
          <h2 className="lg:mb-[170px] w-full lg:w-[500px] text-[28px] lg:text-[80px] lg:leading-[80px] font-semibold ">
            The ideal card for you
          </h2>
        </div>
        <div>
          <Image
            className=" mx-auto lg:mt-[60px] w-[350px] h-[230px] lg:w-[512px] lg:h-[380px]"
            alt="Compare Image" // Updated alt text for accessibility
            src={Card5} // Use the imported image variable
            width="512"
            height="574"
          />
        </div>
      </div>
      {/* Section One End */}

      {/* Section Two Start */}
      <div className="lg:w-[1400px] mx-auto mt-[80px] mb-[50px] ">
        <div className="lg:w-[1000px] mx-auto lg:mr-0 flex flex-col lg:flex-row gap-[50px] lg:gap-0 justify-between lg:mb-[50px] ">
          {/* One Start*/}
          <div className="w-[290px] mx-auto flex flex-col gap-[25px] items-center">
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
            <Image src={Card1} alt={Card1} width={355} height={213} />
            <button className="w-[290px] h-[39px] text-white bg-[#5BB5A2] rounded-[5px]">
              Get started
            </button>
          </div>
          {/* One End*/}
          {/* Two Start*/}
          <div className="w-[290px] mx-auto flex flex-col gap-[25px] items-center ">
            <h3 className="font-semibold text-[20px]">Basic </h3>
            <h2 className="text-[40px] font-semibold mt-[-20px] mb-[-30px]">
              $5 <span className="font-normal text-[20px]">per month</span>
            </h2>
            <p className="w-[220px] text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <Image src={Card2} alt={Card2} width={355} height={213} />
            <button className="w-[290px] h-[39px] text-white bg-[#5BB5A2] rounded-[5px]">
              Get started
            </button>
          </div>
          {/* Two End*/}
          {/* Three Start*/}
          <div className="w-[290px] mx-auto flex flex-col gap-[25px] items-center ">
            <h3 className="font-semibold text-[20px]">Basic </h3>
            <h2 className="text-[40px] font-semibold mt-[-20px] mb-[-30px]">
              $10 <span className="font-normal text-[20px]">per month</span>
            </h2>
            <p className="w-[220px] text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <Image src={Card3} alt={Card3} width={355} height={213} />
            <button className="w-[290px] h-[39px] text-white bg-[#5BB5A2] rounded-[5px]">
              Get started
            </button>
          </div>
          {/* Three End*/}
        </div>
      </div>

      {/* Section Two End */}
      {/* Section Three Start */}
      <div className="lg:w-[1400px] mx-auto font-semibold">
        {/* First Start */}
        <div className="mt-[100px] mb-[90px]">
          {/* First Up */}
          <div>
            <h2 className="text-[18px] text-center lg:text-left">
              Credit Card
            </h2>
          </div>
          {/* First Down ----- 01 Start */}
          <div className=" lg:w-[1400px] mx-auto  border-t-[1px] py-[20px] border-black flex lg:flex-row  items-center justify-between px-[10px] lg:px-0 ">
            {/* First Down One */}
            <div className="w-[170px] lg:w-[336px] flex items-center gap-[15px]">
              <Link href="#">
                <RiBankCard2Line className="hidden lg:flex text-[#5BB5A2] size-[30px] lg:size-[50px] bg-[#E8F2EE]  p-[10px] rounded-full" />
              </Link>
              <div>
                <h3 className="text-[18px]">Physical Card</h3>
                <p className="text-[9px] lg:text-[14px] font-normal">
                  Diam in arcu cursus euismod
                </p>
              </div>
            </div>
            {/* First Down Two */}
            <div className="w-[73px] lg:w-[290px] ">
              <h3 className="text-center text-[16px]">Optional</h3>
            </div>
            {/* First Down Three */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
            {/* First Down Four */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
          </div>
          {/* First Down ----- 01 End */}
          {/* First Down ----- 02 Start */}
          <div className=" lg:w-[1400px] mx-auto  border-t-[1px] py-[20px] border-black flex lg:flex-row  items-center justify-between px-[10px] lg:px-0 ">
            {/* First Down -2- One */}
            <div className="w-[170px] lg:w-[336px] flex items-center gap-[15px]">
              <Link href="#">
                <RiRefundLine className=" hidden lg:flex text-[#5BB5A2] size-[30px] lg:size-[50px] bg-[#E8F2EE]  p-[10px] rounded-full" />
              </Link>
              <div>
                <h3 className="text-[18px]">Virtual Card</h3>
                <p className="text-[9px] lg:text-[14px] font-normal">
                  Diam in arcu cursus euismod
                </p>
              </div>
            </div>
            {/* First Down -2- Two */}
            <div className="w-[73px] lg:w-[290px] ">
              <h3 className="text-center text-[16px]">Optional</h3>
            </div>
            {/* First Down -2- Three */}
            <div className="w-[73px] lg:w-[290px] ">
              <h3 className="text-center text-[16px]">Up to 2</h3>
            </div>
            {/* First Down -2- Four */}
            <div className="w-[73px] lg:w-[290px] ">
              <h3 className="text-center text-[16px]">Unlimited</h3>
            </div>
          </div>
          {/* First Down ----- 02 End */}
          {/* First Down ----- 03 Start */}
          <div className=" lg:w-[1400px] mx-auto  border-t-[1px] py-[20px] border-black flex lg:flex-row  items-center justify-between px-[10px] lg:px-0 ">
            {/* First Down -3- One */}
            <div className="w-[170px] lg:w-[336px] flex items-center gap-[15px]">
              <Link href="#">
                <RiWifiLine className=" hidden lg:flex text-[#5BB5A2] size-[30px] lg:size-[50px] bg-[#E8F2EE]  p-[10px] rounded-full" />
              </Link>
              <div>
                <h3 className="text-[18px]">Contactless Payments</h3>
                <p className="text-[9px] lg:text-[14px] font-normal">
                  Diam in arcu cursus euismod
                </p>
              </div>
            </div>
            {/* First Down -3- Two */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
            {/* First Down -3- Three */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
            {/* First Down -3- Four */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
          </div>
          {/* First Down ----- 03 End */}
          {/* First Down ----- 04 Start */}
          <div className=" lg:w-[1400px] mx-auto  border-t-[1px] py-[20px] border-black flex lg:flex-row  items-center justify-between px-[10px] lg:px-0 ">
            {/* First Down -4- One */}
            <div className="w-[170px] lg:w-[336px] flex items-center gap-[15px]">
              <Link href="#">
                <RiMoneyEuroCircleLine className=" hidden lg:flex text-[#5BB5A2] size-[30px] lg:size-[50px] bg-[#E8F2EE]  p-[10px] rounded-full" />
              </Link>
              <div>
                <h3 className="text-[18px]">Mobile Payments</h3>
                <p className="text-[9px] lg:text-[14px] font-normal">
                  Diam in arcu cursus euismod
                </p>
              </div>
            </div>
            {/* First Down -4- Two */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
            {/* First Down -4- Three */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
            {/* First Down -4- Four */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
          </div>
          {/* First Down ----- 04 End */}
        </div>
        {/* First End */}
        {/* Second Start */}
        <div>
          {/* First Up */}
          <div>
            <h2 className="text-[18px] text-center lg:text-left">
              Bank Account
            </h2>
          </div>
          {/* First Down ----- 01 Start */}
          <div className=" lg:w-[1400px] mx-auto  border-t-[1px] py-[20px] border-black flex lg:flex-row  items-center justify-between px-[10px] lg:px-0 ">
            {/* First Down One */}
            <div className="w-[170px] lg:w-[336px] flex items-center gap-[15px]">
              <Link href="#">
                <RiGlobalLine className="hidden lg:flex text-[#5BB5A2] size-[30px] lg:size-[50px] bg-[#E8F2EE]  p-[10px] rounded-full" />
              </Link>
              <div>
                <h3 className="text-[18px]">Free Payments Worldwide</h3>
                <p className="text-[9px] lg:text-[14px] font-normal">
                  Diam in arcu cursus euismod
                </p>
              </div>
            </div>
            {/* First Down Two */}
            <div className="w-[73px] lg:w-[290px] ">
              <h3 className="text-center text-[16px]">-</h3>
            </div>
            {/* First Down Three */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
            {/* First Down Four */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
          </div>
          {/* First Down ----- 01 End */}
          {/* First Down ----- 02 Start */}
          <div className=" lg:w-[1400px] mx-auto  border-t-[1px] py-[20px] border-black flex lg:flex-row  items-center justify-between px-[10px] lg:px-0 ">
            {/* First Down -2- One */}
            <div className="w-[170px] lg:w-[336px] flex items-center gap-[15px]">
              <Link href="#">
                <RiBankLine className=" hidden lg:flex text-[#5BB5A2] size-[30px] lg:size-[50px] bg-[#E8F2EE]  p-[10px] rounded-full" />
              </Link>
              <div>
                <h3 className="text-[18px]">Free ATM withdrawls</h3>
                <p className="text-[9px] lg:text-[14px] font-normal">
                  Diam in arcu cursus euismod
                </p>
              </div>
            </div>
            {/* First Down -2- Two */}
            <div className="w-[73px] lg:w-[290px] ">
              <h3 className="text-center text-[16px]">2</h3>
            </div>
            {/* First Down -2- Three */}
            <div className="w-[73px] lg:w-[290px] ">
              <h3 className="text-center text-[16px]">5</h3>
            </div>
            {/* First Down -2- Four */}
            <div className="w-[73px] lg:w-[290px] ">
              <h3 className="text-center text-[16px]">10</h3>
            </div>
          </div>
          {/* First Down ----- 02 End */}
          {/* First Down ----- 03 Start */}
          <div className=" lg:w-[1400px] mx-auto  border-t-[1px] py-[20px] border-black flex lg:flex-row  items-center justify-between px-[10px] lg:px-0 ">
            {/* First Down -3- One */}
            <div className="w-[170px] lg:w-[336px] flex items-center gap-[15px]">
              <Link href="#">
                <RiSmartphoneLine className=" hidden lg:flex text-[#5BB5A2] size-[30px] lg:size-[50px] bg-[#E8F2EE]  p-[10px] rounded-full" />
              </Link>
              <div>
                <h3 className="text-[18px]">Mobile Banking</h3>
                <p className="text-[9px] lg:text-[14px] font-normal">
                  Diam in arcu cursus euismod
                </p>
              </div>
            </div>
            {/* First Down -3- Two */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
            {/* First Down -3- Three */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
            {/* First Down -3- Four */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
          </div>
          {/* First Down ----- 03 End */}
        </div>
        {/* Second End */}
        {/* Third Start */}
        <div className="mt-[95px]">
          {/* First Up */}
          <div>
            <h2 className="text-[18px] text-center lg:text-left">
              Extra Features
            </h2>
          </div>
          {/* First Down ----- 01 Start */}
          <div className=" lg:w-[1400px] mx-auto  border-t-[1px] py-[20px] border-black flex lg:flex-row  items-center justify-between px-[10px] lg:px-0 ">
            {/* First Down One */}
            <div className="w-[170px] lg:w-[336px] flex items-center gap-[15px]">
              <Link href="#">
                <RiSafe2Fill className="hidden lg:flex text-[#5BB5A2] size-[30px] lg:size-[50px] bg-[#E8F2EE]  p-[10px] rounded-full" />
              </Link>
              <div>
                <h3 className="text-[18px]">Saving Accounts</h3>
                <p className="text-[9px] lg:text-[14px] font-normal">
                  Diam in arcu cursus euismod
                </p>
              </div>
            </div>
            {/* First Down Two */}
            <div className="w-[73px] lg:w-[290px] ">
              <h3 className="text-center text-[16px]">2</h3>
            </div>
            {/* First Down Three */}
            <div className="w-[73px] lg:w-[290px] ">
              <h3 className="text-center text-[16px]">5</h3>
            </div>
            {/* First Down Four */}
            <div className="w-[73px] lg:w-[290px] ">
              <h3 className="text-center text-[16px]">Unlimited</h3>
            </div>
          </div>
          {/* First Down ----- 01 End */}
          {/* First Down ----- 02 Start */}
          <div className=" lg:w-[1400px] mx-auto  border-t-[1px] py-[20px] border-black flex lg:flex-row  items-center justify-between px-[10px] lg:px-0 ">
            {/* First Down -2- One */}
            <div className="w-[170px] lg:w-[336px] flex items-center gap-[15px]">
              <Link href="#">
                <RiLineChartLine className=" hidden lg:flex text-[#5BB5A2] size-[30px] lg:size-[50px] bg-[#E8F2EE]  p-[10px] rounded-full" />
              </Link>
              <div>
                <h3 className="text-[18px]">Advanced Statistics</h3>
                <p className="text-[9px] lg:text-[14px] font-normal">
                  Diam in arcu cursus euismod
                </p>
              </div>
            </div>
            {/* First Down -2- Two */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
            {/* First Down -2- Three */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
            {/* First Down -2- Four */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
          </div>
          {/* First Down ----- 02 End */}
          {/* First Down ----- 03 Start */}
          <div className=" lg:w-[1400px] mx-auto  border-t-[1px] py-[20px] border-black flex lg:flex-row  items-center justify-between px-[10px] lg:px-0 ">
            {/* First Down -3- One */}
            <div className="w-[170px] lg:w-[336px] flex items-center gap-[15px]">
              <Link href="#">
                <RiCopperDiamondLine className=" hidden lg:flex text-[#5BB5A2] size-[30px] lg:size-[50px] bg-[#E8F2EE]  p-[10px] rounded-full" />
              </Link>
              <div>
                <h3 className="text-[18px]">Premium Parnter Offers</h3>
                <p className="text-[9px] lg:text-[14px] font-normal">
                  Diam in arcu cursus euismod
                </p>
              </div>
            </div>
            {/* First Down -3- Two */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
            {/* First Down -3- Three */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
            {/* First Down -3- Four */}
            <div className="w-[73px] lg:w-[290px] flex items-center justify-center  ">
              <Link href="#">
                <MdOutlineCheck className="text-[#5BB5A2] size-[24px] bg-[#E8F2EE]  p-[5px] rounded-full" />
              </Link>
            </div>
          </div>
          {/* First Down ----- 03 End */}
        </div>
        {/* Third End */}
      </div>
      {/* Section Three End */}
      {/* Section Four Start */}
      <div className="mt-[25px] lg:mt-[95px] lg:w-[1200px] mx-auto lg:h-[163px] bg-[#5BB5A2] flex flex-col lg:flex-row justify-between lg:justify-around items-center px-[20px] py-[50px] lg:py-0 gap-[50px] lg:gap-0 lg:rounded-[8px]">
        {/* One */}
        <div className="text-white">
          <h3 className="text-[28px]  ">Still have questions?</h3>
          <p className="text-[18px] text-center lg:text-left">
            {" "}
            We are here to help.
          </p>
        </div>
        {/* Two */}
        <div className="lg:w-[751px] flex flex-col lg:flex-row justify-between items-center gap-[25px] lg:gap-0">
          <div className="lg:w-[550px] flex gap-[25px] justify-between">
            <div className="mx-auto flex items-center gap-[15px]">
              <Link className="text-white" href="tel:+49176123456">
                <RiPhoneFill className="text-[#5BB5A2] size-[40px] bg-[#E8F2EE]  p-[10px] rounded-full" />
              </Link>
              <div>
                <Link className="text-white" href="tel:+49176123456">
                  +49 176 123 456
                </Link>
                <p className="text-white">Support Hotline</p>
              </div>
            </div>
            <div className="mx-auto  flex items-center gap-[15px]">
              <Link href="mailto:help@banquee.com">
                <RiMailUnreadLine className="text-[#5BB5A2] size-[40px] bg-[#E8F2EE]  p-[10px] rounded-full" />
              </Link>
              <div>
                <Link href="" className="text-white">
                  help@banquee.com
                </Link>
                <p className="text-white">Support Email</p>
              </div>
            </div>
          </div>
          <div>
            <button className="w-[148px] h-[50px]  text-[18px] bg-black py-[10px] text-white flex px-[20px] rounded-[6px]">
              Chat with us
            </button>
          </div>
        </div>
      </div>
      {/* Section Four End */}
    </div>
  );
}
