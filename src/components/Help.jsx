import Link from "next/link";
import React from "react";
import { IoMdCall } from "react-icons/io";
import { RiMessageFill } from "react-icons/ri";
import { LuArrowRight } from "react-icons/lu";

export default function () {
  return (
    <div className="bg-white lg:w-[1200px] mx-auto flex flex-col lg:flex-row  justify-around p-[10px] mb-[50px] ">
      {/* Left Side */}
      <div className="lg:w-[600px] w-full flex-col flex item-center   ">
        <div>
          <h2 className=" text-[40px] font-semibold text-center lg:text-left">
            Need help?
          </h2>
        </div>

        <div className="flex lg:flex-col w-[390px] mx-auto lg:mx-0 ">
          <div className="mx-auto lg:ml-0 flex items-center mt-[10px] gap-[15px]">
            <Link href="tel:+49176123456">
              <IoMdCall className="text-[#5BB5A2] size-[40px] bg-[#E8F2EE]  p-[10px] rounded-full" />
            </Link>
            <div>
              <Link href="tel:+49176123456">+49 176 123 456</Link>
              <p>Support Hotline</p>
            </div>
          </div>
          <div className="mx-auto lg:ml-0 flex items-center mt-[10px] gap-[15px]">
            <Link href="mailto:help@banquee.com">
              <RiMessageFill className="text-[#5BB5A2] size-[40px] bg-[#E8F2EE]  p-[10px] rounded-full" />
            </Link>
            <div>
              <Link href="">help@banquee.com</Link>
              <p>Support Email</p>
            </div>
          </div>
        </div>
        <div className="mx-auto lg:ml-0 flex items-center gap-[20px] mt-[30px] text-[#5BB5A2] font-semibold">
          <h2>Support</h2>
          <LuArrowRight className="size-[25px]" />
        </div>
      </div>
      {/* Right Side */}
      <div>
        {/*<!-- Component: Basic accordion --> */}
        <section className="w-full lg:w-[600px] divide-y rounded divide-slate-200 ">
          <details className="p-4 group" open>
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              How do I open an Banko account?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac01 desc-ac01"
              >
                <title id="title-ac01">Open icon</title>
                <desc id="desc-ac01">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              qui at architecto quod modi eum recusandae doloremque. Quod, illo
              blanditiis? Architecto nemo dolores amet. In adipisci nesciunt ad
              voluptatibus ducimus obcaecati iusto optio qui voluptas beatae
              recusandae, minima aspernatur libero nemo animi vitae accusamus
              hic eos veniam quidem laudantium ullam.
            </p>
          </details>
          <details className="p-4 group">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              How do I order a new card?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac02 desc-ac02"
              >
                <title id="title-ac02">Open icon</title>
                <desc id="desc-ac02">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              earum repellat necessitatibus porro culpa. Molestias architecto
              quibusdam quia necessitatibus ad veniam facilis, qui minus
              recusandae, animi cum natus non dignissimos.
            </p>
          </details>
          <details className="p-4 group">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              How to change my account limits?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac03 desc-ac03"
              >
                <title id="title-ac03">Open icon</title>
                <desc id="desc-ac03">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem deleniti reiciendis incidunt asperiores
              praesentium! Sit inventore repellat sequi dolorem cupiditate
              maxime? Delectus nihil omnis illum ullam saepe tenetur quibusdam
              totam?
            </p>
          </details>
          <details className="p-4 group">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              How does Banko premium works?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac04 desc-ac04"
              >
                <title id="title-ac04">Open icon</title>
                <desc id="desc-ac04">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis
              natoque penatibus et magnis dis parturient.
            </p>
          </details>
          <details className="p-4 group">
            <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
              Can I have two Banko accounts?
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-labelledby="title-ac04 desc-ac04"
              >
                <title id="title-ac04">Open icon</title>
                <desc id="desc-ac04">
                  icon that represents the state of the summary
                </desc>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </summary>
            <p className="mt-4 text-slate-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
              accumsan sit amet nulla facilisi morbi. Eget gravida cum sociis
              natoque penatibus et magnis dis parturient.
            </p>
          </details>
        </section>
        {/*<!-- End Basic accordion --> */}
      </div>
    </div>
  );
}
