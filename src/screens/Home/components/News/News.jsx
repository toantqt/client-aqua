import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import News from "../../../../components/News/News";
import img1 from "../../../../assets/image/news/demo.png";
import img2 from "../../../../assets/image/news/demo1.png";
import img3 from "../../../../assets/image/news/demo2.png";
import img4 from "../../../../assets/image/news/demo3.png";
import Image from "material-ui-image";
import { getHomeNews } from "../../../../api/API";
import { covertDate } from "../../../../api/AdminAPI";

const NewsComponent = () => {
  const [news, setNews] = useState([]);
  useEffect(async () => {
    await getHomeNews().then((res) => {
      setNews(res.data);
    });
  }, []);
  const history = useHistory();
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleClickNews = (slug) => {
    history.push(`/bai-viet/${slug}`);
  };

  const listsNews = news.map((e, index) => {
    return (
      <Grid
        item
        lg={3}
        md={3}
        xs={12}
        onClick={() => {
          handleClickNews(e.slug);
        }}
      >
        <News
          img={e.thumbnail?.url}
          title={e.title}
          date={covertDate(e.created)}
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
