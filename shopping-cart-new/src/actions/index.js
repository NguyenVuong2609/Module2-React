import {
  BUY_PRODUCT,
  CHANGE_NOTIFY,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
  QUANTITY_DOWN,
  QUANTITY_UP,
} from "../constants/actionType";
export const act_buy_product = (product, productAmount) => {
  return {
    type: BUY_PRODUCT,
    payload: { product, productAmount },
  };
};
export const act_change_notify = (message) => {
  return {
    type: CHANGE_NOTIFY,
    payload: message,
  };
};
export const act_update_product = (id, productAmount) => {
  return {
    type: UPDATE_PRODUCT,
    payload: { id, productAmount },
  };
};
export const act_delete_product = (id) => {
  return {
    type: DELETE_PRODUCT,
    payload: id,
  };
};
export const act_quantity_down = (id, productAmount) => {
  return {
    type: QUANTITY_DOWN,
    payload: { id, productAmount },
  };
};
export const act_quantity_up = (id, productAmount) => {
  return { 
        type: QUANTITY_UP, 
        payload: { id, productAmount } };
};
