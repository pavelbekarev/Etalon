"use client";
import React, { useEffect, useState } from "react";
import "./Card.scss";
import Image from "next/image";
import { CardBasket, SockImg } from "@/app/imgs/imgIndex/imgIndex";

import { article } from "framer-motion/client";
import { iCard } from "@/app/types/interface";
import { CardModel } from "./model";

const Card = ({ id, name, article, price }: iCard) => {
  const cartData = JSON.stringify({ id, name, article, price });

  /**
   * Используется атрибут "data-js-cart-button" для взаимодействия через modalManager.
   * При клике на кнопку с атрибутом "data-js-cart-button" будет открываться модальное окно
   */
  return (
    <div className="Card_container" data-js-card-id={id} key={id}>
      <Image src={SockImg} alt="" />
      <div className="Card_container_main">
        <div className="Card_container_main_name">{name}</div>
        <div className="Card_container_main_bottom">
          <div className="Card_container_main_bottom_left">
            <div className="Card_container_main_bottom_left_id">
              Арт {article}
            </div>
            <div className="Card_container_main_bottom_left_price">
              {price} ₽
            </div>
          </div>

          <Image
            data-js-cart-button={cartData}
            className="Card_container_main_bottom_left_price_btn"
            src={CardBasket}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
