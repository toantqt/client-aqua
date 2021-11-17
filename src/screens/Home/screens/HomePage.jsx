import React, { useState, useEffect } from "react";
import HeaderComponent from "../../../components/Header/Header.component";
import SliderBanner from "../components/Slider/SliderBanner";
import { getHomeBanner } from "../../../api/API";
import Grid from "@material-ui/core/Grid";
import AboutUSComponent from "../components/About/AboutUs.component";
import "./home.css";
import "../../../assets/style/style.css";
import NewsComponent from "../components/News/News";
import BannerHomeComponent from "../components/Banner/BannerHome.component";
import ProcessComponent from "../components/Process/Process.component";
import ProductComponent from "../components/Product/Product.component";
import FooterComponent from "../../../components/Footer/Footer.component";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollTop from "../../../components/Scroll Top/ScrollTop";
import banner from "../../../assets/image/banner/banner.png";

export default function HomePage() {
  const [banner1, setBanner1] = useState([]);
  const [banner2, setBanner2] = useState();
  const [banner3, setBanner3] = useState();
  const [banner4, setBanner4] = useState();

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  useEffect(async () => {
    window.scrollTo(0, 0);
    await getHomeBanner("trang-chu").then((res) => {
      console.log(res.data);
      for (let item of res.data) {
        switch (item.index) {
          case 1:
            setBanner1((banner1) => [...banner1, item]);
            break;
          case 2:
            setBanner2(item);
            break;
          case 3:
            setBanner3(item);
            break;
          case 4:
            setBanner4(item);
            break;
        }
      }
    });
  }, []);

  return (
    <Grid>
      <HeaderComponent />
      <SliderBanner banner={[banner]} />
      <ScrollTop />
      <Grid className="wrap-body">
        <AboutUSComponent />
        <div>
          <NewsComponent />
        </div>
      </Grid>

      <Grid style={{ width: "100%", marginTop: "100px" }}>
        <FooterComponent />
      </Grid>
    </Grid>
  );
}
