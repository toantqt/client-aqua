import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import prc1 from "../../../../assets/image/process/process1.png";
import prc2 from "../../../../assets/image/process/process2.png";
import prc3 from "../../../../assets/image/process/process3.png";
import prc4 from "../../../../assets/image/process/process4.png";
import prc5 from "../../../../assets/image/process/process5.png";
import prc6 from "../../../../assets/image/process/process6.png";
import prc7 from "../../../../assets/image/process/process7.png";
import prc8 from "../../../../assets/image/process/process8.png";

const ProcessComponent = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/danh-muc/quy-trinh-nuoi-tom");
  };
  return (
    <Grid id="process">
      <div className="wrap-process" style={{ position: "relative" }}>
        <div className="bg-process process1">
          <div className="process-main-title">
            <span>Quy trình nuôi tôm Trúc Anh</span>
          </div>
        </div>
        <div className="bg-process process2"></div>
        <div className="process-item">
          <Grid container spacing={4}>
            <Grid item lg={3} md={3} xs={12}>
              <div
                style={{
                  position: "relative",
                }}
              >
                <div className="process-image">
                  <Image
                    src={prc1}
                    style={{
                      width: "100%",
                      height: "100%",
                      paddingTop: "0px !important",
                      objectFit: "cover",
                      borderRadius: " 15px 15px 0px 0px",
                    }}
                  />
                </div>
                <div className="process-icon">
                  <div className="icon">
                    <img src={prc4} alt="" />
                  </div>
                </div>
                <div className="process-title">
                  <div className="p-title mt-5 mb-2">
                    <span>Vùng Miền</span>
                  </div>
                  <div className="p-content mb-3">
                    <span>Kỹ thuật nuôi dựa vào vị trí địa lý </span>
                  </div>
                  <div className="p-function">
                    <div className="p-function-icon" onClick={handleClick}>
                      <i class="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item lg={3} md={3} xs={12}>
              <div
                style={{
                  position: "relative",
                }}
              >
                <div className="process-image">
                  <Image
                    src={prc2}
                    style={{
                      width: "100%",
                      height: "100%",
                      paddingTop: "0px !important",
                      objectFit: "cover",
                      borderRadius: " 15px 15px 0px 0px",
                    }}
                  />
                </div>
                <div className="process-icon">
                  <div className="icon">
                    <img src={prc5} alt="" />
                  </div>
                </div>
                <div className="process-title">
                  <div className="p-title mt-5 mb-2">
                    <span>Thời Tiết</span>
                  </div>
                  <div className="p-content mb-3">
                    <span>Chăm sóc tôm đúng cách khi thời tiết thay đổi </span>
                  </div>
                  <div className="p-function">
                    <div className="p-function-icon" onClick={handleClick}>
                      <i class="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item lg={3} md={3} xs={12}>
              <div
                style={{
                  position: "relative",
                }}
              >
                <div className="process-image">
                  <Image
                    src={prc3}
                    style={{
                      width: "100%",
                      height: "100%",
                      paddingTop: "0px !important",
                      objectFit: "cover",
                      borderRadius: " 15px 15px 0px 0px",
                    }}
                  />
                </div>
                <div className="process-icon">
                  <div className="icon">
                    <img src={prc6} alt="" />
                  </div>
                </div>
                <div className="process-title">
                  <div className="p-title mt-5 mb-2">
                    <span>Mùa vụ</span>
                  </div>
                  <div className="p-content mb-3">
                    <span>Giảm thiểu rủi ro, nâng cao hiệu quả nuôi tôm</span>
                  </div>
                  <div className="p-function">
                    <div className="p-function-icon" onClick={handleClick}>
                      <i class="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item lg={3} md={3} xs={12}>
              <div
                style={{
                  position: "relative",
                }}
              >
                <div className="process-image">
                  <Image
                    src={prc8}
                    style={{
                      width: "100%",
                      height: "100%",
                      paddingTop: "0px !important",
                      objectFit: "cover",
                      borderRadius: " 15px 15px 0px 0px",
                    }}
                  />
                </div>
                <div className="process-icon">
                  <div className="icon">
                    <img src={prc7} alt="" />
                  </div>
                </div>
                <div className="process-title">
                  <div className="p-title mt-5 mb-2">
                    <span>Kiến thức</span>
                  </div>
                  <div className="p-content mb-3">
                    <span>Cập nhật kiến thức nuôi tôm sạch</span>
                  </div>
                  <div className="p-function">
                    <div className="p-function-icon" onClick={handleClick}>
                      <i class="fas fa-arrow-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export default ProcessComponent;
