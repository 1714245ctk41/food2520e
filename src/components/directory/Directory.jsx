import React from "react";
import "./Directory.scss";
import MenuItem from "../menuItem/MenuItem";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectShopMenu,
  selectCollectionsForArray,
} from "../../redux/shop/ShopSelector";

const Directory = ({ match, sections, collection }) => {
  return (
    <div className="row">
      <div id="photos">
        {sections.map(({ ...otherSectionProps }) => (
          <MenuItem key={otherSectionProps.id} {...otherSectionProps} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectShopMenu,
  collection: selectCollectionsForArray,
});

export default connect(mapStateToProps)(Directory);
