import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="prodcut_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="prodcut_rating">
          {Array(rating)
            .fill()
            .map((_, index) => {
              return <span key={index}>⭐</span>;
            })}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
