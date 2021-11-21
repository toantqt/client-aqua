import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./header.css";
import { useHistory } from "react-router-dom";
import SearchComponent from "../Search/Search.component";
import facebookIcon from "../../assets/image/icon/facebook.png";
import youtubeIcon from "../../assets/image/icon/youtube.png";
import logo from "../../assets/image/logoaqua.png";

export default function HeaderComponent() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(1);

  useEffect(() => {
    if (localStorage.getItem("active-h")) {
      setActive(parseInt(localStorage.getItem("active-h")));
    }
  }, [localStorage.getItem("active-h")]);

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

  const handleClickActive = (index) => {
    localStorage.setItem("active-h", index);
  };
  return (
    <Grid>
      <Grid id="header-top">
        <div className="wrap-body wrap-header">
          <Grid container spacing={1} style={{ height: "100%" }}>
            <Grid item lg={2} md={2} xs={12}>
              <div
                style={{ width: "60%", height: "100%" }}
                className="img-header-top"
              >
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
            <Grid item lg={4} md={4} xs={12}></Grid>
            <Grid item lg={6} md={6} xs={12}>
              <ul className="infor-contact">
                <li>
                  <i class="fas fa-search"></i>
                  <span>Tìm kiếm</span>
                </li>
                <li>
                  <i class="fas fa-envelope"></i>
                  <span>maylocnuocaquacantho@gmail.com</span>
                </li>
                <li>
                  <i class="fas fa-phone-alt"></i> <span>0978 590 952</span>
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
              <div style={{ width: "60%", height: "100%" }}>
                <ul>
                  <li style={{ textAlign: "left" }}>
                    <img src={logo} alt="" width="90%" />
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item lg={10} md={10} xs={12}>
              <ul className="menu">
                <li className="menu-item">
                  <Link to="/" className={active === 1 ? "active" : ""}>
                    <span>TRANG CHỦ</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/danh-muc/gioi-thieu"
                    className={active === 2 ? "active" : ""}
                    onClick={() => {
                      handleClickActive(2);
                    }}
                  >
                    <span>GIỚI THIỆU</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/danh-muc/san-pham"
                    className={active === 3 ? "active" : ""}
                    onClick={() => {
                      handleClickActive(3);
                    }}
                  >
                    <span>SẢN PHẨM </span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/danh-muc/canh-bao"
                    className={active === 4 ? "active" : ""}
                    onClick={() => {
                      handleClickActive(4);
                    }}
                  >
                    <span>CẢNH BÁO</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/danh-muc/dai-ly"
                    className={active === 5 ? "active" : ""}
                    onClick={() => {
                      handleClickActive(5);
                    }}
                  >
                    <span>ĐẠI LÝ </span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/danh-muc/tin-tuc"
                    className={active === 6 ? "active" : ""}
                    onClick={() => {
                      handleClickActive(6);
                    }}
                  >
                    <span>TIN TỨC</span>
                  </Link>
                </li>

                <li className="menu-item">
                  <Link
                    to="/danh-muc/tuyen-dung"
                    className={active === 7 ? "active" : ""}
                    onClick={() => {
                      handleClickActive(7);
                    }}
                  >
                    <span>TUYỂN DỤNG</span>
                  </Link>
                </li>
                <li className="menu-item">
                  <Link
                    to="/danh-muc/lien-he"
                    className={active === 8 ? "active" : ""}
                    onClick={() => {
                      handleClickActive(8);
                    }}
                  >
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
