import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getDetailsProduct } from "../../../api/API";
import GalleryComponent from "../components/Gallery/Gallery.component";
import "./details.css";
import DescriptionComponent from "../components/Description/Description.component";
import DetailsComponent from "../components/Deatails/Details.component";
export default function DetailsProduct(props) {
  const id = props.match.params.id;
  const [product, setProduct] = useState();
  useEffect(async () => {
    window.scrollTo(0, 0);
    if (id) {
      await getDetailsProduct(id).then((res) => {
        setProduct(res.data);
      });
    }
  }, [id]);

  return (
    <>
      {product ? (
        <div className="details-pd">
          <div className="wrap-content-pd">
            <Grid container spacing={2}>
              <Grid item lg={8} md={8} xs={6}>
                <GalleryComponent image={product?.product?.image} />
              </Grid>
              <Grid item lg={4} md={4} xs={6}>
                <DescriptionComponent data={product?.product} />
              </Grid>
            </Grid>
            <hr />
            <div className="pb-5">
              <DetailsComponent data={product?.product} />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
