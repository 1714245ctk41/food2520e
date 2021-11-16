import React from "react";
import SHOP_DATA from "./shopData";
import "./shop.scss";
import ProductContainer from "../../components/shopComponents/ProductContainer";
import { Route } from "react-router-dom";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    console.log(this.props.match);
    return (
      <div>
        <Route
          exact
          path={this.props.match.path}
          component={ProductContainer}
        />
      </div>
    );
  }
}

export default ShopPage;
