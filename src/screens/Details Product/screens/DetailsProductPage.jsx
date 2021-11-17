import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import HeaderComponent from "../../../components/Header/Header.component";
import FooterComponent from "../../../components/Footer/Footer.component";
import Details from "../components/Details/Details";
import { getDetailsProduct } from "../../../api/API";

const DetailsProductPage = (props) => {
  const history = useHistory();
  const productID = props.match.params.productID;
  const [product, setProduct] = useState();
  useEffect(async () => {
    window.scrollTo(0, 0);
    await getDetailsProduct(productID).then((res) => {
      setProduct(res.data);
    });
  }, [productID]);

  console.log(product);

  return (
    <Grid>
      <HeaderComponent />
      <Grid
        style={{
          width: "80%",
          margin: "0 auto",
          marginTop: "20px",
        }}
      >
        <div className="head-name">
          <Link to="/">
            <span className="head-item">Trang chủ</span>
          </Link>
          <i className="fas fa-chevron-right ml-2 mr-2"></i>
          <span
            className="head-item"
            onClick={() => {
              history.push(`/${product?.category?.slug}`);
            }}
          >
            {product?.category?.categoryName}
          </span>
        </div>
        <div className="mt-5">
          <Details product={product} />
        </div>
      </Grid>
      <Grid style={{ width: "100%", marginTop: "100px" }}>
        <FooterComponent />
      </Grid>
    </Grid>
  );
};

export default DetailsProductPage;
