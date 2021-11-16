import React from "react";
import "./CheckoutPage.scss";
// import CartItem from "../../components/cart/CartItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/CartSelectors";

import { withRouter } from "react-router-dom";
import CheckoutItem from "./CheckoutItem";
import StripeCheckoutButton from "../../components/stripeButton/stripeButton";

const CheckoutPage = ({ cartItems, total, dispatch }) => {
  return (
    <div>
      <div className="row medium-4">
        <h1 style={{ textAlign: "center" }}>CHECK OUT</h1>
        <div className="checkout-page">
          <table className="checkout-table">
            <thead>
              <tr>
                <th>Remove</th>
                <th>Products</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length > 0 ? (
                cartItems.map((cartItem) => (
                  <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
              ) : (
                <td colSpan="5">
                  <h3>Empty Cart</h3>
                </td>
              )}
            </tbody>
          </table>
          <div className="checkout-total">
            <h2>TOTAL: $ {total}</h2>
            <StripeCheckoutButton price={total} />
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default withRouter(connect(mapStateToProps)(CheckoutPage));
