import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";

export default function WarningComponent() {
  const history = useHistory();
  return (
    <Grid className="warning">
      <div className="header-title">
        <span>CẢNH BÁO</span>
      </div>
      <div className="warning-video mt-3">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=7FRaJdKn1Ic"
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    </Grid>
  );
}
