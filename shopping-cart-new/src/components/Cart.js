import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../actions/index";
import { PRODUCT_UPDATE_SUCCESS, PRODUCT_DELETE, PRODUCT_UPDATE_FAILURE } from "../constants/messageNotify";

export default function Cart(props) {
  let [amount, setAmount] = useState(0);
  let [oldAmount, setOldAmount] = useState(0);
  const dispatch = useDispatch();
  const listProduct = useSelector(state=>state.listProduct);
 
  const { product } = props;
  const { stt } = props;
  useEffect(()=>{
    setOldAmount(product.productAmount)
  },[product.productAmount]);
  useEffect(() => {
    setAmount(product.productAmount);
  }, [product.productAmount]);
  const handleChange = (e) => {
    setAmount(e.target.value);
    document
      .getElementById("row" + product.product.id)
      .classList.add("actived");
  };
  const handleUpdate = (e) => {
    let index = getIndexProduct(product.product.id, listProduct);
    let calculated = amount - oldAmount;
    if (calculated <= listProduct[index].quantity && calculated >= 0){
      dispatch(types.act_update_product(product.product.id, amount));
      dispatch(types.act_change_notify(PRODUCT_UPDATE_SUCCESS));
      dispatch(types.act_quantity_down(product.product.id, calculated));
      setOldAmount(product.productAmount);
    } else if (calculated <= listProduct[index].quantity && calculated < 0) {
      let newAmount = calculated * -1;
      dispatch(types.act_change_notify(PRODUCT_UPDATE_SUCCESS));
      dispatch(types.act_update_product(product.product.id, amount));
      dispatch(types.act_quantity_up(product.product.id, newAmount));
      setOldAmount(product.productAmount);
    } else {
      console.log("Fail");
      window.alert('Not enough items for your order! We have only: '+ listProduct[index].quantity)
      dispatch(types.act_change_notify(PRODUCT_UPDATE_FAILURE));
    }
    document
      .getElementById("row" + product.product.id)
      .classList.remove("actived");
    e.preventDefault();
  };
  const handleDelete = (e)=>{
    dispatch(types.act_delete_product(product.product.id));
    dispatch(types.act_change_notify(PRODUCT_DELETE));
    dispatch(types.act_quantity_up(product.product.id, amount));
    e.preventDefault();
  }
  const getIndexProduct = (id, listCarts) => {
    for (let i = 0; i < listCarts.length; i++) {
      if (listCarts[i].id == id) {
        return i;
      }
    }
    return -1;
  };
  return (
    <tr id={"row" + product.product.id}>
      <th scope="row">{stt}</th>
      <td>{product.product.name}</td>
      <td>{product.product.price} USD</td>
      <td>
        <input
          name="cart-item-quantity-1"
          type="number"
          value={amount}
          min={1}
          onChange={handleChange}
        />
      </td>
      <td>
        <strong>{product.product.price * amount} USD</strong>
      </td>
      <td>
        <a
          className="label label-info update-cart-item"
          href="#"
          data-product=""
          onClick={handleUpdate}
        >
          Update
        </a>
        <a
          className="label label-danger delete-cart-item"
          href="#"
          data-product=""
          onClick={handleDelete}
        >
          Delete
        </a>
      </td>
    </tr>
  );
}
