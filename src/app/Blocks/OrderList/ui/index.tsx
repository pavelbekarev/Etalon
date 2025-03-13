import React, { useState } from "react";
import "../style.scss";
import { useCartStore } from "@/app/store/cartStore";

export const OrderList = () => {
  const [isOpen, setIsOpen] = useState(false); // Состояние модального окна
  const { orders } = useCartStore();

  return (
    <div className="orderList">
      <h2 className="orderList__title" onClick={() => setIsOpen(true)}>
        Мои заявки
      </h2>

      {/* Затемнение фона при открытом модальном окне */}
      {isOpen && (
        <div className="modal__overlay" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Модальное окно */}
      <div className={`modal ${isOpen ? "modal--open" : ""}`}>
        <button className="modal__close" onClick={() => setIsOpen(false)}>
          ✖
        </button>
        <h3>Мои заявки</h3>
        <div>
          {orders.map((order, key) => {
            return (
              <div key={key}>
                {order.products.map((item, key) => {
                  return <p key={key}>{item.name}</p>;
                })}
                <p>totalPrice: {order.totalPrice}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
