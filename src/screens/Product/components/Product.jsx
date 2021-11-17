import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import SidebarComponent from "../../../components/Sidebar/Sidebar.component";
import AdvisoryComponent from "../../../components/Advisory/Advisory.component";
import ListsProductComponent from "../../../components/Lists Product/ListsProduct.component";
import "./product.css";
import ProductHighlightComponent from "../../../components/Product Highlight/ProductHighlight.component";

const Product = (props) => {
  const [subCategoryID, setSubCategoryID] = useState("");
  const [loading, setLoading] = useState(true);
  const handleChange = (id) => {
    if (subCategoryID !== id) {
      setSubCategoryID(id);
      setLoading(true);
    }
  };

  const handleLoading = (status) => {
    setLoading(status);
  };

  return (
    <Grid>
      <div>
        <Grid container spacing={4}>
          <Grid item lg={4} md={4} xs={12}>
            <SidebarComponent
              category={props?.category?.subCategory}
              handleChange={handleChange}
            />
            <AdvisoryComponent />
            <ProductHighlightComponent />
          </Grid>
          <Grid item lg={8} md={8} xs={12}>
            <ListsProductComponent
              categoryID={props?.category?._id}
              subCategoryID={subCategoryID}
              loading={loading}
              handleLoading={handleLoading}
            />
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default Product;
