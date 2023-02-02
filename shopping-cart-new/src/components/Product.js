import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as types from '../actions/index';
import { PRODUCT_BUY_SUCCESS,PRODUCT_BUY_FAILURE } from '../constants/messageNotify';

export default function Product(props) {
  const [amount, setAmount] = useState(1);
  const listProduct = useSelector(state=> state.listProduct);
  const getIndexProduct = (id, listCarts) => {
    for (let i = 0; i < listCarts.length; i++) {
      if (listCarts[i].id == id) {
        return i;
      }
    }
    return -1;
  };
  const { product } = props;
  const dispatch = useDispatch();
  const handleBuy = (e)=> {
    let index = getIndexProduct(product.id, listProduct);
    if (listProduct[index].quantity>= amount) {
      dispatch(types.act_buy_product(product, amount));
      dispatch(types.act_change_notify(PRODUCT_BUY_SUCCESS));
    } else {
      dispatch(types.act_change_notify(PRODUCT_BUY_FAILURE));
    }
    dispatch(types.act_quantity_down(product.id, amount));
    e.preventDefault();
  }
  let elementBuy = '';
  if (product.quantity ==0) {
    elementBuy = <span className="price"> {product.price} USD</span>
  } else {
    elementBuy = <div>
       <input
              name="quantity-product-1"
              type="number"
              value={amount}
              min={1}
              onChange={(e)=>setAmount(e.target.value)}
            />
            <a data-product={1} href="#" className="price" onClick={handleBuy}>
              {" "}
              {product.price} USD{" "}
            </a>
    </div>
  }
  
  return (
    <div className="media product">
          <div className="media-left">
            <a href="#">
              <img
                className="media-object"
                src={product.image}
                alt={product.name}
              />
            </a>
          </div>
          <div className="media-body">
            <h4 className="media-heading">{product.name}</h4>
            <p>
              {product.tittle}
            </p>
            {elementBuy}
          </div>
        </div>
  )
}
