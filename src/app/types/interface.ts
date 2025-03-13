export interface IHeader {
  imgChild: any;
  txtChild: string;
  txtChildAdditional: string;
}

export interface iCard {
  id: number;
  name: string;
  price: string;
  article: string;
}

export interface IProduct {
  id: number;
  name: string;
  price: number;
  article: number;
  quantity: number;
}

export interface IOrder {
  products: IProduct[];
  totalPrice: number;
}

export interface ICartStore {
  products: IProduct[];
  orders: IOrder[];
  addProduct: (product: IProduct) => void;
  removeProduct: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  addOrder: (order: IOrder) => void;
}
