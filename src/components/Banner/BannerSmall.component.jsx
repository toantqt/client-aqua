import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import b1 from "../../assets/image/Banner/b1.png";
import b2 from "../../assets/image/Banner/b2.png";
import b3 from "../../assets/image/Banner/b3.png";
import "./bannerCategory.css";

export default function BannerSmallComponent(props) {
  return (
    <Grid>
      <div className="banner-small">
        <Image
          src={b1}
          style={{
            width: "100%",
            height: "100%",
            paddingTop: "0px !important",
            objectFit: "cover",
          }}
          imageStyle={{
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
      <div className="banner-small">
        <Image
          src={b2}
          style={{
            width: "100%",
            height: "100%",
            paddingTop: "0px !important",
            objectFit: "cover",
          }}
          imageStyle={{
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
      <div className="banner-small">
        <Image
          src={b3}
          style={{
            width: "100%",
            height: "100%",
            paddingTop: "0px !important",
            objectFit: "cover",
          }}
          imageStyle={{
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
    </Grid>
  );
}
