import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./news.css";
import ListsNewsComponent from "../../../../components/Lists News/ListsNews.component";
import { getNewsCategory } from "../../../../api/API";
import CircularProgress from "@material-ui/core/CircularProgress";
import queryString from "query-string";
import Button from "@material-ui/core/Button";

const News = (props) => {
  const history = useHistory();
  const [subCategory, setSubCategory] = useState([]);
  const [active, setActive] = useState();
  const [subCategoryID, setSubCategoryID] = useState();
  const [categoryID, setCategoryID] = useState();
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [seeMore, setSeeMore] = useState(true);

  useEffect(() => {
    if (props.location.search) {
      const search = queryString.parse(props.location.search);
      setPage(parseInt(search.page));
    }
  }, [props.location.search]);
  useEffect(() => {
    if (props.category) {
      setSubCategory(props.category.subCategory);
      setActive(props.category.subCategory[0]?.name);
      setSubCategoryID(props.category.subCategory[0]?._id);
      setCategoryID(props.category._id);
      props.handleLoading(false);
    }
  }, [props.category]);
  console.log(subCategory);

  useEffect(async () => {
    await getNewsCategory(categoryID, subCategoryID, page).then((res) => {
      if (res.data.length != 0) {
        for (let item of res.data) {
          setNews((news) => [...news, item]);
        }
        setLoading(false);
        setSeeMore(true);
      } else {
        setSeeMore(false);
        setLoading(false);
      }
    });
  }, [subCategoryID, page]);

  const handleClick = (name, subCategoryID) => {
    setActive(name);
    setSubCategoryID(subCategoryID);
    setNews([]);
    setLoading(true);
  };
  console.log(seeMore);
  const handleClickSeeMore = () => {
    let a = page + 1;
    history.push({ search: `?page=${a}` });
  };
  const lists = subCategory.map((e, index) => {
    return (
      <li
        onClick={() => {
          handleClick(e.name, e._id);
        }}
        className={"item " + (e.name === active ? "active" : "")}
        key={index}
      >
        <span>{e.name}</span>
      </li>
    );
  });
  return (
    <Grid>
      <div className="subCategory">
        <ul className="sub-item">{lists}</ul>
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
              style={{ width: "100%", textAlign: "center", height: "300px" }}
              className="mt-5"
            >
              <span style={{ color: "#6E7673" }}>
                Hiện tại chưa có bài viết trong danh mục
              </span>
            </div>
          )}
        </>
      )}
    </Grid>
  );
};

export default News;
