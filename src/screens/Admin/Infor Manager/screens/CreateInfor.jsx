import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import slug from "../../../../resources/slug";
import Grid from "@material-ui/core/Grid";
import EditorNewsComponent from "../../Create News/components/Editor News/EditorNews.component";
import "../../Create News/screens/createNews.css";
// import SelectCategoryAuthorComponent from "../../components/Select Category Author/SelectCategoryAuthor.component";
// import { createNews } from "../../../../api/AdminAPI";
import TextField from "@material-ui/core/TextField";
import { addNews, getCategoryNews } from "../../../../api/AdminAPI";
import queryString from "query-string";
import SelectCategory from "../../../../components/Category Select/CategorySelect.component";
import ImagePreivewsComponent from "../../../../components/Image Previews/ImagePreviews.component";
import AdminSlug from "../../../../resources/AdminSlug";
export default function CreateInfor(props) {
  const history = useHistory();
  const search = queryString.parse(props.location.search);
  const slug = search.q;
  const [count, setCount] = useState(1);
  const [image, setImage] = useState([]);
  const [content, setContent] = useState([]);
  const [title, setTitle] = useState("");
  const [mainCategoryID, setMainCategoryID] = useState("");
  const [homePage, setHomePage] = useState("normal");
  const [categoryPage, setCategoryPage] = useState("normal");
  const [subCategoryPage, setSubCategoryPage] = useState("normal");
  const [subCategory, setSubCategory] = useState([]);
  const [categorySelect, setCategorySelect] = useState();
  const [thumbnail, setThumnail] = useState();
  const [author, setAuthor] = useState("");

  const [hashTag, setHashTag] = useState("");

  useEffect(async () => {
    if (slug) {
      props.handleLoading(true);
      await getCategoryNews(slug).then((res) => {
        setMainCategoryID(res.data.categoryID);
      });
      props.handleLoading(false);
    }
  }, [slug]);

  const handleClickCount = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeImage = (data) => {
    setImage((image) => [...image, data]);
  };
  const handleDeleteImage = (name) => {
    const newArrImage = image.filter((e) => {
      return e.image.name != name;
    });
    setImage(newArrImage);
  };
  const handleChangeContent = (data, index) => {
    let items = [...content];
    let item = { ...content[index] };
    item = data;
    items[index] = item;
    setContent(items);
  };

  const handleClickCreateNews = async () => {
    const data = {
      categoryID: mainCategoryID,
      subCategoryID: "",
      mainTitle: title,
      listsContent: content,
      listImage: image,
      totalContent: count,
      thumbnail: {
        url: "",
        publicID: "",
      },
      author: "",
    };

    if (data.mainTitle === "") {
      alert("Xin vui l??ng th??m ti??u ?????!");
    } else {
      props.handleLoading(true);
      await addNews(data).then((res) => {
        props.handleLoading(false);
        history.push({
          pathname: AdminSlug.newsManager,
          search: `?q=${slug}`,
        });
      });
    }
  };

  return (
    <Grid container spacing={2} xs={12} style={{ backgroundColor: "white" }}>
      <Grid item lg={12}>
        <div className="news-title ">
          <p>Ti??u ?????:</p>
          <TextField
            id="outlined-basic"
            variant="outlined"
            style={{ width: "100%" }}
            onChange={handleChangeTitle}
          />
        </div>
      </Grid>

      <Grid item lg={12}>
        {[...Array(count)].map((_, i) => (
          <EditorNewsComponent
            key={i}
            content={i + 1}
            handleChangeImage={handleChangeImage}
            handleDeleteImage={handleDeleteImage}
            handleChangeContent={handleChangeContent}
          />
        ))}
      </Grid>

      <div className="button-add">
        <button
          type="button"
          className="btn btn-outline-success  "
          onClick={handleClickCreateNews}
        >
          T???o b??i vi???t
        </button>
        <button
          type="button"
          className="btn btn-outline-primary mr-3"
          onClick={handleClickCount}
        >
          Th??m n???i dung
        </button>
      </div>
    </Grid>
  );
}
