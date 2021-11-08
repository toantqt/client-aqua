import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import HeaderComponent from "../../../components/Header/Header.component";
import "../../../assets/style/style.css";
import SidebarComponent from "../../../components/Sidebar/Sidebar.component";
import BannerSmallComponent from "../../../components/Banner/BannerSmall.component";
export default function HomePage(props) {
  return (
    <Grid>
      <HeaderComponent />
      <div className="wrap-body content-body mt-3">
        <Grid container spacing={3}>
          <Grid item lg={3}>
            <SidebarComponent />
            <BannerSmallComponent />
          </Grid>
          <Grid item lg={9}>
            <div
              style={{
                width: "100%",
                height: "1000px",
                backgroundColor: "#ccc",
              }}
            ></div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
