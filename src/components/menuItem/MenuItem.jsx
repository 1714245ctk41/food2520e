import React from "react";
import "./MenuItem.scss";
import { withRouter } from "react-router-dom";

const MenuItem = ({ id, title, imageUrl, history, linkUrl, match }) => {
  const routeName = encodeURI(title.toLowerCase());
  return (
    // {/* start menu-iteme */ }
    <div className="menu-item-1">
      <div className="content">
        <img src={imageUrl} alt="" />
        <div className="subtitle-1">
          <div
            className="subtitle-contain"
            onClick={() => history.push(`${routeName}`)}
          >
            <i className="fas fa-plus"></i>
            <span>
              <i>SEE NOW</i>
            </span>
          </div>
        </div>
        <h1 className="title" onClick={() => history.push(`${routeName}`)}>
          {title}
        </h1>
      </div>
    </div>
    // {/* end menu-item */ }
  );
};
export default withRouter(MenuItem);
