import React from "react";
import "./CartItem.scss";
import { withRouter } from "react-router-dom";

const CartItem = ({
  item: { id, imageUrl, price, name, quantity },
  history,
}) => {
  console.log(history);
  return (
    <div className="cart-item">
      <img
        src={imageUrl}
        alt="item"
        onClick={() => {
          history.push("/shop/" + id );
        }}
      />
      <div className="item-details">
        <span
          className="name"
          onClick={() => {
            history.push("/shop/" + id );
          }}
        >
          {name}
        </span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default withRouter(CartItem);
