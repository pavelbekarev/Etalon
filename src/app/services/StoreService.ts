import { createStore } from "../store/cartStore";

export class StoreService {
  store: any;

  actionMap: any;

  constructor(storageName: string) {
    this.store = createStore(storageName);
    this.actionMap = {
      addProduct: (payload: any) => this.store.getState().addProduct(payload),
    };
  }

  subscribeToMarkers(callback: any) {
    return this.store.subscribe((state: any) => state.products, callback);
  }

  getMarkers() {
    return this.store.getState().products;
  }

  updateStore(action: any, payload: any) {
    const actionFunction = this.actionMap[action];

    actionFunction
      ? actionFunction(payload)
      : console.warn(`Action ${action} is not defined`);
  }
}
