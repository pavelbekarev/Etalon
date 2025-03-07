import ReactDOM from "react-dom/client";
import { getAttr } from "../utils/getAttr";
import "../components/ModalWindow/style.scss";
import { ModalWindow } from "../components/ModalWindow";
import React from "react";

export abstract class ModalManager {
  abstract selectors: Object;

  constructor() {}

  createModalWindowInstance() {
    const root = document.querySelector("#root");

    const modalInstanceNode = document.createElement("div");
    modalInstanceNode.classList.add("modalWindowInstance");
    modalInstanceNode.setAttribute("id", "modalInstance");
    modalInstanceNode.setAttribute("data-js-modal-instance", "");

    root?.append(modalInstanceNode);
  }

  abstract openModalWindow(props?: any): void;

  /**
   *
   * @param props - необязательный параметр. В него передается информация, которая необходима для отображения в модальном окне
   */
  abstract renderModalWindow({
    props,
    target,
  }: {
    props?: any;
    target: HTMLElement;
  }): void;

  abstract closeModalWindow(): void;
}
