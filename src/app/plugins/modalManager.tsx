import ReactDOM from "react-dom/client";
import { getAttr } from "../utils/getAttr";
import "../components/ModalWindow/style.scss";
import { ModalWindow } from "../components/ModalWindow";
import React from "react";

/**
 * Класс для создания универсальных модальных окон с отображением компонента.
 * TODO: не доделан.
 */
export class ModalManager {
  /**
   * Информация для отображения в модальном окне
   */
  infoForModal: any;

  componentForRender: React.ElementType;

  static instance: ModalManager;

  selectors = {
    cartButton: "[data-js-cart-button]",
    modalInstance: "[data-js-modal-instance]",
  };

  /**
   *
   * @param componentForRender - компонент, который будет отрисовываться при открытии модального окна
   */
  constructor({
    componentForRender,
  }: {
    componentForRender: React.ElementType;
  }) {
    if (ModalManager.instance) {
      return ModalManager.instance;
    }

    this.componentForRender = componentForRender;

    this.bindEvents();
  }

  static getInstance() {
    if (!ModalManager.instance) {
      ModalManager.instance = new ModalManager(com);
    }
    return ModalManager.instance;
  }

  private createModalWindowInstance() {
    const root = document.querySelector("#root");

    const modalInstanceNode = document.createElement("div");
    modalInstanceNode.classList.add("modalWindowInstance");
    modalInstanceNode.setAttribute("id", "modalInstance");
    modalInstanceNode.setAttribute("data-js-modal-instance", "");

    root?.append(modalInstanceNode);
  }

  private openModalWindow(props: any) {
    this.createModalWindowInstance();

    const targetNode = document.getElementById("modalInstance") as HTMLElement;
    this.renderModalWindow(props, targetNode);
  }

  private renderModalWindow(props: any, target: HTMLElement) {
    const root = ReactDOM.createRoot(target);

    /**
     * Указывается компонент, необходимый для отрисовки
     */
    root.render(React.createElement(this.componentForRender, props));
  }

  private closeModalWindow() {
    const modalInstance = document.querySelector(this.selectors.modalInstance);

    if (modalInstance) modalInstance.remove();
  }

  bindEvents() {
    const root = document.querySelector("#root");
    console.log("фыфвфывфывфывфывфыв");

    /**
     * При клике на кнопку с атрибутом "data-js-cart-button"
     * вытаскиваем объект с информацией из атрибута
     */
    root?.addEventListener("click", (e) => {
      const attr = getAttr(this.selectors.cartButton);
      this.infoForModal = JSON.parse(e.target?.getAttribute(attr));

      if (this.infoForModal) {
        this.openModalWindow({ config: this.infoForModal });
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
