import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import { Link } from "react-router-dom";

const AboutUSComponent = () => {
  return (
    <Grid className="mb-5 about">
      <div className="wrap-aboutUs">
        <Grid container spacing={4}>
          <Grid item lg={5} md={5} xs={12}>
            <div className="img">
              <Image
                src="https://res.cloudinary.com/aquavn/image/upload/v1637504204/dc69389d9cf857a60ee9_manrcd.jpg"
                style={{
                  width: "100%",
                  height: "100%",
                  paddingTop: "0px !important",
                  objectFit: "contain",
                }}
                imageStyle={{
                  position: "none !important",
                  height: "100%",
                }}
              />
            </div>
          </Grid>
          <Grid item lg={7} md={7} xs={12}>
            <div className="wrap-content">
              <div className="header-title">
                <span className="title-top">GIỚI THIỆU VỀ</span>
                <br />
                <span className="title-bottom">AQUA VIỆT NAM</span>
              </div>

              <div className="bottom-title mt-3">
                <div>
                  <span>
                    Với kinh nghiệm lâu năm, trình độ kỹ thuật và bí quyết công
                    nghệ, sau khi lấy mẫu nước, phân tích dựa trên kết quả phân
                    tích công ty chúng tôi đề xuất phương án và cung cấp cho quý
                    khách hàng những hệ thống xử lý phù hợp, tối ưu thỏa mãn mọi
                    yêu cầu cao nhất của khách hàng.
                  </span>
                </div>
                <div className="mt-3">
                  <span>
                    Chính vì thế, các thiết bị xử lý nước sạch, nước siêu sạch
                    của công ty chúng tôi đã và đang được khách hàng đánh giá
                    cao và ngày càng được ưu chuộng tại Việt Nam.
                  </span>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default AboutUSComponent;
