import * as actionType from '../constant/actionType'

export const buyProduct = (product) => {
  return {
    type: actionType.ACT_ADD_ITEM,
    payload: product,
  };
};

export const deleteProduct = (product) => {
  return {
    type: actionType.ACT_DELETE_ITEM,
    payload: product,
  };
};
