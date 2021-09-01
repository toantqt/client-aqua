import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import product from "../../../../assets/image/product/product1.png";
const ProductComponent = () => {
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
        <div className="product-main-title mt-3 mb-5">
          <span>Sản phẩm nuôi tôm trúc anh</span>
        </div>
        <div>
          <Grid container spacing={2}>
            {listsProduct}
          </Grid>
        </div>
      </div>
    </Grid>
  );
};

export default ProductComponent;
