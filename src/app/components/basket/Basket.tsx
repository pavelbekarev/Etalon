"use client";

import { useCartStore } from "@/app/store/cartStore";
import React, { useEffect, useState } from "react";
import "./Basket.scss"; // Подключаем стили
import { TrashIcon } from "../TrashIcon";
import Image from "next/image";
import trashImg from "../../imgs/trashImg.svg";
import { SockImg } from "@/app/imgs/imgIndex/imgIndex";
import { BasketModel } from "./model";
import { IOrder, IProduct } from "@/app/types/interface";

export const Basket = () => {
  const {
    products,
    orders,
    updateQuantity,
    removeProduct,
    clearCart,
    addOrder,
  } = useCartStore();
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);

  const handleDecreaseQuantity = (product: any) => {
    if (product.quantity === 0) {
      removeProduct(product.id);
    }

    updateQuantity(product.id, product.quantity - 1);
  };

  const handleIncreaseQuantity = (product: any) => {
    console.log("Кол-во до прибавления:", product.quantity);
    if (product.quantity === 100) return;
    updateQuantity(product.id, product.quantity++);
    console.log("Кол-во до прибавления:", product.quantity);
  };

  const handleChangeProductQuantity = (productId: any, callBack: Function) => {
    callBack();

    products.map((product) => {
      if (product.id === productId) {
        updateQuantity(productId, quantity);
      }
    });
  };

  useEffect(() => {
    var totalSum = 0;
    products.map((product) => {
      const a: number = product.price * product.quantity;
      totalSum += a;
    });

    setTotalPrice(totalSum);
  }, [products]);

  const sendToOrders = (products: string): void => {
    console.log(products);
    const totalProducts: IProduct[] = [];

    JSON.parse(products).map((product: any) => {
      const newProduct: IProduct = {
        id: product.id,
        name: product.name,
        article: product.article,
        price: product.price,
        quantity: product.quantity,
      };

      totalProducts.push(newProduct);
    });

    // TODO: в стор добавлять заявку
    const order: IOrder = {
      products: totalProducts,
      totalPrice: totalPrice,
    };
    console.log(order);

    addOrder(order);
    clearCart();
    console.log(orders);
  };

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
                    product.quantity < 1 &&
                    "basket__items__item__leftSide__controls__quantity--disabled"
                  }`}
                  onClick={() => handleDecreaseQuantity(product)}
                  disabled={product.quantity < 1}
                >
                  -
                </button>
                <input
                  name="quantity"
                  onChange={(e) =>
                    handleChangeProductQuantity(product.id, () =>
                      setQuantity(Number(e.target.value))
                    )
                  }
                  value={product.quantity}
                  type="range"
                />
                <p style={{ color: "#000" }}>{product.quantity}</p>
                <button
                  className="basket__items__item__leftSide__controls__quantity"
                  onClick={() => handleIncreaseQuantity(product)}
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
        onClick={() => sendToOrders(JSON.stringify(products))}
        data-js-order-button={JSON.stringify(products)}
        className="basket__orderBtn"
      >
        Оформить
      </button>
    </div>
  );
};
