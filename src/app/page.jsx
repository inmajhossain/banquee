import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Help from "@/components/Help";
import OneApp from "@/components/OneApp";
import ChooseCard from "@/components/ChooseCard";
import OneBank from "@/components/OneBank";
import Application from "@/components/Application";

export default function Home() {
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
