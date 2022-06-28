import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./header.css";
import { useHistory } from "react-router-dom";
import SearchComponent from "../Search/Search.component";
import facebookIcon from "../../assets/image/icon/facebook.png";
import youtubeIcon from "../../assets/image/icon/youtube.png";
import logo from "../../assets/image/logoaqua.png";

import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
const useStyles = makeStyles((theme) => ({
  list: {
    width: 300,
  },
  fullList: {
    width: "auto",
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
export default function HeaderComponent() {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(1);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
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

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const handleClickSidebar = (status, url) => {
    localStorage.setItem("active-h", status);
    if (url === "") {
      history.push("/");
    } else {
      history.push(`/danh-muc/${url}`);
    }
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <div style={{ textAlign: "center" }} className="mt-2 mb-1">
          <img src={logo} alt="" width="40%" />
        </div>
        <Divider />

        {[
          { name: "Trang chủ", slug: "" },
          { name: "Giới thiệu", slug: "gioi-thieu" },
          { name: "Sản phẩm", slug: "san-pham" },
          { name: "Cảnh báo", slug: "canh-bao" },
          { name: "Đại lý", slug: "dai-ly" },
          { name: "Tin tức", slug: "tin-tuc" },
          { name: "Tuyển dụng", slug: "tuyen-dung" },
          { name: "Liên hệ", slug: "lien-he" },
        ].map((text, index) => (
          <ListItem
            button
            key={text.name}
            onClick={() => {
              handleClickSidebar(1, text.slug);
            }}
          >
            <ListItemText
              primary={text.name}
              style={{ fontWeight: "500 !important" }}
            />
          </ListItem>
        ))}
        <Divider />
        {/* {productMobile} */}
        <Divider />

        <div
          style={{
            background: "#0160b0 ",
            color: "white",
            padding: "10px",
            fontWeight: "500",
            bottom: 0,
            height: "300px",
          }}
        >
          <div>
            <span style={{ color: "#ffff00" }}>
              CÔNG TY TNHH THƯƠNG MẠI DỊCH VỤ XỬ LÝ NƯỚC SẠCH AQUA VIỆT NAM
            </span>
          </div>
          <div className="mt-2">
            <span>
              24/30 Lý Tự Trọng, Phường An Cư, Quận Ninh Kiều, TP Cần Thơ
            </span>
          </div>
          <div className="mt-2">
            <span>maylocnuocaquacantho@gmail.com</span>
          </div>

          <div className="mt-2">
            <span>1900 92 53</span>
          </div>
        </div>
      </List>
    </div>
  );
  return (
    <>
      <Grid id="header-desktop">
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
      <Grid id="header-mobile">
        <Grid id="header-mobile-top">
          <Grid container spacing={1} style={{ height: "100%" }}>
            <Grid item lg={3} md={3} xs={3} style={{ paddingBottom: "0px" }}>
              <ul className="wrap-header-mb-top">
                <li className="icon-header-mb-top">
                  <img src={facebookIcon} alt="" width="80%" />
                </li>
                <li className="icon-header-mb-top">
                  <img src={youtubeIcon} alt="" width="80%" />
                </li>
              </ul>
            </Grid>
            <Grid
              item
              lg={9}
              md={9}
              xs={9}
              className="wrap-header-mb-top"
              style={{ paddingBottom: "0px" }}
            >
              <div className="content-header-mb-top">
                <div>
                  <i class="fas fa-phone-alt"></i> <span>1900 92 53</span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid id="header-mobile-bottom">
          <Grid container spacing={1} style={{ height: "100px" }}>
            <Grid item xs={2}>
              <Button
                className="button-menu"
                onClick={toggleDrawer("left", true)}
              >
                <MenuIcon fontSize="large" style={{ color: "#0061b0" }} />
              </Button>
              <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
            </Grid>
            <Grid item xs={8} style={{ height: "100px" }}>
              <div className="mobile-logo">
                <Link to="/">
                  <img src={logo} alt="" width="40%" />
                </Link>
              </div>
            </Grid>
            <Grid item xs={2}>
              <Button className="button-menu">
                <SearchIcon fontSize="large" style={{ color: "#0061b0" }} />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
