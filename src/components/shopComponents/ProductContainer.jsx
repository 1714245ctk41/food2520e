import React from "react";

import "./ProductContainer.scss";
import SingleProduct from "../singleProduct/SingleProduct";
import { connect } from "react-redux";
import { DataFoodSelector } from "../../redux/dataFood/DataFoodSelector";
import { createStructuredSelector } from "reselect";
// import ChooseCategory from "./ChooseCategory";
import { selectCollectionsForArray } from "../../redux/shop/ShopSelector";

class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shop_data: this.props.collections,
    };
  }
  category = (evt, routeName) => {
    console.log(this.state.shop_data);
    this.setState({
      shop_data: this.props.collections.filter(
        (collection) => collection.routeName === routeName
      ),
    });
    const cateLink = document.getElementsByClassName("category-item");

    for (let i = 0; i < cateLink.length; i++) {
      cateLink[i].className = cateLink[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
  };
  showAll = (evt) => {
    const cateLink = document.getElementsByClassName("category-item");

    for (let i = 0; i < cateLink.length; i++) {
      cateLink[i].className = cateLink[i].className.replace(" active", "");
    }
    evt.currentTarget.className += " active";
    this.setState({
      shop_data: this.props.collections,
    });
  };

  render() {
    console.log(this.state.shop_data);
    return (
      <div>
        <div className="row medium-4">
          {/* <!-- khối sản phẩm-- > */}

          <div id="photos">
            <div
              className="category-item active"
              onClick={(evt) => this.showAll(evt)}
            >
              <span>All</span>
            </div>
            {this.props.sections.map((item, id) => (
              <div
                key={item.id}
                className="category-item"
                onClick={(evt) =>
                  this.category(evt, encodeURI(item.title.toLowerCase()))
                }
              >
                <span> {item.title}</span>
              </div>
            ))}
            {this.state.shop_data.map((item, id) => {
              return item.items.map((it, index, array) => (
                <SingleProduct
                  key={it.id}
                  item={it}
                />
              ));
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  sections: DataFoodSelector,
  collections: selectCollectionsForArray,
});

export default connect(mapStateToProps)(ProductContainer);
