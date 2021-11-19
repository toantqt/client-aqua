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

  useEffect(async () => {
    setLoading(true);
    if (props?.type === 2) {
      await getImage().then((res) => {
        console.log(res.data);
        setImage(res.data);
      });
    } else if (props?.type === 3) {
      await getVideo().then((res) => {
        setVideo(res.data);
      });
    }
    setLoading(false);
  }, [props.type]);

  const handleClickVideo = (url) => {
    setLight(true);
    setUrlPlay(url);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const listImage = image.map((e, index) => {
    return (
      <Grid item lg={3} md={3} xs={12}>
        <SimpleReactLightbox>
          <SRLWrapper>
            <a href={props?.url}>
              {/* <News
                img={e?.library[0]?.url}
                title={e?.title}
                date={moment(e?.created).format("DD/MM/YYYY")}
              /> */}
            </a>
          </SRLWrapper>
        </SimpleReactLightbox>
      </Grid>
    );
  });
  const listVideo = video.map((e, index) => {
    return (
      <Grid
        item
        lg={3}
        md={3}
        xs={12}
        onClick={() => {
          handleClickVideo(e.video.url);
        }}
      >
        <Grid className="wrap-news">
          <div className="news">
            <div className="img">
              <ReactPlayer
                url={e.video.url}
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
          <div className="title">
            <span>{e?.title}</span>
          </div>
        </Grid>
      </Grid>
    );
  });

  return (
    <Grid>
      {loading ? (
        <div
          style={{
            width: "100%",
            height: "300px",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={3} className="mt-5">
          {props?.type === 2 ? listImage : listVideo}
        </Grid>
      )}
      <ModalVideoComponent
        url={urlPlay}
        open={open}
        handleClose={handleClose}
      />
    </Grid>
  );
};

export default Lirary;
