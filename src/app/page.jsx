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
    <>
      <div>
        <HeroNew />
        <OneBanking />
        <SendReceived />
        <Notification />
        <Seemless />
        <PerfectCard />
        <OneApp />
        <Help />
        <RelatedArticle />
      </div>
    </>
  );
}
