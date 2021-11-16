import React from "react";
import "./homepage.scss";
import Directory from "../../components/directory/Directory";
// import { Route } from "react-router-dom";
// import Category from "../../components/category/Category";
// import ProductContainer from "../../components/shopComponents/ProductContainer";

const HomePage = (props) => {
  console.log("This is props homepage: ");
  console.log( props);

  return (
    <div className="homepage">
      {/* <Route
        path={`${props.match.path}/:menuId`}
        component={ProductContainer}
      /> */}
      <Directory {...props} />
      {/* <Route path={`${props.match.path}`} component={Directory} /> */}
    </div>
  );
};

export default HomePage;
