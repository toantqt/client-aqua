import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./advisory.css";
import Image from "material-ui-image";
const AdvisoryComponent = () => {
  return (
    <Grid className="mt-5 mb-5" id="advisory">
      <div className="wrap-advisory">
        <Image
          src="https://res.cloudinary.com/aquavn/image/upload/v1637504204/dc69389d9cf857a60ee9_manrcd.jpg"
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
            <img
              src="https://res.cloudinary.com/aquavn/image/upload/v1637426816/download_uhczxa.png"
              alt=""
            />
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
              1900 92 53
            </span>
          </div>
        </div>
      </div>
    </Grid>
  );
};

export default AdvisoryComponent;
