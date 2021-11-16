import React from "react";
import {
  clearItemFromCart,
  removeItem,
  addItem,
} from "../../redux/cart/CartActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const CheckoutItem = ({
  cartItem,
  clearItem,
  addItem,
  removeItem,
  history,
}) => (
  <tr key={cartItem.id}>
    <td>
      <span onClick={() => clearItem(cartItem)}>
        {" "}
        <i className="fas fa-trash"></i>
      </span>
    </td>
    <td>
      <div className="checkout-item">
        <img
          src={cartItem.imageUrl}
          alt=""
          onClick={() => {
            history.push("shop/" + cartItem.id );
          }}
        />
        <span
          onClick={() => {
            history.push("shop/" + cartItem.id );
          }}
        >
          {cartItem.name}
        </span>
      </div>
    </td>
    <td>$ {cartItem.price}</td>
    <td className="checkout-quantity">
      <span onClick={() => removeItem(cartItem)}>
        <i className="fas fa-long-arrow-alt-left"></i>{" "}
      </span>
      <span> {cartItem.quantity}</span>
      <span onClick={() => addItem(cartItem)}>
        <i className="fas fa-long-arrow-alt-right"></i>
      </span>
    </td>
    <td>$ {cartItem.quantity * cartItem.price}</td>
  </tr>
);

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});

export default withRouter(connect(null, mapDispatchToProps)(CheckoutItem));
