'use client';
import IntroBlock from "@/app/Blocks/introBlock/IntroBlock";
import { SocksBanner } from "@/app/imgs/imgIndex/imgIndex";
import React from "react";
import NewProductsBlock from "../Blocks/newProductsBlock/NewProductsBlock";

const CataloguePage = () => {
  return (
    <div>
      <IntroBlock
        imgChild={SocksBanner}
        txtChildAdditional=""
        txtChild="При заказе от 100 000 рублей скидка 7% от прайса"
      ></IntroBlock>
      <NewProductsBlock></NewProductsBlock>
    </div>
  );
};

export default CataloguePage;
