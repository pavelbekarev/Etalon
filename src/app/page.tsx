"use client";
import AboutBlock from "./Blocks/AboutBlock/AboutBlock";
import Slider from "./Blocks/Slider/Slider";
import Form from "./Blocks/Form/Form";
import PartnersBlock from "./Blocks/PartnersBlock/PartnersBlock";
// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap.bundle.js"
import { IntroBlockBg } from "./imgs/imgIndex/imgIndex";
import Footer from "./components/footer/Footer";
import AchievementsBlock from "./Blocks/achievementsBlock/AchievementsBlock";
import HistoryBlock from "./Blocks/historyBlock/HistoryBlock";
import NumBLock from "./Blocks/numBlock/NumBlock";
import "./page.scss";
import { useEffect, useState } from "react";
import { IntroBlock } from "./Blocks/introBlock/IntroBlock";

export default function Home() {
  const [userLogin, setUserLogin] = useState<string | null>(null);

  useEffect(() => {
    const storedLogin = localStorage.getItem("userLogin");
    if (storedLogin) {
      setUserLogin(storedLogin);
    }
  }, []);

  return (
    <>
    <IntroBlock
      imgChild={IntroBlockBg}
      txtChildAdditional="носки премиального качества с уникальным дизайном для вашего бизнеса"
      txtChild="Носочная фабрика «Эталон»"
    />
    <div className="container">
      <NumBLock />
      <HistoryBlock />
      <AboutBlock />
      <PartnersBlock />
      <AchievementsBlock />
      <Form />
      <Footer />
    </div>
    </>
  );
}
