import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/ShopSelector";

import ShopPage from "../../pages/shop/shop";
import { compose } from "redux";
import WithSpinner from "../../components/withSpinner/withSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const ShopPageWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinner
)(ShopPage);

export default ShopPageWithSpinner;
