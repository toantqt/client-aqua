import React, { useState, useEffect } from "react";
import HeaderComponent from "../../../components/Header/Header.component";
import SliderBanner from "../components/Slider/SliderBanner";
import { getHomeBanner } from "../../../api/API";
import Grid from "@material-ui/core/Grid";
import AboutUSComponent from "../components/About/AboutUs.component";
import "./home.css";
import NewsComponent from "../components/News/News";
import BannerHomeComponent from "../components/Banner/BannerHome.component";
import ProcessComponent from "../components/Process/Process.component";
import ProductComponent from "../components/Product/Product.component";
import FooterComponent from "../../../components/Footer/Footer.component";
export default function HomePage() {
  const [banner1, setBanner1] = useState([]);
  const [banner2, setBanner2] = useState();
  const [banner3, setBanner3] = useState();
  const [banner4, setBanner4] = useState();

  useEffect(async () => {
    await getHomeBanner("home").then((res) => {
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
      <SliderBanner banner={banner1} />
      <Grid style={{ width: "80%", margin: "0 auto" }}>
        <AboutUSComponent />
        <NewsComponent />
      </Grid>
      <BannerHomeComponent
        banner={banner2}
        title="Bạn đồng hành với nhà nông"
      />

      <ProcessComponent />
      <BannerHomeComponent
        banner={banner3}
        title="Cung cấp nguồn giống tốt nhất cho người nông đân"
      />

      <Grid style={{ width: "70%", margin: "0 auto", marginTop: "50px" }}>
        <ProductComponent />
      </Grid>

      <BannerHomeComponent
        banner={banner4}
        title="Chúng tôi dẫn đầu trong
        “Quy trình nuôi tôm sạch”"
      />
      <Grid style={{ width: "100%", marginTop: "100px" }}>
        <FooterComponent />
      </Grid>
    </Grid>
  );
}
