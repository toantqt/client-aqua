import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getImage, getVideo } from "../../../../api/API";
import CircularProgress from "@material-ui/core/CircularProgress";
import News from "../../../../components/News/News";
import "../../../../components/News/news.css";
import moment from "moment";
import { SRLWrapper } from "simple-react-lightbox";
import SimpleReactLightbox from "simple-react-lightbox";
import ReactPlayer from "react-player";
import ModalVideoComponent from "../../../../components/Modal Video/ModalVideo.component";

const Lirary = (props) => {
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

  useEffect(() => {
    if (props.category) {
      if (props.category.subCategory.length != 0) {
        setSubCategoryID(props.category.subCategory[0]?._id);
        setActive(props.category.subCategory[0]?.name);
      } else {
        setSubCategoryID("undefined");
      }
      setSubCategory(props.category.subCategory);
      setCategoryID(props.category._id);
    }
  }, [props.category]);

  useEffect(async () => {
    if (type === 0) {
      await getImage().then((res) => {
        setImage(res.data);
      });
    } else if (type === 1) {
      await getVideo().then((res) => {
        setVideo(res.data);
      });
    }
    setLoading(false);
  }, [type]);

  const handleClick = (index, name) => {
    setType(index);
    setActive(name);
    setLoading(true);
  };

  const lists = subCategory.map((e, index) => {
    let padding = "12px 25px 12px 25px";
    if (subCategory.length <= 3) {
      padding = "12px 50px 12px 50px";
    }
    return (
      <li
        className={"item " + (e.name === active ? "active" : "")}
        key={index}
        style={{ padding: padding }}
        onClick={() => {
          handleClick(index, e.name);
        }}
      >
        <span>{e.name}</span>
      </li>
    );
  });

  const handlePlay = (event) => {
    console.log(event);
  };
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
      <Grid item lg={4} md={4} xs={12}>
        <SimpleReactLightbox>
          <SRLWrapper>
            <a href={props?.url}>
              <News
                img={e?.library[0]?.url}
                title={e?.title}
                date={moment(e?.created).format("DD/MM/YYYY")}
              />
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
        lg={4}
        md={4}
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
      <div className="subCategory">
        {subCategory.length !== 0 ? (
          <ul className="sub-item">{lists}</ul>
        ) : (
          <></>
        )}
      </div>
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
          {type === 0 ? listImage : listVideo}
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
