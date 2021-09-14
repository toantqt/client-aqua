import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import HeaderComponent from "../../../components/Header/Header.component";
import BannerCategoryComponent from "../../../components/Banner Category/BannerCategory.component";
import FooterComponent from "../../../components/Footer/Footer.component";
import { getHomeBanner, getCategory } from "../../../api/API";
import ClientRoutes from "../../../routes/ClientRoutes";
import "./category.css";

export default function CategoryPage(props) {
  const params = props.match.params.slug;

  const [banner, setBanner] = useState([]);
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    window.scrollTo(0, 0);
    setCategory();
    await getHomeBanner(params).then((res) => {
      console.log(res);
      setBanner(res.data);
    });
    await getCategory(params).then((res) => {
      setCategory(res.data);
    });
  }, [params]);
  const handleLoading = () => {
    setLoading(false);
  };

  return (
    <Grid>
      <HeaderComponent />
      <BannerCategoryComponent banner={banner} title={category?.categoryName} />
      <Grid style={{ width: "70%", margin: "0 auto", marginTop: "20px" }}>
        <div className="head-name">
          <Link to="/">
            <span className="head-item">Trang chủ</span>
          </Link>
          <i className="fas fa-chevron-right ml-2 mr-2"></i>
          <span className="head-item">{category?.categoryName}</span>
        </div>
        <div className="mt-5">
          {/* {loading ? <LoadingComponent /> : <></>} */}
          <ClientRoutes
            category={category}
            loading={loading}
            handleLoading={handleLoading}
          />
        </div>
      </Grid>

      <Grid style={{ width: "100%", marginTop: "100px" }}>
        <FooterComponent />
      </Grid>
    </Grid>
  );
}
