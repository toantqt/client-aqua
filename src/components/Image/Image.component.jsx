import React, { useState, useEffect } from "react";
import Image from "material-ui-image";
import CircularProgress from "@material-ui/core/CircularProgress";

const ImageComponent = (props) => {
  return (
    <Image
      src={props.url}
      style={{
        width: "100%",
        height: "100%",
        paddingTop: "0px !important",
        objectFit: "contain",
      }}
    />
  );
};

export default ImageComponent;
