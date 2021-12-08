import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import r1 from "../../../../assets/image/reason/r1.png";
import ic1 from "../../../../assets/image/reason/icon1.png";
import ic2 from "../../../../assets/image/reason/icon2.png";
import ic3 from "../../../../assets/image/reason/icon3.png";

export default function ReasonComponent() {
  return (
    <Grid container spacing={3} className="reason">
      <Grid item lg={6} md={6} xs={12}>
        <div className="content-reason">
          <div className="header-content">
            <span>LÝ DO NÊN CHỌN AQUA VIỆT NAM?</span>
          </div>
          <div className="mt-3">
            <Grid container spacing={3}>
              <Grid item lg={2} md={2} xs={3}>
                <div>
                  <img src={ic1} alt="" width="100%" />
                </div>
              </Grid>
              <Grid item lg={10} md={10} xs={9}>
                <div className="top-content">
                  <span>TƯ VẤN NHIỆT TÌNH</span>
                </div>
                <div className="bottom-content">
                  <span>
                    Chất lượng của dịch vụ cùng thái độ chuyên nghiệp của nhân
                    viên chính là sức mạnh của Aqua Việt Nam
                  </span>
                </div>
              </Grid>
              <Grid item lg={2} md={2} xs={3}>
                <div>
                  <img src={ic2} alt="" width="100%" />
                </div>
              </Grid>
              <Grid item lg={10} md={10} xs={9}>
                <div className="top-content">
                  <span>SẢN PHẨM CHẤT LƯỢNG</span>
                </div>
                <div className="bottom-content">
                  <span>
                    Chất lượng của dịch vụ cùng thái độ chuyên nghiệp của nhân
                    viên chính là sức mạnh của Aqua Việt Nam
                  </span>
                </div>
              </Grid>
              <Grid item lg={2} md={2} xs={3}>
                <div>
                  <img src={ic3} alt="" width="100%" />
                </div>
              </Grid>
              <Grid item lg={10} md={10} xs={9}>
                <div className="top-content">
                  <span>GIÁ CẢ HỢP LÝ</span>
                </div>
                <div className="bottom-content">
                  <span>
                    Chất lượng của dịch vụ cùng thái độ chuyên nghiệp của nhân
                    viên chính là sức mạnh của Aqua Việt Nam
                  </span>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Grid>
      <Grid item lg={6} md={6} xs={12}>
        <div className="image-reason">
          <img src={r1} width="100%" />
        </div>
      </Grid>
    </Grid>
  );
}
