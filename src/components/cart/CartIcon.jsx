import React from "react";
import "./cartIcon.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/CartActions";
import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/CartSelectors";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <p
    href="google.com"
    className="menu-item cartIcon"
    onClick={toggleCartHidden}
  >
    {" "}
    <i className="fas fa-shopping-bag" />
    <span>{itemCount}</span>
  </p>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
