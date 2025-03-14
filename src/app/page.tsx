'use client';
import AboutBlock from "./Blocks/AboutBlock/AboutBlock";
import Slider from "./Blocks/Slider/Slider";
import Form from "./Blocks/Form/Form";
import PartnersBlock from "./Blocks/PartnersBlock/PartnersBlock";
import IntroBlock from "./Blocks/introBlock/IntroBlock";
import { IntroBlockBg } from "./imgs/imgIndex/imgIndex";
import Footer from "./components/footer/Footer";
import dynamic from 'next/dynamic';
import AchievementsBlock from "./Blocks/achievementsBlock/AchievementsBlock";
import HistoryBlock from "./Blocks/historyBlock/HistoryBlock";
import NumBLock from "./Blocks/numBlock/NumBlock";

const Location = dynamic(() => import('@/app/Blocks/Location/Location'), { ssr: false });

export default function Home() {
  return (
    <>
    <IntroBlock
        imgChild={IntroBlockBg}
        txtChildAdditional="носки премиального качества с уникальным дизайном для вашего бизнеса"
        txtChild="Носочная фабрика «Эталон»" />
        <NumBLock />
        <HistoryBlock />
      <AboutBlock />
      <PartnersBlock />
      <AchievementsBlock />
      <Location />
      <Form />
      <Footer />
    </>
  );
}
