import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import "../News/news.css";
export default function ListsNewsComponent(props) {
  return (
    <Grid className="wrap-news wrap-n mt-3">
      <div className="img-news">
        <Image
          src={props?.img}
          style={{
            height: "100% ",
            objectFit: "cover",
            paddingTop: "0px",
            borderRadius: "6px !important",
          }}
          imageStyle={{ borderRadius: "15px 15px 0 0", objectFit: "cover" }}
        />
      </div>
      <div className="title-n">
        <div className="title-news ">
          <span>{props?.title}</span>
        </div>
      </div>
    </Grid>
  );
}
