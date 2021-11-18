import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import product from "../../assets/image/product/product.png";
import Image from "material-ui-image";

export default function ProductComponent() {
  const [arr, setArray] = useState([1, 2, 3, 4]);

  const listsProduct = arr.map((e, index) => {
    return (
      <Grid item lg={3} md={3} xs={12} key={index}>
        <div className="wrap-product">
          <div className="img-product">
            <Image
              src={product}
              style={{
                width: "100%",
                height: "100%",
                paddingTop: "0px !important",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="name-product">
            <span>MÁY LỌC NƯỚC AQUADM - RO 2 VÒI - TỦ 4D</span>
          </div>
        </div>
      </Grid>
    );
  });
  return (
    <Grid className="product">
      <div className="header-title">
        <span>SẢN PHẨM</span>
      </div>
      <div className="mt-3">
        <Grid container spacing={3}>
          {listsProduct}
        </Grid>
      </div>
    </Grid>
  );
}
