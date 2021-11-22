import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";

export default function ProductComponent() {
  const [arr, setArray] = useState([
    "https://res.cloudinary.com/aquavn/image/upload/v1637548480/may_loc_nuoc_3_kyfwgw.png",
    "https://res.cloudinary.com/aquavn/image/upload/v1637548480/may_loc_nuoc_2_npggvy.png",
    "https://res.cloudinary.com/aquavn/image/upload/v1637548509/may_nuoc_uong_f4xxmc.png",
    "https://res.cloudinary.com/aquavn/image/upload/v1637548480/may_loc_nuoc_3_kyfwgw.png",
  ]);
  const history = useHistory();

  const handleClick = () => {
    history.push("/danh-muc/chi-tiet-san-pham/619b054fd84191162055569b");
  };

  const listsProduct = arr.map((e, index) => {
    return (
      <Grid item lg={3} md={3} xs={12} key={index} onClick={handleClick}>
        <div className="wrap-product">
          <div className="img-product">
            <Image
              src={e}
              style={{
                width: "100%",
                height: "100%",
                paddingTop: "0px !important",
                objectFit: "cover",
              }}
              imageStyle={{ objectFit: "contain" }}
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
