import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import AdminSlug from "../../../../resources/AdminSlug";
import queryString from "query-string";
import {
  updateBanner,
  getAllCategory,
  getDetailsBanner,
} from "../../../../api/AdminAPI";
import SelectCategory from "../../../../components/Category Select/CategorySelect.component";
import SelectIndex from "../../../../components/Index Select/IndexSelect.component";
import ImagePreivewsComponent from "../../../../components/Image Previews/ImagePreviews.component";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import TextField from "@material-ui/core/TextField";

export default function BannerManager(props) {
  const search = queryString.parse(props.location.search);
  const bannerID = search.id;
  const [banner, setBanner] = useState();
  const [defaultCatgory, setDefaultCategory] = useState();
  const [category, setCategory] = useState([]);
  const [categoryID, setCategoryID] = useState("");
  const [index, setIndex] = useState("");
  const [imagePreview, setImagePreview] = useState();
  useEffect(async () => {
    if (bannerID) {
      await getDetailsBanner(bannerID).then(async (res) => {
        setBanner(res.data);
        setImagePreview({ url: res.data.image.url });
        setIndex(res.data.index);
        setCategoryID(res.data.categoryID);
        await getAllCategory().then((result) => {
          setCategory(result.data);
          for (let item of result.data) {
            if (res.data.categoryID === item._id) {
              setDefaultCategory(item);
            }
          }
        });
      });

      props.handleLoading(false);
    }
  }, [bannerID]);

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
      index: index,
      image: imagePreview,
      bannerID: banner._id,
    };
    console.log(data);
    if (data.index === "" || data.categoryID === "") {
      alert("Xin vui lòng điền đầy đủ thông tin");
    } else {
      await updateBanner(data).then((res) => {
        console.log(res.data);
      });
    }
  };

  return (
    <Grid>
      <div className="header-title mb-3">
        <span>Cập nhật banner </span>
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item lg={4}>
            <label>Danh mục:</label>
            {defaultCatgory ? (
              <TextField
                id="outlined-basic"
                variant="outlined"
                style={{ width: "100%" }}
                key={defaultCatgory?.categoryName}
                defaultValue={defaultCatgory?.categoryName}
                disabled={true}
              />
            ) : (
              <></>
            )}
          </Grid>
          <Grid item lg={3}>
            <label>Vị trí</label>
            <SelectIndex
              display={banner?.display}
              index={banner?.index}
              handleChange={handleChangeIndex}
            />
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
              Cập nhật banner
            </Button>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
