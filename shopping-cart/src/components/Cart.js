import React, {useState, useEffect} from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const cartList = useSelector((state) => state);
  const [localCart, setLocalCart] = useState([]);
  useEffect(() => {setLocalCart(cartList)}
  ,[cartList]);
  const handleChange = (e,id)=> {
    let value = parseInt(e.target.value);
    let newData = localCart.map((data)=>{
      if (data.id === id) {
        if (value < 0){
          value = 0;
        }
        return {...data, quantity: value};
      } else {
        return data;
      }
    })
    setLocalCart(newData);
  }

  let elementProduct = localCart.map((product,index) => {
    return <tr key={product.id}>
      <td>{index+1}</td>
      <td>{product.productName}</td>
      <td>
        {product.price.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        })}
      </td>
      <td>
        <input type={"number"} value={product.quantity} onChange={(e,id)=>handleChange(e,product.id)}/>
      </td>
      <td>{(product.quantity * product.price).toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}</td>
      <td>
        <button>Update</button>
      </td>
      <td>
        <button>Delete</button>
      </td>
    </tr>;
  });
  return (
    <div>
      <h2>Your Cart</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th colSpan={2}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {elementProduct}
        </tbody>
      </table>
    </div>
  );
}
