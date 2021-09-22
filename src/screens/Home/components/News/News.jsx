import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import News from "../../../../components/News/News";
import img1 from "../../../../assets/image/news/demo.png";
import img2 from "../../../../assets/image/news/demo1.png";
import img3 from "../../../../assets/image/news/demo2.png";
import img4 from "../../../../assets/image/news/demo3.png";
import Image from "material-ui-image";

const NewsComponent = () => {
  const history = useHistory();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleClickNews = () => {
    history.push(
      "/bai-viet/Giai-cuu-doanh-nghiep-thuy-san-mac-can-vi-COVID-19-0"
    );
  };
  const listsNews = arr.map((e, index) => {
    return (
      <Grid item lg={3} md={3} xs={12} onClick={handleClickNews}>
        <News
          img={img1}
          title="Giải cứu doanh nghiệp thủy sản ‘mắc cạn’ vì COVID-19"
          date="21/03/2021"
        />
      </Grid>
    );
  });

  const handleClick = () => {
    history.push("/danh-muc/tin-tuc");
  };
  return (
    <Grid id="news">
      <Grid className="wrapper-news mt-1">
        <div className="news-title  mb-4">
          <span>Tin tức</span>
        </div>
        <div>
          <Grid container spacing={3}>
            {listsNews}
          </Grid>
        </div>
      </Grid>
    </Grid>
  );
};

export default NewsComponent;
