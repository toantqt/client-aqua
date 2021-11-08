import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./header.css";
import { useHistory } from "react-router-dom";
import logo from "../../assets/image/logo.png";
import SearchComponent from "../Search/Search.component";
import SearchHeader from "../../screens/Home/components/Search/SearchHeader";
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
        <div className="wrap-body">
          <Grid container spacing={2}>
            <Grid item lg={2}>
              <div className="header-logo">
                <Link to="/">
                  <img src={logo} alt="" width="100%" />
                </Link>
              </div>
            </Grid>

            <Grid item lg={8}>
              <SearchHeader />
            </Grid>
            <Grid item lg={2}>
              <div
                className=" float-right mt-4"
                style={{ fontSize: "18px", fontWeight: "500" }}
              >
                <div>
                  <span>Phòng kinh doanh</span>
                </div>
                <div>
                  <span>0907888428</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Grid id="header">
        <div className="wrap-body">
          <ul className="header-option">
            <li>
              <Link to="/">DANH MỤC SẢN PHẨM</Link>
            </li>
            <li>
              <Link to="/">TRANG CHỦ</Link>
            </li>
            <li>
              <Link to="/">GIỚI THIỆU</Link>
            </li>
            <li>
              <Link to="/">TIN TỨC</Link>
            </li>
            <li>
              <Link to="/">KỸ THUẬT NUÔI TRỒNG</Link>
            </li>
            <li>
              <Link to="/">HỆ THỐNG CỬA HÀNG</Link>
            </li>
            <li>
              <Link to="/">LIÊN HỆ</Link>
            </li>
          </ul>
        </div>
      </Grid>
      <SearchComponent open={open} handleClose={handleClose} />
    </Grid>
  );
}
