import { QUANTITY_DOWN, QUANTITY_UP } from "../constants/actionType";
const initialState = [
  {
    id: 1,
    name: "Pizza",
    tittle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    quantity: 10,
    image: "images/pizza.jpg",
    price: 10,
  },
  {
    id: 2,
    name: "Humburger",
    tittle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    quantity: 0,
    image: "images/Hamburger.jpg",
    price: 12,
  },
  {
    id: 3,
    name: "Bread",
    tittle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    quantity: 15,
    image: "images/bread.jpg",
    price: 15,
  },
  {
    id: 4,
    name: "Cake",
    tittle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    quantity: 6,
    image: "images/Cake.jpg",
    price: 11,
  },
];
const getIndexProduct = (id, listCarts) => {
  for (let i = 0; i < listCarts.length; i++) {
    if (listCarts[i].id == id) {
      return i;
    }
  }
  return -1;
};

const listProduct = (state = initialState, action) => {
  switch (action.type) {
    case QUANTITY_DOWN:
      let index = getIndexProduct(action.payload.id, state);
      if(state[index].quantity>=action.payload.productAmount){
        state[index].quantity -= action.payload.productAmount;
      } else {
        window.alert('Not enough items for your order! We have only'+ state[index].quantity)
      }
      return [...state];
      case QUANTITY_UP:
        let indexUp = getIndexProduct(action.payload.id, state);
        state[indexUp].quantity += action.payload.productAmount;
        return [...state];
    default:
      return state;
  }
};
export default listProduct;
