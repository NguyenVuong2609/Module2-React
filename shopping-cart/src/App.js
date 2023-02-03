import "./App.css";
import ListProduct from "./components/ListProduct";
import { createStore } from "redux";
import { Provider } from "react-redux";
import cartReducer from "./reducers/index";
import Cart from "./components/Cart";

export const store = createStore(cartReducer);
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>Project - Shopping Cart</h2>
        <div className="container">
          <div className="listProduct">
            <ListProduct></ListProduct>
          </div>
          <div className="cart">
            <Cart></Cart>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;
