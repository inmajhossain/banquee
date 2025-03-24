//For Loading Use Start (Step-1)
"use client";
import { useState, useEffect } from "react";
//For Loading Use End
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Help from "@/components/Help";
import OneApp from "@/components/OneApp";
import ChooseCard from "@/components/ChooseCard";
import OneBank from "@/components/OneBank";
import Application from "@/components/Application";

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
        <Hero />
        <Application />
        <OneBank />
        <ChooseCard />
        <OneApp />
        <Help />
      </div>
    </>
  );
}
