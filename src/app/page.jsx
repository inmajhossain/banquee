//For Loading Use Start (Step-1)
"use client";
import { useState, useEffect } from "react";
//For Loading Use End

import Help from "@/components/Help";
import OneApp from "@/components/OneApp";
import RelatedArticle from "@/components/RelatedArticle";
import PerfectCard from "@/components/PerfectCard";
import Seemless from "@/components/Seemless";
import Notification from "@/components/Notification";

import HeroNew from "@/components/HeroNew";
import OneBanking from "@/components/OneBanking";
import SendReceived from "@/components/SendReceived";
import Organize from "@/components/Organize";
import Testimonials from "@/components/Testimonials";
export default function Home() {
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
      <div className="flex flex-col items-center gap-[30px] mx-auto mt-[150px] lg:mt-[350px] w-[500px] h-[800px]">
        <div className="flex gap-[30px]">
          <div className="border-4 border-sky-900 border-b-transparent rounded-full w-10 h-10 animate-spin"></div>
          <div className="border-4 border-red-600 border-b-transparent rounded-full w-10 h-10 animate-spin"></div>
          <div className="border-4 border-orange-600 border-b-transparent rounded-full w-10 h-10 animate-spin"></div>
          <div className="border-4 border-b-transparent border-black rounded-full w-10 h-10 animate-spin"></div>
          <div className="border-4 border-indigo-600 border-b-transparent rounded-full w-10 h-10 animate-spin"></div>
        </div>
        <div>
          <h2 className="font-semibold text-[30px] text-indigo-500 text-center">
            Loading.......
          </h2>
        </div>
      </div>
    );
  //For Loading Use End
  return (
    <>
      <div>
        <HeroNew />
        <OneBanking />
        <SendReceived />
        <Organize />
        <Notification />
        <Seemless />
        <PerfectCard />
        <Testimonials />
        <OneApp />
        <Help />
        <RelatedArticle />
      </div>
      {/* <div>Test</div> */}
    </>
  );
}
