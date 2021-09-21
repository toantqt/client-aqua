import React, { useState, useEffect } from "react";
import "./slider.css";
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";
import ImageComponent from "../../../../components/Image/Image.component";

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
  let settings = {
    dots: true,
    // autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
  };

  const listsBanner = props?.banner?.map((e, index) => {
    return (
      <div className="banner-img" key={index}>
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <ImageComponent url={e.image.url} />
        </div>
      </div>
    );
  });
  return (
    <Grid style={{ width: "100%", height: "550px" }} id="slider-banner">
      <Slider {...settings}>{listsBanner}</Slider>
    </Grid>
  );
};

export default SliderBanner;
