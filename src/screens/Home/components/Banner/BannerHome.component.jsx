import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import logo from "../../../../assets/image/logo.png";

const BannerHomeComponent = (props) => {
  return (
    <Grid id="home-banner" className="mt-5">
      <div className="wrapper-banner ">
        <Image
          src={props?.banner?.image?.url}
          style={{
            width: "100%",
            height: "100%",
            paddingTop: "0px !important",
            objectFit: "cover",
          }}
        />
        <div className="bg-img"></div>
        <div className="banner-content">
          <div className="mt-3">
            <img src={logo} width="50%" />
          </div>
          <div className="bottom-title mt-3">
            <span>{props?.title}</span>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default BannerHomeComponent;
