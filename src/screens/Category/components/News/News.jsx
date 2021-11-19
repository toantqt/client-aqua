import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./news.css";
// import ListsNewsComponent from "../../../../components/Lists News/ListsNews.component";
import {
  getNewsCategory,
  getImage,
  getVideo,
  getCategory,
} from "../../../../api/API";
import CircularProgress from "@material-ui/core/CircularProgress";
import queryString from "query-string";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Library from "../Library/Library";
import Cookies from "universal-cookie";
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
    if (type === 1) {
      await getNewsCategory(categoryID, page).then((res) => {
        setNews(res.data);
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

  const handleLoading = (status) => {
    setLoading(status);
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
        <></>
      )}
      {/* <ListsNewsComponent news={news} /> */}
    </Grid>
  );
}
