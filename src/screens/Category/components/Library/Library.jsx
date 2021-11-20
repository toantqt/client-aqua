import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getImage, getVideo } from "../../../../api/API";
import CircularProgress from "@material-ui/core/CircularProgress";
// import News from "../../../../components/News/News";
import "../../../../components/News/news.css";
import moment from "moment";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
import ReactPlayer from "react-player";
import ModalVideoComponent from "../../../../components/Modal Video/ModalVideo.component";

const Lirary = (props) => {
  console.log(props);
  const [subCategory, setSubCategory] = useState([]);
  const [active, setActive] = useState();
  const [subCategoryID, setSubCategoryID] = useState();
  const [categoryID, setCategoryID] = useState();
  const [type, setType] = useState(0);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState([]);
  const [video, setVideo] = useState([]);
  const [urlPlay, setUrlPlay] = useState("");
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(true);

  const handleClickVideo = (url) => {
    setLight(true);
    setUrlPlay(url);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid className="wrap-news wrap-n mt-3">
      <div className="news" style={{ position: "relative" }}>
        <div className="img-news">
          <ReactPlayer
            url={props?.video?.video?.url}
            width="100%"
            height="100%"
            controls={true}
            light={light}
          />
        </div>
        <div
          className="img-bg"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0%",
          }}
        ></div>
      </div>
      <div className="title-n">
        <div className="title-news">
          <span>{props?.video?.title}</span>
        </div>
      </div>

      {/* <ModalVideoComponent
        url={urlPlay}
        open={open}
        handleClose={handleClose}
      /> */}
    </Grid>
  );
};

export default Lirary;
