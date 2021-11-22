import React, { useState, useEffect } from "react";
import HeaderComponent from "../../../components/Header/Header.component";
import SliderBanner from "../components/Slider/SliderBanner";
import { getHomeBanner } from "../../../api/API";
import Grid from "@material-ui/core/Grid";
import AboutUSComponent from "../components/About/AboutUs.component";
import "./home.css";
import "../../../assets/style/style.css";
import NewsComponent from "../components/News/News";
import FooterComponent from "../../../components/Footer/Footer.component";
import ProductComponent from "../../../components/Product/Product.component";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollTop from "../../../components/Scroll Top/ScrollTop";
import ReasonComponent from "../components/Reason/Reason.component";
import WarningComponent from "../components/Warning/Warning.component";
import ContactComponent from "../components/Contact/Contact.component";

export default function HomePage() {
  const [banner, setBanner] = useState([
    "https://res.cloudinary.com/aquavn/image/upload/v1637549512/879a4a2d814a4a14135b_bnjevo.jpg",
    "https://res.cloudinary.com/aquavn/image/upload/v1637549512/1fee5ba690c15b9f02d0_l5ws37.jpg",
  ]);
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    localStorage.setItem("active-h", 1);
  }, []);

  return (
    <Grid>
      <HeaderComponent />
      <SliderBanner banner={banner} />
      <ScrollTop />
      <Grid className="wrap-body">
        <AboutUSComponent />
        <div className="mt-5 mb-5">
          <ProductComponent />
        </div>
      </Grid>
      <div className="bg-reason">
        <Grid className="wrap-body">
          <ReasonComponent />
        </Grid>
      </div>

      <Grid className="wrap-body">
        <div className="mt-5 mb-5">
          <NewsComponent />
        </div>
        <div className="mt-5 mb-5">
          <WarningComponent />
        </div>
      </Grid>
      <div className="mt-5 mb-5">
        <ContactComponent />
      </div>

      <Grid style={{ width: "100%", marginTop: "100px" }}>
        <FooterComponent />
      </Grid>
    </Grid>
  );
}
