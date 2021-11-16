import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/ShopSelector";
import { compose } from "redux";
import WithSpinner from "../../components/withSpinner/withSpinner";
import ProductDetailPage from "../productDetailPage/ProductDetailPage";


const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),

});

const ProductDetailWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinner
)(ProductDetailPage);

export default ProductDetailWithSpinner;
