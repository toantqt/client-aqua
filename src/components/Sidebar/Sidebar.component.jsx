import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./sidebar.css";
import { getCategoryType } from "../../api/API";

const SidebarComponent = (props) => {
  const [selected, setSelected] = useState("");
  const [product, setProduct] = useState([]);
  useEffect(async () => {
    await getCategoryType("product").then((res) => {
      setProduct(res.data);
    });
  });
  const handleClick = (id) => {
    setSelected(id);
    props?.handleChange(id);
  };
  const lists = product?.map((e, index) => {
    console.log(e);
    return (
      <div key={index} className="product-category">
        <div className="main-category">
          <span>{e?.categoryName}</span>
        </div>
        {e?.subCategory?.map((sub) => {
          return (
            <div key={sub} className="sub-category">
              <span>{sub.name}</span>
            </div>
          );
        })}
      </div>
    );
  }, []);
  return (
    <Grid>
      <div className="wrap-product-category">
        {/* <li
            className={"category-item " + (selected === "" ? "active" : "")}
            onClick={() => {
              handleClick("");
            }}
          >
            <span>Tất cả</span>
          </li> */}
        {lists}
      </div>
    </Grid>
  );
};

export default SidebarComponent;
