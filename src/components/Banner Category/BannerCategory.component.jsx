import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import logo from "../../assets/image/logo.png";
import "./bannerCategory.css";

const BannerCategoryComponent = (props) => {
  return (
    <Grid id="home-banner">
      <div className="wrapper-banner ">
        <Image
          src={props?.banner[0]?.image?.url}
          style={{
            width: "100%",
            height: "100%",
            paddingTop: "0px !important",
            objectFit: "cover",
          }}
        />
        <div className="bg-img"></div>
        <div
          className="banner-category-content"
          style={{ textAlign: "center" }}
        >
          <div className="mt-3">
            <img src={logo} width="30%" />
          </div>
          <div className="bottom-title mt-3">
            <span>{props?.title}</span>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default BannerCategoryComponent;
