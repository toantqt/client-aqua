import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./advisory.css";
import Image from "material-ui-image";
import bg from "../../assets/image/advisory/img1.png";
import icon from "../../assets/image/advisory/img2.png";

const AdvisoryComponent = () => {
  return (
    <Grid className="mt-5 mb-5">
      <div className="wrap-advisory">
        <Image
          src={bg}
          style={{
            width: "100%",
            height: "100%",
            paddingTop: "0px !important",
            objectFit: "cover",
          }}
          imageStyle={{ borderRadius: "10px" }}
        />
        <div className="bg-advisory"></div>
        <div className="content-advisory">
          <div>
            <img src={icon} alt="" />
          </div>
          <div className="mt-3">
            <span style={{ fontSize: "36px", fontWeight: "500" }}>
              GỌI NGAY
            </span>{" "}
            <br />
            <span style={{ fontSize: "20px" }}>ĐỂ ĐƯỢC TƯ VẤN</span>
          </div>
          <div className="mt-3">
            <span style={{ fontSize: "36px", fontWeight: "500" }}>
              1900 55 88 32
            </span>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default AdvisoryComponent;
