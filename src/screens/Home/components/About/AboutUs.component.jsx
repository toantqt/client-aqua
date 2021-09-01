import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import about1 from "../../../../assets/image/about/1.png";
import about2 from "../../../../assets/image/about/2.png";
import Image from "material-ui-image";
import CircularProgress from "@material-ui/core/CircularProgress";

const AboutUSComponent = () => {
  return (
    <Grid className="mt-5 mb-5">
      <div className="wrap-aboutUs">
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} xs={12}>
            <div style={{ position: "relative" }}>
              <div className="img">
                <Image
                  src={about1}
                  loading={<CircularProgress size="50" color="secondary" />}
                  style={{
                    position: "none !important",
                    objectFit: "cover",
                    width: "100%",
                    paddingTop: "0px !important",
                    height: "550px",
                    borderRadius: "6px",
                  }}
                  imageStyle={{
                    position: "none !important",
                    height: "100%",
                    borderRadius: "6px",
                  }}
                />
              </div>
              <div className="bg-img"></div>

              <div className="title-img">
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                    <img src={about2} width="90%" alt="" />
                  </Grid>
                  <Grid item xs={9}>
                    <span
                      style={{
                        color: "white",
                        fontWeight: 500,
                        fontSize: "18px",
                      }}
                    >
                      Năng suất tôm thu hoạch đạt từ 100-120 tấn/ha/năm
                    </span>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div className="wrap-content">
              <div className="header-title mt-5">
                <p>Giới thiệu về</p>
                <p>Trúc Anh BiOtech</p>
              </div>
              <div className="mt-4 mb-4 middle-title">
                <span>Dịch vụ tôm giống thủy sản chất lượng cao.</span>
              </div>
              <div className="bottom-title">
                <span>
                  Bằng sự tận tâm với người nông dân, lấy thành công của người
                  nuôi trồng thuỷ sản làm tiêu chí để thành công cho công ty ...
                </span>
              </div>
              <div className="bottom-btn mt-5">
                <a href="">
                  <span>XEM THÊM</span>
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default AboutUSComponent;
