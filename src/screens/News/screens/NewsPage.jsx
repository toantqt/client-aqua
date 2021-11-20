import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
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
      <DetailsNews news={news} />
    </Grid>
  );
}
