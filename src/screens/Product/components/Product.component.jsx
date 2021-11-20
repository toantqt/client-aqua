import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import "./product.css";

const ProductComponent = (props) => {
  const history = useHistory();
  const handleClick = (id) => {
    history.push(`/trang-chu/chi-tiet-san-pham/${id}`);
  };
  return (
    <div className="wrap-product mt-3">
      <div className="img-product">
        <Image
          src={props?.data?.image[0]?.url}
          style={{
            width: "100%",
            height: "100%",
            paddingTop: "0px !important",
            objectFit: "contain",
          }}
          imageStyle={{ borderRadius: "10px" }}
        />
      </div>
      <div className="name-product mt-1">
        <span>{props?.data?.name}</span>
      </div>
      <div className="price-product mt-3">
        <span>{props?.data?.price}</span>
        <span className="ml-1">VND</span>
      </div>
    </div>
  );
};

export default ProductComponent;
