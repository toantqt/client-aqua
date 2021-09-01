import React, { useEffect } from "react";
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
                <a className="mr-3">
                  <i class="fab fa-facebook"></i>
                </a>
                <a class="ml-3">
                  <i class="fab fa-youtube"></i>
                </a>
              </li>
              <li>
                <a>
                  <i class="fas fa-user"></i>
                  <span className="ml-2">Đăng nhập</span>
                </a>
              </li>
              <li>
                <a>
                  <i class="fas fa-pencil-alt"></i>
                  <span className="ml-2">Đăng kí</span>
                </a>
              </li>
              <li>
                <a>
                  <i class="fas fa-search"></i>
                  <span className="ml-2">Tìm kiếm</span>
                </a>
              </li>
              <li>
                <a>
                  <i class="fas fa-briefcase"></i>
                  <span className="ml-2">Liên kết đào tạo</span>
                </a>
              </li>

              <li>
                <a>
                  <i class="fas fa-phone-alt"></i>
                  <span className="ml-2">Thông tin tuyển dụng và liên hệ</span>
                </a>
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
                <a>
                  <img src={logo} alt="" />
                </a>
              </li>
              <li className="menu-item">
                <a>
                  <span>Trang chủ</span>
                </a>
              </li>
              <li className="menu-item">
                <a>
                  <span>Giới thiệu</span>
                </a>
              </li>
              <li className="menu-item">
                <a>
                  <span>Thành tích</span>
                </a>
              </li>
              <li className="menu-item">
                <a>
                  <span>Tin tức </span>
                </a>
              </li>
              <li className="menu-item">
                <a>
                  <span>Quy trình nuôi tôm</span>
                </a>
              </li>
              <li className="menu-item">
                <a>
                  <span>Tôm giống </span>
                </a>
              </li>
              <li className="menu-item">
                <a>
                  <span>Sản phẩm </span>
                </a>
              </li>
              <li className="menu-item">
                <a>
                  <span>Hình ảnh/video </span>
                </a>
              </li>
              <li className="menu-item">
                <a>
                  <span>Kiến thức </span>
                </a>
              </li>
              <li className="menu-item">
                <a>
                  <span>Văn phòng/ đối tác </span>
                </a>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
