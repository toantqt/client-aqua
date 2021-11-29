import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./news.css";
// import ListsNewsComponent from "../../../../components/Lists News/ListsNews.component";
import {
  getNewCategory,
  getImage,
  getVideo,
  getCategory,
} from "../../../../api/API";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Library from "../Library/Library";
import Cookies from "universal-cookie";
import ListsNewsComponent from "../../../../components/Lists News/ListsNews.component";
import ModalVideoComponent from "../../../../components/Modal Video/ModalVideo.component";

const useTabStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
  scroller: {
    flexGrow: "0",
  },
});
export default function News(props) {
  const classes = useTabStyles();
  const cookies = new Cookies();
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  const [subCategory, setSubCategory] = useState([]);
  const [active, setActive] = useState();
  const [categoryID, setCategoryID] = useState();
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [seeMore, setSeeMore] = useState(true);
  const [type, setType] = useState(1);
  const [video, setVideo] = useState([]);
  const [open, setOpen] = useState(false);
  const [urlPlay, setUrlPlay] = useState("");

  useEffect(async () => {
    if (props.slug) {
      await getCategory(props.slug).then((res) => {
        setSubCategory(res.data.subCategory);
        if (res.data.subCategory.length === 0) {
          setCategoryID(res.data._id);
        } else {
          setCategoryID(res.data.subCategory[0]._id);
        }
      });
    }
  }, [props.slug]);

  useEffect(async () => {
    setNews([]);
    if (type === 1) {
      await getNewCategory(categoryID, page).then((res) => {
        setNews(res.data);
      });
      setLoading(false);
    } else if (type === 2) {
      await getVideo().then((res) => {
        setVideo(res.data);
      });
      setLoading(false);
    }
  }, [categoryID]);

  const handleChange = (event, newValue) => {
    console.log(value);
    setValue(newValue);
  };

  const handleClick = (name, subCategoryID, type) => {
    cookies.set("active", name, { path: "/" });
    setActive(name);
    setCategoryID(subCategoryID);
    setLoading(true);
    setType(type);
  };

  const lists = subCategory.map((e, index) => {
    let padding = "12px 25px 12px 25px";
    if (subCategory.length <= 3) {
      padding = "12px 50px 12px 50px";
    }
    return (
      <Tab
        label={e.name}
        onClick={() => {
          handleClick(e.name, e._id, parseInt(e.type));
        }}
        key={index}
      />
    );
  });

  const handleClickNews = (slug) => {
    history.push(`/danh-muc/bai-viet/${slug}`);
  };

  const listsNews = news.map((e, index) => {
    return (
      <Grid
        item
        lg={3}
        md={3}
        xs={12}
        key={index}
        onClick={() => {
          handleClickNews(e?.slug);
        }}
      >
        <ListsNewsComponent
          img={e?.thumbnail?.url}
          title={e?.title}
          description=""
        />
      </Grid>
    );
  });

  const listsVideo = video.map((e, index) => {
    return (
      <Grid
        item
        lg={3}
        md={3}
        xs={12}
        key={index}
        onClick={() => {
          handleClickPlay(e?.video?.url);
        }}
      >
        <Library video={e} />
      </Grid>
    );
  });

  const handleClose = () => {
    setUrlPlay("");
    setOpen(false);
  };

  const handleClickPlay = (url) => {
    setUrlPlay(url);
    setOpen(true);
  };

  return (
    <Grid>
      <div className="subCategory">
        {subCategory.length !== 0 ? (
          // <ul className="sub-item">{lists}</ul>
          <AppBar position="static" className="sub-item">
            <Tabs
              classes={{ root: classes.root, scroller: classes.scroller }}
              value={value}
              onChange={handleChange}
              variant={"scrollable"}
              scrollButtons="auto"
            >
              {lists}
            </Tabs>
          </AppBar>
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
        <div className="mt-3">
          <Grid container spacing={2}>
            {type === 1 ? (
              listsNews
            ) : (
              <>
                {listsVideo}
                <ModalVideoComponent
                  url={urlPlay}
                  open={open}
                  handleClose={handleClose}
                />
              </>
            )}
          </Grid>
        </div>
      )}
      {/* <ListsNewsComponent news={news} /> */}
    </Grid>
  );
}
