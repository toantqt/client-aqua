import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import "./contact.css";
export default function Contactpage(props) {
  useEffect(async () => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Grid style={{ width: "65%", margin: "0 auto" }} id="contact">
      <Grid container spacing={1}>
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
          style={{ width: "100%", height: "500px" }}
          className="img-contact"
        >
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
        </Grid>
        <Grid item lg={12} md={12} xs={12} style={{ textAlign: "center" }}>
          <div className="mb-3">
            <span
              style={{ fontSize: "30px", fontWeight: "500", color: "#0061b0" }}
            >
              CTY TNHH_TM_DV Xử lý nước sạch AQUA VIỆT NAM.
            </span>
          </div>
          <div>
            <span style={{ fontSize: "18px", fontWeight: "500" }}>
              Địa chỉ: 24/30 Lý Tự Trọng, Phường An Cư,Quận Ninh Kiều,TP Cần
              Thơ,VN
            </span>
          </div>
          <div style={{ fontSize: "18px", fontWeight: "500" }}>
            <span>Điện thoại: 0978 590 952</span>
          </div>
          <div style={{ fontSize: "18px", fontWeight: "500" }}>
            <span>Email: maylocnuocaquacantho@gmail.com</span>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
