import React from "react";

const ChooseCategory = ({ data, changecontent }) => {
  return data.map((item, id) => (
    <div
      key={id}
      className="category-item"
      onClick={(evt) => changecontent(evt, item.id)}
    >
      <span> {item.title}</span>
    </div>
  ));
};

export default ChooseCategory;
