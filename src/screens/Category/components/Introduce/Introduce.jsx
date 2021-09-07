import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getIntroduce } from "../../../../api/API";
import Image from "material-ui-image";
import "./introduce.css";
const Introduce = (props) => {
  const [introduce, setIntroduce] = useState();
  useEffect(async () => {
    await getIntroduce().then((res) => {
      setIntroduce(res.data);
    });
  }, []);
  return (
    <Grid className="mt-5 mb-5">
      <div className="wrap-aboutUs">
        <Grid container spacing={2}>
          <Grid item lg={6} md={6} xs={12}>
            <div className="wrap-content">
              <div className="header-title ">
                <p>Giới thiệu về</p>
                <p>Trúc Anh BiOtech</p>
              </div>
              <div className="mt-2 mb-2 middle-title">
                <span>Dịch vụ tôm giống thủy sản chất lượng cao.</span>
              </div>

              <div
                dangerouslySetInnerHTML={{ __html: introduce?.description }}
                style={{ fontSize: "16px" }}
              ></div>
            </div>
          </Grid>
          <Grid item lg={6} md={6} xs={12}>
            <div style={{ position: "relative" }}>
              <div className="img mt-3">
                <Image
                  src={introduce?.thumbnail.url}
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
              <div className="bg-img " style={{ float: "right" }}></div>
            </div>
          </Grid>
        </Grid>
      </div>
      <div className="introduce-content">
        <div className="introduce-title">
          <span>Giá trị cốt lõi</span>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: introduce?.value }}
          style={{ fontSize: "16px" }}
        ></div>
      </div>

      <div className="introduce-content">
        <div className="introduce-title">
          <span>Triết lý</span>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: introduce?.philosophy }}
          style={{ fontSize: "16px" }}
        ></div>
      </div>

      <div className="introduce-content">
        <div className="introduce-title">
          <span>Tầm nhìn</span>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: introduce?.vision }}
          style={{ fontSize: "16px" }}
        ></div>
      </div>

      <div className="introduce-content">
        <div className="introduce-title">
          <span>Sứ mệnh</span>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: introduce?.mission1 }}
          style={{ fontSize: "16px" }}
        ></div>
        <div className="mt-3 mb-3">
          <Image
            src={introduce?.imgMission.url}
            style={{
              position: "none !important",
              objectFit: "cover",
              width: "100%",
              paddingTop: "0px !important",
              height: "500px",
              borderRadius: "6px",
            }}
            imageStyle={{
              position: "none !important",
              height: "100%",
              borderRadius: "6px",
            }}
          />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: introduce?.mission2 }}
          style={{ fontSize: "16px" }}
        ></div>
      </div>
    </Grid>
  );
};

export default Introduce;
