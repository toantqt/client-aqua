import React, { useState, useEffect } from "react";
import "./slider.css";
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";
import Image from "material-ui-image";
import { getAllBanner } from "../../../../api/AdminAPI";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const SliderBanner = (props) => {
  const [banner, setBanner] = useState([]);
  let settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  useEffect(async () => {
    await getAllBanner().then((res) => {
      setBanner(res.data);
    });
  }, []);

  console.log(banner);

  const listsBanner = banner?.map((e, index) => {
    return (
      <div className="banner-img" key={index}>
        <div style={{ width: "100%", height: "100%" }}>
          {/* <ImageComponent url={e.image.url} /> */}
          <Image
            src={e?.banner?.image?.url}
            style={{
              width: "100%",
              height: "100%",
              paddingTop: "0px !important",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    );
  });
  return (
    <Grid style={{ width: "100%", height: "500px" }} id="slider-banner">
      <Slider {...settings}>{listsBanner}</Slider>
    </Grid>
  );
};

export default SliderBanner;
