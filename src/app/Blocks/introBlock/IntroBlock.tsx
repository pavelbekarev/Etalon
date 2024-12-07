import React from "react";
import {
  Logo,
  Search,
  User,
} from "@/app/imgs/imgIndex/imgIndex";
import Image from "next/image";
import { IHeader } from "@/app/types/interface";
import Basket from "@/app/components/basket/Basket";
import "./IntroBlock.scss";

const IntroBlock = ({ imgChild, txtChild, txtChildAdditional }: IHeader) => {
  const MenuItemAnimationVariant = {
    animate: { width: 30 },
  };

  return (
    <div className="HeaderBlock">
      <div className="HeaderBlock_container">
        <div className="HeaderBlock_header">
          <div className="HeaderBlock_header_logo">
            <Image src={Logo} alt="" />
          </div>
          <div className="HeaderBlock_header_navigation">
            
          <div className="HeaderBlock_header_navigation_catalogue">
              <div className="HeaderBlock_header_navigation_catalogue_txt">
                Каталог
              </div>
            </div>
            <div className="HeaderBlock_header_navigation_img">
              <Image src={User} alt=""></Image>
            </div>

            <div className="HeaderBlock_header_navigation_img">
              <Basket></Basket>
            </div>
            <div className="HeaderBlock_header_navigation_img">
              <Image src={Search} alt=""></Image>
            </div>
          </div>
        </div>
        <div className="HeaderBlock_main">
          <div className="HeaderBlock_main_txt">
            {txtChild}
            <div className="HeaderBlock_main_txt_additional">
              {txtChildAdditional}
            </div>
          </div>

          <button>Посмотреть товары</button>
        </div>
      </div>
    </div>
  );
};

export default IntroBlock;
