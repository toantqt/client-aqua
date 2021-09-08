import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import HeaderComponent from "../../../components/Header/Header.component";
import FooterComponent from "../../../components/Footer/Footer.component";
import { getCategory } from "../../../api/API";
import ClientRoutes from "../../../routes/ClientRoutes";

export default function NewsPage(props) {
  const location = useLocation();
  const route = location.pathname.replace("/", "");
  const [category, setCategory] = useState();

  useEffect(async () => {
    window.scrollTo(0, 0);
    setCategory();
    await getCategory(route).then((res) => {
      setCategory(res.data);
    });
  }, [route]);

  return (
    <Grid>
      <HeaderComponent />
      <Grid
        style={{
          width: "80%",
          margin: "0 auto",
          marginTop: "20px",
        }}
      >
        <div className="head-name">
          <Link to="/">
            <span className="head-item">Trang chủ</span>
          </Link>
          <i className="fas fa-chevron-right ml-2 mr-2"></i>
          <span className="head-item">{category?.categoryName}</span>
        </div>
        <div className="mt-5">
          {/* {loading ? <LoadingComponent /> : <></>} */}
          <ClientRoutes category={category} />
        </div>
      </Grid>

      <Grid style={{ width: "100%", marginTop: "100px" }}>
        <FooterComponent />
      </Grid>
    </Grid>
  );
}
