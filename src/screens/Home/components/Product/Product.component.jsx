import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import product from "../../../../assets/image/product/product1.png";
import Slider from "react-slick";

import { getHomeProduct } from "../../../../api/API";
const ProductComponent = () => {
  const history = useHistory();
  const [products, setProduct] = useState([]);
  useEffect(async () => {
    getHomeProduct().then((res) => {
      setProduct(res.data);
    });
  }, []);
  let settings = {
    dots: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesPerRow: 4,
    slidesToScroll: 1,
    dotsClass: `slick-dots product-dot`,
  };
  const handleClick = (id) => {
    history.push(`/chi-tiet-san-pham/${id}`);
  };
  const lists = products.map((e, index) => {
    return (
      <Grid item lg={3} md={3} xs={6} key={index} className="mt-3">
        <div
          className="product"
          onClick={() => {
            handleClick(e._id);
          }}
        >
          <div className="product-image">
            <Image
              src={e?.image[0]?.url}
              style={{
                width: "100%",
                height: "100%",
                paddingTop: "0px !important",
                objectFit: "cover",
                borderRadius: " 15px 15px 0px 0px",
              }}
              imageStyle={{ width: "100%", height: "100%" }}
            />
          </div>
          <div className="product-bg"></div>
          <div class="product-description">
            <div class="p-category">
              <span>Sản phẩm</span>
            </div>
            <div class="p-name">
              <span>{e?.name}</span>
            </div>
          </div>
        </div>
      </Grid>
    );
  });
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const listsProduct = arr.map((e, index) => {
    return (
      <Grid item lg={3} md={3} xs={6}>
        <div className="product">
          <div className="product-image">
            <Image
              src={product}
              style={{
                width: "100%",
                height: "100%",
                paddingTop: "0px !important",
                objectFit: "cover",
                borderRadius: " 15px 15px 0px 0px",
              }}
              imageStyle={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="product-bg"></div>
          <div class="product-description">
            <div class="p-category">
              <span>Khoáng</span>
            </div>
            <div class="p-name">
              <span>VIBOZYME PLUS</span>
            </div>
          </div>
        </div>
      </Grid>
    );
  });
  return (
    <Grid id="product">
      <div className="wrap-product">
        <div className="product-main-title mt-3 mb-3">
          <span>Sản phẩm nuôi tôm trúc anh</span>
        </div>
        <div>
          <Slider {...settings}>{lists}</Slider>
          {/* {listsProduct} */}
        </div>
      </div>
    </Grid>
  );
};

export default ProductComponent;
