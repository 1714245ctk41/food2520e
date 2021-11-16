import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionsLoaded } from "../../redux/shop/ShopSelector";
import Category from "../../components/category/Category";
import { compose } from "redux";
import WithSpinner from "../../components/withSpinner/withSpinner";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionsCategoryWithSpinner = compose(
  connect(mapStateToProps),
  WithSpinner
)(Category);

export default CollectionsCategoryWithSpinner;
