import React from "react";
import "./App.scss";
import {Route, Switch} from "react-router-dom";

import LoginRegis from "../pages/LoginRegis/LoginRegis";
// import {
// auth,
// createUserProfileDocument,
// // addCollectionAndDocuments,
// } from "../firebase/firebase.utils";
import Header from "../components/header/Header";
import {connect} from "react-redux";
import {checkUserSession} from "../redux/user/userActions";
import CheckoutPage from "../pages/checkoutPage/CheckoutPage";
// import ProductContainer from "../components/shopComponents/ProductContainer";
// import ShopPage from "../pages/shop/shop";
// import Category from "../components/category/Category";
import {selectCollectionsForArray} from "../redux/shop/ShopSelector";
import {createStructuredSelector} from "reselect";

import {fetchCollectionsStart} from "../redux/shop/shopActions";

import ShopPageWithSpinner from "../pages/pagesWithSpinner/ShopPageWithSpinner";
import CollectionsCategoryWithSpinner from "../pages/pagesWithSpinner/CollectionsCategoryWithSpinner";
import CollectionsHomePageWithSpinner from "../pages/pagesWithSpinner/CollectionsHomePageWithSpinner";
import ProductDetailWithSpinner from "../pages/pagesWithSpinner/ProductDetailWithSpinner";

// const CollectionsOverviewWithSpinner = WithSpinner(HomePage);
// const CollectionPageWithSpinner = WithSpinner(Category);
// const ShopPageWithSpinner = WithSpinner(ShopPage);

// import "./../components/LoginRegis/LoginRegister.scss";
// import "./../pages/LoginRegis/LoginRegis.scss";
// * lưu trữ người dùng tại app để truyền xuống các component mà chúng ta
// * muốn sử dụng thông tin user
// * khi người nào đó sign-in or sign-out, chúng ta muốn điều gì sẽ thay đổi
// * firebase sẽ giúp chúng ta nhận biết được điều đó 1 cách dễ dàng
class App extends React.Component { // * khi người dùng signout, componentWillUnMount sẽ được gọi lên và thay đổi state
    unsubscribeFromAuth = null;

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {fetchCollectionsStart, checkUserSession} = this.props;
        fetchCollectionsStart();
        checkUserSession();
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (<div className="App">
            <Header/>
            <LoginRegis/>
            <div className="divide"></div>
            <div className="divide"></div>

            <Switch>
                <Route exact path="/shop/:id"
                    component={ProductDetailWithSpinner}/>
                <Route path="/shop"
                    component={ShopPageWithSpinner}/>
                <Route exact path="/"
                    // component={HomePage}
                    component={CollectionsHomePageWithSpinner}
                    // render={(props) => (
                    //   <CollectionsOverviewWithSpinner
                    //     isLoading={!isCollectionsLoaded}
                    //     {...props}
                    //   />
                    // )}
                />
                <Route exact path="/checkout"
                    component={CheckoutPage}/> {/* <Route component={HomePage} /> */}
                <Route path="/:menuId"
                    // component={Category}
                    component={CollectionsCategoryWithSpinner}
                    // render={(props) => (
                    //   <CollectionPageWithSpinner
                    //     isLoading={!isCollectionsLoaded}
                    //     {...props}
                    //   />
                    // )}
                />

            </Switch>
            <div className="divide"></div>
            <div className="divide"></div>
        </div>);
    }
}

const mapDispatchToProps = (dispatch) => ({ // setCurrentUser: (user) => dispatch(setCurrentUser(user)),
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
    checkUserSession: () => dispatch(checkUserSession())
});

const mapStateToProps = createStructuredSelector({
    collectiosnArray: selectCollectionsForArray,
    // isCollectionFetching: selectIsCollectionFetching,
    // isCollectionsLoaded: selectIsCollectionsLoaded,
});

// * không cần state từ reducer nên để null
export default connect(mapStateToProps, mapDispatchToProps)(App);
