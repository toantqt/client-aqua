import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import news from "../../../../assets/image/news/news.png";
import NewsComponent from "../../../../components/News/News.component";
import { getHomeNews } from "../../../../api/API";
import slug from "../../../../resources/slug";
export default function News() {
  const history = useHistory();
  const arr = [1, 2, 3];
  const [news, setNews] = useState([]);

  useEffect(async () => {
    await getHomeNews().then((res) => {
      setNews(res.data);
    });
  }, []);

  const handleClick = (slug) => {
    history.push(`/danh-muc/bai-viet/${slug}`);
  };

  const handleClickTitle = () => {
    history.push(slug.news);
  };
  const listsNews = news.map((e, index) => {
    return (
      <Grid
        item
        lg={4}
        md={4}
        xs={12}
        onClick={() => handleClick(e?.slug)}
        key={index}
      >
        <NewsComponent
          img={e?.thumbnail?.url}
          title={e?.title}
          description=""
        />
      </Grid>
    );
  });

  return (
    <Grid className="news">
      <div className="header-title">
        <span onClick={handleClickTitle}>Tin tức</span>
      </div>
      <div className="mt-3">
        <Grid container spacing={3}>
          {listsNews}
        </Grid>
      </div>
    </Grid>
  );
}
