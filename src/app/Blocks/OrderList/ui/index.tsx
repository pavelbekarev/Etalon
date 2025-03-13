import React, { useState } from "react";
import "../style.scss";

export const OrderList = () => {
  const [isOpen, setIsOpen] = useState(false); // Состояние модального окна

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
        <h3>Ваши заявки</h3>
        <p>Здесь будут отображаться ваши заказы.</p>
      </div>
    </div>
  );
};
