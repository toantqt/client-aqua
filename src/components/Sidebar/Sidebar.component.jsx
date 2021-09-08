import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./sidebar.css";

const SidebarComponent = (props) => {
  const [selected, setSelected] = useState("");
  const handleClick = (id) => {
    setSelected(id);
    props?.handleChange(id);
  };
  const lists = props?.category?.map((e, index) => {
    return (
      <li
        className={"category-item mt-1 " + (e._id === selected ? "active" : "")}
        key={index}
        onClick={() => {
          handleClick(e._id);
        }}
      >
        <span>{e.name}</span>
        <i>
          <i class="fas fa-chevron-right"></i>
        </i>
      </li>
    );
  });
  return (
    <Grid>
      <div className="wrap-product-category">
        <ul className="product-category">
          <li
            className={"category-item " + (selected === "" ? "active" : "")}
            onClick={() => {
              handleClick("");
            }}
          >
            <span>Tất cả</span>
          </li>
          {lists}
        </ul>
      </div>
    </Grid>
  );
};

export default SidebarComponent;
