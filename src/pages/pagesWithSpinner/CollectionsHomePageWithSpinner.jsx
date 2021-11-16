import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/ShopSelector";
import { compose } from "redux";
import HomePage from "../../pages/HomePage/homepage";
import WithSpinner from "../../components/withSpinner/withSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsHomePageWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinner
)(HomePage);

export default CollectionsHomePageWithSpinner;
