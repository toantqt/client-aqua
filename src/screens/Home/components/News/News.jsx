import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import news from "../../../../assets/image/news/news.png";
import NewsComponent from "../../../../components/News/News.component";

export default function News() {
  const history = useHistory();
  const arr = [1, 2, 3];

  const handleClick = () => {
    history.push("/danh-muc/bai-viet/thuong-hieu-aqua--qua-trinh-hinh-thanh-0");
  };
  const listsNews = arr.map((e, index) => {
    return (
      <Grid item lg={4} md={4} xs={12} onClick={handleClick}>
        <NewsComponent
          img={news}
          title="Trao tặng 25 máy lọc nước và 10.000 khẩu trang y tế trên địa bàn huyện Hậu Lộc"
          description="Sáng ngày 26/10/2021 Công ty CP Đầu tư xử lý nước sạch Aqua Việt Nam tiếp tục trao tặng cho Hội phụ nữ huyện, HPN các..."
        />
      </Grid>
    );
  });

  return (
    <Grid className="news">
      <div className="header-title">
        <span>Tin tức</span>
      </div>
      <div className="mt-3">
        <Grid container spacing={3}>
          {listsNews}
        </Grid>
      </div>
    </Grid>
  );
}
