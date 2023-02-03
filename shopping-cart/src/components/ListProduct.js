import React from "react";
import * as images from "../images/index";
import { useDispatch } from "react-redux";
import * as actionTypes from "../actions/index";

export default function ListProduct() {
    const dispatch = useDispatch();
  const productArr = [
    { id: 1, productName: "Food 1", img: images.Image1, price: 100000 },
    { id: 2, productName: "Food 2", img: images.Image2, price: 200000 },
    { id: 3, productName: "Food 3", img: images.Image3, price: 300000 },
    { id: 4, productName: "Food 4", img: images.Image4, price: 400000 },
  ];

  const sendData = (data)=>{
    dispatch(actionTypes.buyProduct(data));
  }
  const elementProduct = productArr.map((data,index) => {
    return (
      <div className="product" key={index}>
        <img src={data.img} />
        <div className="detailProduct">
          <h3>{data.productName}</h3>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta
            asperiores veniam repellat unde debitis quisquam magnam magni ut
            deleniti!
          </div>
          <div>
            Price:{" "}
            {data.price.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </div>
        </div>
        <div className="buttonProduct">
          <button onClick={()=>sendData(data)}>Buy</button>
        </div>
      </div>
    );
  });
  return <div>
    <h2>List product</h2>
    {elementProduct}
    </div>;
}
