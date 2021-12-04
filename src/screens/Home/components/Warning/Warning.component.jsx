import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import { getHomeVideo } from "../../../../api/API";

export default function WarningComponent() {
  const history = useHistory();
  const [video, setVideo] = useState();

  useEffect(async () => {
    await getHomeVideo().then((res) => {
      setVideo(res.data[0]);
    });
  }, []);
  return (
    <Grid className="warning">
      <div className="header-title">
        <span>CẢNH BÁO</span>
      </div>
      <div className="warning-video mt-3">
        <ReactPlayer
          url={video?.video?.url}
          width="100%"
          height="100%"
          controls={true}
        />
      </div>
    </Grid>
  );
}
