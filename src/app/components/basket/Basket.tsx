"use client";

import { useCartStore } from "@/app/store/cartStore";
import React, { useEffect, useState } from "react";
import "./Basket.scss"; // Подключаем стили
import { TrashIcon } from "../TrashIcon";
import Image from "next/image";
import trashImg from "../../imgs/trashImg.svg";
import { SockImg } from "@/app/imgs/imgIndex/imgIndex";
import { BasketModel } from "./model";

export const Basket = () => {
  const { products, updateQuantity, removeProduct, clearCart } = useCartStore();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleDecreaseQuantity = (product: any) => {
    if (product.quantity === 1) {
      removeProduct(product.id);
    }

    updateQuantity(product.id, product.quantity - 1);
  };

  useEffect(() => {
    new BasketModel();
  }, []);

  useEffect(() => {
    var totalSum = 0;
    products.map((product) => {
      const a: number = product.price * product.quantity;
      totalSum += a;
    });

    setTotalPrice(totalSum);
  }, [products]);

  return (
    <div className="basket">
      {products.length > 0 && (
        <button className="basket__buttonClear" onClick={clearCart}>
          Очистить корзину
        </button>
      )}
      <div className="basket__items">
        {products.map((product: any) => (
          <div key={product.id} className="basket__items__item">
            <div className="basket__items__item__leftSide">
              <div className="basket__items__item__leftSide__imgContainer">
                <Image
                  className="basket__items__item__leftSide__imgContainer__img"
                  src={SockImg}
                  alt="Изображение товара"
                />
              </div>

              <div className="basket__items__item__leftSide__controls">
                <button
                  className={`basket__items__item__leftSide__controls__quantity ${
                    product.quantity === 1 &&
                    "basket__items__item__leftSide__controls__quantity--disabled"
                  }`}
                  onClick={() => handleDecreaseQuantity(product)}
                  disabled={product.quantity === 1}
                >
                  -
                </button>
                <span className="basket__items__item__leftSide__controls__quantityCount">
                  {product.quantity}
                </span>
                <button
                  className="basket__items__item__leftSide__controls__quantity"
                  onClick={() =>
                    updateQuantity(product.id, product.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
            </div>
            <div className="basket__items__item__rightSide">
              <div className="basket__items__item__rightSide__info">
                <p className="basket__items__item__rightSide__info__name basket__items__item__rightSide__text">
                  {product.name}
                </p>
                <p className="basket__items__item__rightSide__info__name basket__items__item__rightSide__text">
                  {product.article}
                </p>
              </div>
              <div className="basket__items__item__rightSide__bottom">
                <p className="basket__items__item__rightSide__bottom__price basket__items__item__rightSide__text">
                  {product.price} руб.
                </p>
                <button
                  className="basket__items__item__rightSide__bottom__remove"
                  onClick={(e) => {
                    e.preventDefault();
                    removeProduct(product.id);
                  }}
                >
                  <TrashIcon />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="basket__totalPrice">Итого: {totalPrice} руб.</p>
      <button
        data-js-order-button={JSON.stringify(products)}
        className="basket__orderBtn"
      >
        Оформить
      </button>
    </div>
  );
};
