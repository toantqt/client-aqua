import React, { useState, useEffect } from "react";
import Image from "material-ui-image";
import CircularProgress from "@material-ui/core/CircularProgress";

const ImageComponent = (props) => {
  return (
    <Image
      src={props.url}
      style={{ position: "none !important", height: "100%" }}
      imageStyle={{ objectFit: "initial" }}
    />
  );
};

export default ImageComponent;
