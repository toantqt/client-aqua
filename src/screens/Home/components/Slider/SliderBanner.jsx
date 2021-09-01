import React, { useState, useEffect } from "react";
import "./slider.css";
import Grid from "@material-ui/core/Grid";
import Slider from "react-slick";
import ImageComponent from "../../../../components/Image/Image.component";
import logo from "../../../../assets/image/logo.png";

const SliderBanner = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const listsBanner = props?.banner?.map((e, index) => {
    return (
      <div className="banner-img">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <ImageComponent url={e.image.url} />
        </div>
        <div className="bg-title"></div>
        <div className="banner-title">
          <div className="head-title">
            <span>QUY TRÌNH NUÔI TÔM SẠCH</span>
          </div>
          <div className="mt-3">
            <img src={logo} width="79%" />
          </div>
          <div className="bottom-title mt-3">
            <span>
              Bằng sự tận tâm với người nông dân, lấy thành công của người nuôi
              trồng thuỷ sản làm tiêu chí để thành công cho công ty
            </span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <Grid style={{ width: "100%", height: "550px" }}>
      <Slider {...settings}>{listsBanner}</Slider>
    </Grid>
  );
};

export default SliderBanner;
