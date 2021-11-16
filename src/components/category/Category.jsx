import React from "react";
import { selectCollection } from "../../redux/shop/ShopSelector";
import { connect } from "react-redux";
import SingleProduct from "../singleProduct/SingleProduct";

class Category extends React.Component {
  render() {
    const { collection } = this.props;
    const { title, items } = collection;
    return (
      <div className="container">
        <div className="row medium-4">
          <h2 className="title">{title}</h2>
          <div id="photos">
            <div className="items">
              {items.map((item) => (
                <SingleProduct key={item.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//ownProps là props của Category component
//hàm selectCollection sẽ lấy state để chạy các function bên trong
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.menuId)(state),
});

export default connect(mapStateToProps)(Category);
