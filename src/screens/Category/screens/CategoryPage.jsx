import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import HeaderComponent from "../../../components/Header/Header.component";
import FooterComponent from "../../../components/Footer/Footer.component";
import ClientRoutes from "../../../routes/ClientRoutes";
import "./category.css";

export default function CategoryPage(props) {
  const params = props.match.params.slug;

  const [banner, setBanner] = useState([]);
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(true);
  const [categoryName, setCategoryName] = useState("");
  useEffect(async () => {
    window.scrollTo(0, 0);
    switch (params) {
      case "gioi-thieu":
        localStorage.setItem("active-h", 2);
        setCategoryName("Giới thiệu");
        break;
      case "san-pham":
        localStorage.setItem("active-h", 3);
        setCategoryName("Sản phẩm");
        break;

      case "canh-bao":
        localStorage.setItem("active-h", 4);
        setCategoryName("Cảnh báo");
        break;
      case "dai-ly":
        localStorage.setItem("active-h", 5);
        setCategoryName("Đại lý");
        break;
      case "tin-tuc":
        localStorage.setItem("active-h", 6);
        setCategoryName("Tin tức");
        break;
      case "tuyen-dung":
        localStorage.setItem("active-h", 7);
        setCategoryName("Tuyển dụng");
        break;
      case "lien-he":
        localStorage.setItem("active-h", 8);
        setCategoryName("Liên hệ");
        break;
    }
  }, [params]);
  const handleLoading = () => {
    setLoading(false);
  };

  return (
    <Grid>
      <HeaderComponent />
      <Grid
        className="wrap-body"
        style={{
          marginTop: "20px",
          minHeight: "65vh",
        }}
      >
        <div className="head-name mb-3">
          <Link to="/">
            <span className="head-item">Trang chủ</span>
          </Link>
          <i className="fas fa-chevron-right ml-2 mr-2"></i>
          <span className="head-item">{categoryName}</span>
        </div>
        <ClientRoutes
          slug={params}
          loading={loading}
          handleLoading={handleLoading}
        />
      </Grid>

      <Grid style={{ width: "100%", marginTop: "100px" }}>
        <FooterComponent />
      </Grid>
    </Grid>
  );
}
