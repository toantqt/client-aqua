import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import AdminSlug from "../../../../resources/AdminSlug";
import queryString from "query-string";
import {
  updateBanner,
  getAllCategory,
  getDetailsBanner,
  addBanner,
} from "../../../../api/AdminAPI";
import SelectCategory from "../../../../components/Category Select/CategorySelect.component";
import SelectIndex from "../../../../components/Index Select/IndexSelect.component";
import ImagePreivewsComponent from "../../../../components/Image Previews/ImagePreviews.component";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";

export default function AddBanner(props) {
  const history = useHistory();
  const [banner, setBanner] = useState();
  const [defaultCatgory, setDefaultCategory] = useState({
    categoryName: "",
    _id: "",
  });
  const [category, setCategory] = useState([]);
  const [categoryID, setCategoryID] = useState("");
  const [index, setIndex] = useState(1);
  const [imagePreview, setImagePreview] = useState();
  const [display, setDisplay] = useState();
  useEffect(async () => {
    await getAllCategory().then((result) => {
      setCategory(result.data);
    });
    props.handleLoading(false);
  }, []);

  useEffect(() => {
    if (categoryID === "614af279d2ac34104096a0f4") {
      setDisplay("home");
    } else {
      setDisplay("category");
    }
  }, [categoryID]);

  const handleChangeCategory = (value) => {
    if (value !== "") {
      setCategoryID(value._id);
    } else {
      setCategoryID("");
    }
  };

  const handleChangeIndex = (value) => {
    if (value !== "") {
      setIndex(value.index);
    } else {
      setIndex("");
    }
  };

  const handleChangeImage = (event) => {
    if (event.target.type === "file") {
      let files = Array.from(event.target.files);
      files.forEach((file) => {
        let reader = new FileReader();
        console.log(reader.result);
        reader.onloadend = () => {
          setImagePreview({ url: reader.result, file: file });
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleSubmit = async () => {
    const data = {
      categoryID: categoryID,
      display: display,
      banner: imagePreview,
      index: index,
    };
    console.log(data);
    if (data.index === "" || data.categoryID === "" || !data.banner) {
      alert("Xin vui lòng điền đầy đủ thông tin");
    } else {
      await addBanner(data).then((res) => {
        history.push(AdminSlug.bannerManager);
      });
    }
  };

  return (
    <Grid>
      <div className="header-title mb-3">
        <span>Thêm mới banner </span>
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <label>Danh mục:</label>
            {defaultCatgory ? (
              <SelectCategory
                data={category}
                handleChange={handleChangeCategory}
              />
            ) : (
              <></>
            )}
          </Grid>
          <Grid item lg={3}>
            <label>Vị trí</label>
            <SelectIndex display={display} handleChange={handleChangeIndex} />
          </Grid>

          <Grid item lg={12}>
            <label>Hình ảnh</label>
            <ImagePreivewsComponent
              url={imagePreview}
              handleChangeImage={handleChangeImage}
            />
          </Grid>

          <Grid item lg={12} style={{ marginTop: "60px" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
              style={{ float: "right" }}
              onClick={handleSubmit}
            >
              Xác nhận
            </Button>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
