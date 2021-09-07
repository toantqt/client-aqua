import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import SidebarComponent from "../../../components/Sidebar/Sidebar.component";

const Product = (props) => {
  return (
    <Grid>
      <div>
        <Grid container spacing={2}>
          <Grid item lg={3} md={3} xs={12}>
            <SidebarComponent category={props?.category?.subCategory} />
          </Grid>
          <Grid item lg={9} md={9} xs={12}>
            ddd
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default Product;
