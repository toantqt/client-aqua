import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import queryString from "query-string";
import { getNewsEdit, updateNews } from "../../../../api/AdminAPI";
import EditorNewsComponent from "../../Create News/components/Editor News/EditorNews.component";
import SelectCategory from "../../../../components/Category Select/CategorySelect.component";
import TextField from "@material-ui/core/TextField";
import EditEditorComponent from "../../Create News/components/Edit Editor/EditEditor.component";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import ImagePreivewsComponent from "../../../../components/Image Previews/ImagePreviews.component";
import AdminSlug from "../../../../resources/AdminSlug";

export default function EditInfor(props) {
  const history = useHistory();
  const search = queryString.parse(props.location.search);
  const newsID = search.id;
  const [subCategory, setSubCategory] = useState([]);
  const [categorySelect, setCategorySelect] = useState("");
  const [news, setNews] = useState();
  const [defaultSelect, setDefaultSelect] = useState();
  const [content, setContent] = useState([]);
  const [contentOld, setContentOld] = useState([]);
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState();
  const [author, setAuthor] = useState("");
  const [slug, setSlug] = useState("");

  useEffect(async () => {
    if (newsID) {
      props.handleLoading(true);
      await getNewsEdit(newsID).then((res) => {
        setNews(res.data.news);
        setCategorySelect(res.data.news.subCategoryID);
        setSlug(res.data.category.slug);
        setTitle(res.data.news.title);
        setThumbnail(res.data.news.thumbnail);
        setAuthor(res.data.news.author);
        const sub = res.data.category.subCategory.filter((e) => {
          return e.type === "1";
        });
        setSubCategory(sub);
        let i = 0;
        for (let item of res.data.category.subCategory) {
          if (item._id === res.data.news.subCategoryID) {
            setDefaultSelect({ categoryName: item.name, _id: item._id });
          }
        }

        for (let item of res.data.news.listContent) {
          for (let img of item.library) {
            setImage((image) => [...image, { image: img, list: i + 1 }]);
          }
          i++;

          setContent((content) => [...content, item.content]);
          setContentOld((content) => [...content, item.content]);
        }
      });
      props.handleLoading(false);
    }
  }, [newsID]);

  const handleChangeCategory = (value) => {
    if (value !== "") {
      setCategorySelect(value._id);
    } else {
      setCategorySelect("");
    }
  };
  const handleDeleteImage = (url) => {
    const newArrImage = image.filter((e) => {
      return e != url;
    });
    setImage(newArrImage);
  };
  const handleDeleteImageOld = (url) => {
    const newArrImage = image.filter((e) => {
      return e != url;
    });
    setImage(newArrImage);
  };
  const handleChangeImage = (data) => {
    setImage((image) => [...image, data]);
  };

  const handleChangeContent = (data, index) => {
    let items = [...content];
    let item = { ...content[index + 1] };
    item = data;
    items[index] = item;
    setContent(items);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleChangeThumbnail = (event) => {
    if (event.target.type === "file") {
      let files = Array.from(event.target.files);
      files.forEach((file) => {
        let reader = new FileReader();
        reader.onloadend = () => {
          setThumbnail({ url: reader.result, file: file });
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleSubmit = async () => {
    const data = {
      newsID: newsID,
      subCategoryID: categorySelect,
      title: title,
      listsContent: content,
      listImage: image,
      totalContent: content.length,
      thumbnail: thumbnail,
      author: author,
    };
    console.log(data);
    if (
      (data.subCategoryID === "" && subCategory.length != 0) ||
      data.title === ""
    ) {
      alert("Xin vui lòng điền đầy đủ thông tin");
    } else {
      props.handleLoading(true);
      await updateNews(data).then((res) => {
        history.push({
          pathname: AdminSlug.newsManager,
          search: `?q=${slug}`,
        });
      });
    }
  };

  const handleChangeAuthor = (event) => {
    setAuthor(event.target.value);
  };
  return (
    <Grid container spacing={2} xs={12} style={{ backgroundColor: "white" }}>
      <Grid item lg={12}>
        <div className="news-title ">
          <p>Tiêu đề:</p>
          <TextField
            id="outlined-basic"
            variant="outlined"
            style={{ width: "100%" }}
            label="Tên bài viết"
            key={news?.title}
            defaultValue={news?.title}
            onChange={handleChangeTitle}
          />
        </div>
      </Grid>

      {contentOld.map((e, i) => (
        <EditEditorComponent
          key={i}
          content={i + 1}
          data={e}
          handleChangeImage={handleChangeImage}
          handleDeleteImage={handleDeleteImage}
          handleChangeContent={handleChangeContent}
          handleDeleteImageOld={handleDeleteImageOld}
          image={image}
        />
      ))}

      <div style={{ marginTop: "70px", width: "100%" }}>
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
      </div>
    </Grid>
  );
}
