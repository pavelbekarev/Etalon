import { ModalManager } from "@/app/plugins/modalManager";

export class ConfirmModalWindowModel extends ModalManager {
  componentForRender: any;

  constructor({ componentForRender }: any) {
    super({ componentForRender });

    this.componentForRender = componentForRender;
    this.bindEvents();
  }

  bindEvents() {
    super.bindEvents();
    console.log("сработал bindEvents унаследованного класса");
  }
}
