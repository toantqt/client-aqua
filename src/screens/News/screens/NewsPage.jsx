import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import HeaderComponent from "../../../components/Header/Header.component";
import BannerCategoryComponent from "../../../components/Banner Category/BannerCategory.component";
import FooterComponent from "../../../components/Footer/Footer.component";
import DetailsNews from "../components/DetailsNews";
import { getDetailsNews } from "../../../api/API";
import "./news.css";
export default function NewsPage(props) {
  const slug = props.match.params.slug;
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState();
  useEffect(async () => {
    window.scrollTo(0, 0);
    await getDetailsNews(slug).then((res) => {
      setNews(res.data);
    });
  }, [slug]);
  const handleLoading = () => {
    setLoading(false);
  };

  return (
    <Grid>
      <HeaderComponent />
      <BannerCategoryComponent
        banner={[news?.banner]}
        title={news?.categoryName}
      />
      <Grid style={{ width: "70%", margin: "0 auto", marginTop: "20px" }}>
        <DetailsNews news={news} />
      </Grid>

      <Grid style={{ width: "100%", marginTop: "100px" }}>
        <FooterComponent />
      </Grid>
    </Grid>
  );
}
