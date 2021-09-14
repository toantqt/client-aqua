import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./header.css";
import { useHistory } from "react-router-dom";
import logo from "../../assets/image/logo.png";
export default function HeaderComponent() {
  const history = useHistory();
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
  return (
    <Grid>
      <Grid id="header-top">
        <Grid className="wrap-header">
          <div className="menu-header">
            <ul className="menu">
              <li className="social-connect">
                <Link to="/" className="mr-3">
                  <i class="fab fa-facebook"></i>
                </Link>
                <Link to="/" class="ml-3">
                  <i class="fab fa-youtube"></i>
                </Link>
              </li>

              <li>
                <Link to="/">
                  <i class="fas fa-search"></i>
                  <span className="ml-2">Tìm kiếm</span>
                </Link>
              </li>
              <li>
                <Link to="/danh-muc/lien-ket-dao-tao">
                  <i class="fas fa-briefcase"></i>
                  <span className="ml-2">Liên kết đào tạo</span>
                </Link>
              </li>

              <li>
                <Link to="/danh-muc/thong-tin-tuyen-dung-va-lien-he">
                  <i class="fas fa-phone-alt"></i>
                  <span className="ml-2">Thông tin tuyển dụng và liên hệ</span>
                </Link>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
      <Grid id="header">
        <Grid className="wrap-header">
          <div className="menu-header">
            <ul className="menu">
              <li className="menu-item menu-logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/">
                  <span>Trang chủ</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/danh-muc/gioi-thieu">
                  <span>Giới thiệu</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/danh-muc/thanh-tich">
                  <span>Thành tích</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/danh-muc/tin-tuc">
                  <span>Tin tức </span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/danh-muc/quy-trinh-nuoi-tom">
                  <span>Quy trình nuôi tôm</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/tom-giong">
                  <span>Tôm giống </span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/san-pham">
                  <span>Sản phẩm </span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/danh-muc/hinh-anh-video">
                  <span>Hình ảnh/video </span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/danh-muc/kien-thuc">
                  <span>Kiến thức </span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/danh-muc/van-phong-doi-tac">
                  <span>Văn phòng/ đối tác </span>
                </Link>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
