import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Image from "material-ui-image";
import { getHomeProduct } from "../../api/API";
import slug from "../../resources/slug";

export default function ProductComponent() {
  const [product, setProduct] = useState([]);
  const history = useHistory();

  useEffect(async () => {
    await getHomeProduct().then((res) => {
      setProduct(res.data);
    });
  }, []);

  const handleClick = (id) => {
    history.push(`/danh-muc/chi-tiet-san-pham/${id}`);
  };
  const handleClickTitle = () => {
    history.push(slug.product);
  };

  const listsProduct = product.map((e, index) => {
    return (
      <Grid
        item
        lg={3}
        md={3}
        xs={12}
        key={index}
        onClick={() => handleClick(e?._id)}
      >
        <div className="wrap-product">
          <div className="img-product">
            <Image
              src={e?.image[0]?.url}
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
            <span>{e?.name}</span>
            <div className="price-product">
              <span>{e?.price.toLocaleString("it-IT")} đ</span>
            </div>
          </div>
        </div>
      </Grid>
    );
  });
  return (
    <Grid className="product">
      <div className="header-title">
        <span onClick={handleClickTitle}>SẢN PHẨM</span>
      </div>
      <div className="mt-3">
        <Grid container spacing={3}>
          {listsProduct}
        </Grid>
      </div>
    </Grid>
  );
}
