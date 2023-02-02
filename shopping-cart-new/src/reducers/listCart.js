import {
  BUY_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "../constants/actionType";
import { SHOP_CART } from "../constants/shoppingCart";
let initialState = [];
let carts = JSON.parse(localStorage.getItem("SHOP_CART"));
const getIndexProduct = (id, listCarts) => {
  for (let i = 0; i < listCarts.length; i++) {
    if (listCarts[i].product.id == id) {
      return i;
    }
  }
  return -1;
};
initialState = carts != null && carts.length > 0 ? carts : initialState;
const listCart = (state = initialState, action) => {
  switch (action.type) {
    case BUY_PRODUCT:
      let index = getIndexProduct(action.payload.product.id, state);
      if (index >= 0) {
        state[index].productAmount += parseInt(action.payload.productAmount);
      } else {
        state = [
          ...state,
          {
            product: action.payload.product,
            productAmount: parseInt(action.payload.productAmount),
          },
        ];
      }
      localStorage.setItem(SHOP_CART, JSON.stringify(state));
      return [...state];
    case UPDATE_PRODUCT:
      let indexUpdate = getIndexProduct(action.payload.id, state);
      state[indexUpdate].productAmount = parseInt(action.payload.productAmount);
      localStorage.setItem(SHOP_CART, JSON.stringify(state));
      return [...state];
      case DELETE_PRODUCT:
        let indexDelete = getIndexProduct(action.payload, state);
        state.splice(indexDelete, 1);
        localStorage.setItem(SHOP_CART, JSON.stringify(state));
        return [...state];
    default:
      return state;
  }
};
export default listCart;
