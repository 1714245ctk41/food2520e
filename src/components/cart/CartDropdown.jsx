import React from "react";
import CustomButton from "../customButton/CustomButton";
import "./cartDropdown.scss";
import CartItem from "./CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/CartSelectors";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import { toggleCartHidden } from "../../redux/cart/CartActions";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cartDropdown-container">
      <div className="cartDropdown-content">
        {cartItems.length > 0
          ? cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          : "Your cart is empty"}
      </div>

      <CustomButton
        className="cartDropdown-go-to-checkout"
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go to checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
