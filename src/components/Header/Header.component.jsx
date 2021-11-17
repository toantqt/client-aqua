import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./header.css";
import { useHistory } from "react-router-dom";
import logo from "../../assets/image/Logo.png";
import SearchComponent from "../Search/Search.component";
import facebookIcon from "../../assets/image/icon/facebook.png";
import youtubeIcon from "../../assets/image/icon/youtube.png";

export default function HeaderComponent() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const header = document.getElementById("header");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > 10) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  const handleClick = (param) => {
    if (param === "home") {
      history.push("/");
    } else {
      history.push(`/${param}`);
    }
  };

  const handleClickSearch = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Grid>
      <Grid id="header-top">
        <div className="wrap-body wrap-header">
          <Grid container spacing={1} style={{ height: "100%" }}>
            <Grid item lg={2} md={2} xs={12}>
              <div style={{ width: "60%", height: "100%" }}>
                <ul>
                  <li>
                    <img src={facebookIcon} alt="" />
                  </li>
                  <li>
                    <img src={youtubeIcon} alt="" />
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item lg={5} md={5} xs={12}></Grid>
            <Grid item lg={5} md={5} xs={12}>
              <ul className="infor-contact">
                <li>
                  <i class="fas fa-search"></i>
                  <span>Tìm kiếm</span>
                </li>
                <li>
                  <i class="fas fa-envelope"></i>
                  <span>aquavietnam@gmail.com</span>
                </li>
                <li>
                  <i class="fas fa-phone-alt"></i> <span>0978653366</span>
                </li>
              </ul>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid id="header">
        <div className="wrap-header wrap-body">
          <Grid container spacing={1} style={{ height: "100%" }}>
            <Grid item lg={2} md={2} xs={12}>
              {/* <ul>
                <li>
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </li>
              </ul> */}
            </Grid>
            <Grid item lg={10} md={10} xs={12}>
              <ul className="menu">
                <li className="menu-item">
                  <Link to="/">
                    <span>TRANG CHỦ</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/danh-muc/gioi-thieu">
                    <span>GIỚI THIỆU</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/danh-muc/tin-tuc">
                    <span>SẢN PHẨM </span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/danh-muc/quy-trinh-nuoi-tom">
                    <span>CẢNH BÁO</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/tom-giong">
                    <span>ĐẠI LÝ </span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/san-pham">
                    <span>TIN TỨC</span>
                  </Link>
                </li>

                <li className="menu-item">
                  <Link to="/danh-muc/van-phong-doi-tac">
                    <span>TUYỂN DỤNG</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/danh-muc/van-phong-doi-tac">
                    <span>LIÊN HỆ</span>
                  </Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <SearchComponent open={open} handleClose={handleClose} />
    </Grid>
  );
}
