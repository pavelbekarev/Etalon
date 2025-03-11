import "../../ModalWindow/style.scss";

export class ConfirmModalModel {
  selectors: Object;

  constructor() {
    this.selectors = {
      modalInstance: "[data-js-modal-instance]",
      confirmBtn: "[data-js-modal-confirm]",
      declineBtn: "[data-js-modal-decline]",
    };

    this.bindEvents();
  }

  closeModalWindow(): void {
    const modalInstance = document.querySelector(this.selectors.modalInstance);

    if (modalInstance) modalInstance.remove();
  }

  private bindEvents() {
    const root = document.getElementById("root");
    const confirmBtnNode = document.querySelector(this.selectors.confirmBtn);
    const declineBtnNode = document.querySelector(this.selectors.declineBtn);

    root?.addEventListener("click", (e: any) => {
      if (e.target === confirmBtnNode) {
        /**
         * TODO: добавлять в cartStore объект с информацией.
         */
        console.log("yes");
      }

      if (e.target === declineBtnNode) {
        this.closeModalWindow();
      }
    });
  }
}
