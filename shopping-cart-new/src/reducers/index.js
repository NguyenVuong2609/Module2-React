import { combineReducers } from "redux";
import listProduct from "./listProduct";
import listCart from "./listCart";
import notify from "./notify";

const reducer = combineReducers({listProduct, listCart, notify});
export default reducer;
