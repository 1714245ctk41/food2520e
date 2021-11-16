import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import CartIcon from "../cart/CartIcon";
import CartDropdown from "../cart/CartDropdown";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/CartSelectors";
import { selectCurrentUser } from "../../redux/user/UserSelector";

import {
  HeaderContainer,
  MenuOpen,
  hamburger1,
  hamburger3,
} from "./HeaderStyled";

// const showAll = (evt) => {
//   const cateLink = document.getElementsByClassName("menu-item");

//   for (let i = 0; i < cateLink.length; i++) {
//     cateLink[i].className = cateLink[i].className.replace(" menu-active", "");
//   }
//   evt.currentTarget.className += " menu-active";
// };
function openLogin() {
  document.getElementsByClassName("logreg-container")[0].style.display =
    "block";
  setTimeout(
    () =>
      (document.getElementsByClassName(
        "logreg-container"
      )[0].style.opacity = 1),
    300
  );
}

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <MenuOpen
      type="checkbox"
      href="google.com"
      name="menu-open"
      id="menu-open"
      defaultChecked
    />
    <label className="menu-open-button" htmlFor="menu-open">
      <span className="hamburger hamburger-1" />
      <span className="hamburger hamburger-2" />
      <span className="hamburger hamburger-3" />
    </label>
    {/* <menuOopenButton htmlFor="menu-open">
      <hamburger1 />
      <hamburger2 />
      <hamburger3 />
    </menuOopenButton> */}
    <Link to="/" className="menu-item">
      <i className="fas fa-home" />
    </Link>

    <Link to="/shop" className="menu-item">
      <i className="fas fa-store" />
    </Link>

    <a href="google.com" className="menu-item">
      {" "}
      <i className="fas fa-heart" />{" "}
    </a>
    <CartIcon />

    <p href="google.com" className="menu-item" onClick={openLogin}>
      {" "}
      <i className="fas fa-user" />{" "}
    </p>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
