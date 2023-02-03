import * as actionType from '../constant/actionType'

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ACT_ADD_ITEM:
      const productInCart = state.find(
        (p) => p.id === action.payload.id
      );
      if (!productInCart) {
        return [...state, {...action.payload, quantity: 1}];
      } else {
        let newcart = state;
        const objIndex = newcart.findIndex(
          (obj) => obj.id === action.payload.id
        );
          newcart[objIndex].quantity = newcart[objIndex].quantity + 1;
        return [...newcart];
      }

    case actionType.ACT_DELETE_ITEM:
      let newcart = state.cartArr;
      const objIndex = newcart.findIndex((obj) => obj.id === action.payload.id);
      newcart.splice(objIndex, 1);
      console.log(">>newcart", newcart);
      return { cartArr: [...newcart], totalprice: 0 };

    default:
      return state;
  }
};

export default cartReducer;