import React, { useEffect } from "react";
import "./style.scss";
import { ConfirmModalWindowModel } from "./model";

export const ConfirmModal = () => {
  useEffect(() => {
    new ConfirmModalWindowModel({ componentForRender: ConfirmModal });
  }, []);

  return (
    <div className="modalWindowInstance__modal">
      <h1 className="modalWindowInstance__modal__text">
        Вы уверены, что хотите добавить этот товар в корзину?
      </h1>
      <div className="modalWindowInstance__modal__controls">
        <p
          data-js-modal-confirm={""}
          className="modalWindowInstance__modal__controls__btn"
        >
          Да
        </p>
        <p
          data-js-modal-decline={""}
          className="modalWindowInstance__modal__controls__btn"
        >
          Нет
        </p>
      </div>
    </div>
  );
};
