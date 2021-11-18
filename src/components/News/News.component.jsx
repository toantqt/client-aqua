import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import "./news.css";
export default function NewsComponent(props) {
  return (
    <Grid className="wrap-news">
      <div className="img-news">
        <Image
          src={props?.img}
          style={{
            height: "100% ",
            objectFit: "cover",
            paddingTop: "0px",
            borderRadius: "6px",
          }}
        />
      </div>
      <div className="title-news">
        <span>{props?.title}</span>
      </div>
      <div className="description-news">
        <span>{props?.description}</span>
      </div>
      <div className="more-news">
        <span>Xem thêm</span>
      </div>
    </Grid>
  );
}
