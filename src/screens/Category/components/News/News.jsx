import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./news.css";
import ListsNewsComponent from "../../../../components/Lists News/ListsNews.component";
import { getNewsCategory, getImage, getVideo } from "../../../../api/API";
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
const useTabStyles = makeStyles({
  root: {
    justifyContent: "center",
  },
  scroller: {
    flexGrow: "0",
  },
});
const News = (props) => {
  const classes = useTabStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  const [subCategory, setSubCategory] = useState([]);
  const [active, setActive] = useState();
  const [subCategoryID, setSubCategoryID] = useState();
  const [categoryID, setCategoryID] = useState();
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [seeMore, setSeeMore] = useState(true);
  const [type, setType] = useState(1);

  console.log(news);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (props.location.search) {
      const search = queryString.parse(props.location.search);
      setPage(parseInt(search.page));
    }
  }, [props.location.search]);
  useEffect(() => {
    setType(1);
    if (props.category) {
      if (props.category.subCategory.length != 0) {
        setSubCategoryID(props.category.subCategory[0]?._id);
        setActive(props.category.subCategory[0]?.name);
      } else {
        setSubCategoryID("undefined");
      }
      setSubCategory(props.category.subCategory);
      setCategoryID(props.category._id);
      props.handleLoading(false);
    }
  }, [props.category]);
  useEffect(async () => {
    setNews([]);
    if (type != 2 && type != 3) {
      await getNewsCategory(categoryID, subCategoryID, page).then((res) => {
        console.log(res.data);
        if (res.data.length != 0) {
          for (let item of res.data) {
            setNews((news) => [...news, item]);
          }
          if (res.data.length < 9) {
            setSeeMore(false);
          } else {
            setSeeMore(true);
          }
        } else {
          setSeeMore(false);
        }
        setLoading(false);
      });
    }
  }, [categoryID, subCategoryID, page, type]);

  const handleClick = (name, subCategoryID, type) => {
    setActive(name);
    setSubCategoryID(subCategoryID);
    setNews([]);
    if (type != 1) {
      setLoading(false);
    } else {
      setLoading(true);
    }
    setType(type);
  };

  const handleClickSeeMore = () => {
    let a = page + 1;
    history.push({ search: `?page=${a}` });
  };
  const lists = subCategory.map((e, index) => {
    let padding = "12px 25px 12px 25px";
    if (subCategory.length <= 3) {
      padding = "12px 50px 12px 50px";
    }
    return (
      // <li
      // onClick={() => {
      //   handleClick(e.name, e._id);
      // }}
      //   className={"item " + (e.name === active ? "active" : "")}
      //   key={index}
      //   style={{ padding: padding }}
      // >
      //   <span>{e.name}</span>
      // </li>
      <Tab
        label={e.name}
        onClick={() => {
          handleClick(e.name, e._id, e.type || 1);
        }}
        key={index}
      />
    );
  });

  const handleLoading = (status) => {
    console.log(status);
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
        <>
          {type === 1 ? (
            <>
              {news.length !== 0 ? (
                <>
                  <ListsNewsComponent news={news} />
                  <div className="mt-4" style={{ textAlign: "center" }}>
                    {seeMore ? (
                      <Button
                        variant="outlined"
                        onClick={() => {
                          handleClickSeeMore();
                        }}
                        style={{
                          padding: "10px 30px 10px 30px",
                          color: "white",
                          backgroundColor: "#08999C",
                        }}
                      >
                        <span>Xem thêm</span>
                      </Button>
                    ) : (
                      <></>
                    )}
                  </div>
                </>
              ) : (
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    height: "300px",
                  }}
                  className="mt-5"
                >
                  <span style={{ color: "#6E7673" }}>
                    Hiện tại chưa có bài viết trong danh mục
                  </span>
                </div>
              )}
            </>
          ) : (
            <>
              <Library type={type} handleLoading={handleLoading} />
            </>
          )}
        </>
      )}
    </Grid>
  );
};

export default News;
