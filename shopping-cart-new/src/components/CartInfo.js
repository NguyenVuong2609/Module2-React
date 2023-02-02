import React from 'react';
import { useSelector } from 'react-redux';

export default function CartInfo() {
  const listCart = useSelector(state=> state.listCart);
  let elementInfo = "";
  if (listCart.length == 0 ){
    elementInfo = <tr>
    <th colSpan={6}>Empty product in your cart</th>
  </tr>
  } else {
    let calTotalPrice = 0;
    listCart.forEach(product=>{
      calTotalPrice += product.product.price * product.productAmount
    })
    elementInfo = <tr>
    <td colSpan={4}>
      There are <b>{listCart.length}</b> items in your shopping cart.
    </td>
    <td colSpan={2} className="total-price text-left">
      {calTotalPrice} USD
    </td>
  </tr>
  }
  return (
    <tfoot id="my-cart-footer">
      {/* CART FOOTER */}
      {elementInfo}
    </tfoot>
  )
}
