import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getImage } from "../../../../api/API";
import CircularProgress from "@material-ui/core/CircularProgress";

const Lirary = (props) => {
  const [subCategory, setSubCategory] = useState([]);
  const [active, setActive] = useState();
  const [subCategoryID, setSubCategoryID] = useState();
  const [categoryID, setCategoryID] = useState();
  const [type, setType] = useState(0);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState([]);

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
        <></>
      )}
    </Grid>
  );
};

export default Lirary;
