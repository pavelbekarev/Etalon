import ReactDOM from "react-dom/client";
import { getAttr } from "@/app/utils/getAttr";
import React from "react";
import { ModalManager } from "./modalManager";

export class ConfirmModalManager extends ModalManager {
  selectors: Object;

  componentForRender: any;

  constructor(componentForRender: any) {
    super();

    this.componentForRender = componentForRender;
    this.selectors = {
      modalInstance: "[data-js-modal-instance]",
      cartButton: "[data-js-cart-button]",
      confirmBtn: "[data-js-modal-confirm]",
    };

    this.bindEvents();
  }

  openModalWindow(props?: any): void {
    super.createModalWindowInstance();

    const targetNode = document.getElementById("modalInstance") as HTMLElement;
    this.renderModalWindow({ props: props, target: targetNode });
  }
  renderModalWindow({
    props,
    target,
  }: {
    props?: any;
    target: HTMLElement;
  }): void {
    const root = ReactDOM.createRoot(target);

    if (root) {
      /**
       * Указывается компонент, необходимый для отрисовки
       */
      root.render(React.createElement(this.componentForRender, props));
    }
  }

  closeModalWindow(): void {
    const modalInstance = document.querySelector(this.selectors.modalInstance);

    if (modalInstance) modalInstance.remove();
  }

  private bindEvents() {
    const root = document.querySelector("#root");
    const targetNode = document.querySelector(this.selectors.cartButton);
    const confirmBtnNode = document.querySelector(this.selectors.confirmBtn);

    /**
     * При клике на кнопку с атрибутом "data-js-cart-button"
     * вытаскиваем объект с информацией из атрибута
     */
    root?.addEventListener("click", (e) => {
      console.log(e.target);
      if (e.target === targetNode) {
        this.openModalWindow();
      }

      /**
       * Если id узла равен "modalInstance" - значит клик был вне модального окна
       */
      if (e.target?.id === "modalInstance") {
        this.closeModalWindow();
      }
    });
  }
}
