import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import about1 from "../../../../assets/image/about/1.png";
import about2 from "../../../../assets/image/about/2.png";
import Image from "material-ui-image";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

const AboutUSComponent = () => {
  return (
    <Grid className="mt-2 mb-5">
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
                    height: "100%",
                  }}
                  imageStyle={{
                    position: "none !important",
                    height: "100%",
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
              <div className="header-title ">
                <p>Giới thiệu về</p>
                <p>Trúc Anh BiOtech</p>
              </div>

              <div className="bottom-title">
                <span>
                  Công ty TNHH CNSH Trúc Anh, tiền thân là công ty TNHH SX & TM
                  Trúc Anh, được thành lập năm 2004, theo giấy phép kinh doanh
                  và mã số thuế 1900295157 do Sở Kế hoạch & đầu tư Bạc Liêu cấp,
                  là đơn vị chuyên sản xuất kinh doanh thuốc thú y thuỷ sản; Tư
                  vấn, phát triển vùng nuôi...xác định tầm quan trọng của các
                  chế phẩm sinh học trong việc bảo vệ môi trường và tạo ra sản
                  phẩm tôm sạch nên từ khi thành lập đến nay các chế phẩm sinh
                  học của công ty Trúc Anh luôn được nghiên cứu kỷ,
                </span>
              </div>
              <div className="bottom-btn mt-5">
                <Link to="/danh-muc/gioi-thieu">
                  <span>XEM THÊM</span>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default AboutUSComponent;
