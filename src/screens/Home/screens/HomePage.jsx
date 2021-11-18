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
import banner from "../../../assets/image/banner/banner.png";
import ReasonComponent from "../components/Reason/Reason.component";
import WarningComponent from "../components/Warning/Warning.component";
import ContactComponent from "../components/Contact/Contact.component";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <Grid>
      <HeaderComponent />
      <SliderBanner banner={[banner]} />
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
