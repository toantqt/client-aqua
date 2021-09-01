import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import News from "../../../../components/News/News";
import img1 from "../../../../assets/image/news/demo.png";
import img2 from "../../../../assets/image/news/demo1.png";
import img3 from "../../../../assets/image/news/demo2.png";
import img4 from "../../../../assets/image/news/demo3.png";
import Image from "material-ui-image";

const NewsComponent = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  const listsNews = arr.map((e, index) => {
    return (
      <Grid item lg={4} md={4} xs={12}>
        <News
          img={img1}
          title="Giải cứu doanh nghiệp thủy sản ‘mắc cạn’ vì COVID-19"
          date="21/03/2021"
        />
      </Grid>
    );
  });
  return (
    <Grid id="news">
      <Grid className="wrapper-news mt-5">
        <div className="news-title mt-4 mb-4">
          <span>Tin tức hoạt động</span>
        </div>
        <div>
          <Grid container spacing={3}>
            {listsNews}
          </Grid>
        </div>
        <div className="mt-5">
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} xs={12}>
              <div
                className="news-category"
                style={{ height: "450px", position: "relative" }}
              >
                <div style={{ height: "100%" }}>
                  <Image
                    src={img3}
                    style={{
                      height: "100%",
                      objectFit: "cover",
                    }}
                    imageStyle={{ borderRadius: "15px" }}
                  />
                </div>
                <div className="title-category">
                  <span>Tin tức thủy sản</span>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <div
                className="news-category"
                style={{ height: "450px", position: "relative" }}
              >
                <div style={{ height: "100%" }}>
                  <Image
                    src={img4}
                    style={{
                      height: "100%",
                      objectFit: "cover",
                    }}
                    imageStyle={{ borderRadius: "15px" }}
                  />
                </div>
                <div className="title-category">
                  <span>Giá cả thị trường</span>
                </div>
              </div>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <div
                className="news-category"
                style={{ height: "450px", position: "relative" }}
              >
                <div style={{ height: "100%" }}>
                  <Image
                    src={img2}
                    style={{
                      height: "100%",
                      objectFit: "cover",
                    }}
                    imageStyle={{ borderRadius: "15px" }}
                  />
                </div>
                <div className="title-category">
                  <span>Quỹ hổ trợ </span> <br />
                  <span>người nuôi tôm</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default NewsComponent;
