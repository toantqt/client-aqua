import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import slug from "../../../../resources/slug";
import Grid from "@material-ui/core/Grid";
import EditorNewsComponent from "../components/Editor News/EditorNews.component";
import "./createNews.css";
// import SelectCategoryAuthorComponent from "../../components/Select Category Author/SelectCategoryAuthor.component";
// import { createNews } from "../../../../api/AdminAPI";
import TextField from "@material-ui/core/TextField";
import { getCategoryNews } from "../../../../api/AdminAPI";
import queryString from "query-string";
import SelectCategory from "../../../../components/Category Select/CategorySelect.component";
import ImagePreivewsComponent from "../../../../components/Image Previews/ImagePreviews.component";
export default function CreateNews(props) {
  const history = useHistory();
  const search = queryString.parse(props.location.search);
  const slug = search.q;
  const [count, setCount] = useState(1);
  const [image, setImage] = useState([]);
  const [content, setContent] = useState([]);
  const [title, setTitle] = useState("");
  const [mainCategoryID, setMainCategoryID] = useState("");
  const [subCategoryID, setSubCategoryID] = useState("");
  const [homePage, setHomePage] = useState("normal");
  const [categoryPage, setCategoryPage] = useState("normal");
  const [subCategoryPage, setSubCategoryPage] = useState("normal");
  const [display, setDisplay] = useState([]);
  const [ListsHashtag, setListsHashtag] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [categorySelect, setCategorySelect] = useState();
  const [thumbnail, setThumnail] = useState();

  const [hashTag, setHashTag] = useState("");

  useEffect(async () => {
    if (slug) {
      await getCategoryNews(slug).then((res) => {
        console.log(res.data);
        setMainCategoryID(res.data.categoryID);
        setSubCategory(res.data.subCategory);
      });
      props.handleLoading(false);
    }
  }, [slug]);
  useEffect(() => {
    for (let i = count; i <= count; i++) {
      setDisplay((display) => [...display, 1]);
    }
  }, [count]);
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
  const handleChangeMainCategory = (id) => {
    setMainCategoryID(id);
  };
  const handChangeSubCategory = (id) => {
    setSubCategoryID(id);
  };
  const handleChangeDisplay = (data, index) => {
    let items = [...display];
    let item = { ...display[index] };
    item = data;
    items[index] = item;
    setDisplay(items);
  };

  //   const handleClickCreateNews = async () => {
  //     const data = {
  //       categoryID: mainCategoryID,
  //       subCategoryID: subCategoryID,
  //       mainTitle: title,
  //       listsContent: content,
  //       listImage: image,
  //       display: display,
  //       hashtag: ListsHashtag,

  //       totalContent: count,
  //       show: {
  //         home: homePage,
  //         category: categoryPage,
  //         subCategory: subCategoryPage,
  //       },
  //     };
  //     if (data.categoryID == "") {
  //       alert("Xin vui lòng chọn danh mục!");
  //     } else if (data.mainTitle === "") {
  //       alert("Xin vui lòng thêm tiêu đề!");
  //     } else if (data.listImage.length === 0) {
  //       alert("Xin vui lòng thêm ảnh hoặc video");
  //     } else {
  //       props.handleLoading(true);

  //       await createNews(data).then((res) => {
  //         props.handleLoading(false);
  //         history.push(slug.authorNews);
  //       });
  //     }
  //   };

  const handleChangeCategory = (value) => {
    if (value !== "") {
      setCategorySelect(value._id);
    } else {
      setCategorySelect("");
    }
  };

  const handleChangeThumbnail = (event) => {
    if (event.target.type === "file") {
      let files = Array.from(event.target.files);
      files.forEach((file) => {
        let reader = new FileReader();
        console.log(reader.result);
        reader.onloadend = () => {
          setThumnail({ url: reader.result, file: file });
        };
        reader.readAsDataURL(file);
      });
    }
  };

  return (
    <Grid container spacing={2} xs={12} style={{ backgroundColor: "white" }}>
      <Grid item lg={4}>
        <div className=" news-title">
          <p className="mb-5">Danh mục:</p>
          <SelectCategory
            data={subCategory}
            handleChange={handleChangeCategory}
          />
        </div>
      </Grid>
      <Grid item lg={8}>
        <div className="news-title ">
          <p>Tiêu đề:</p>
          <TextField
            id="outlined-basic"
            variant="outlined"
            style={{ width: "100%" }}
            onChange={handleChangeTitle}
          />
        </div>
      </Grid>
      <Grid item lg={12}>
        <div className=" news-title">
          <p className="mb-5">Thumbnail:</p>
          <ImagePreivewsComponent
            url={thumbnail}
            handleChangeImage={handleChangeThumbnail}
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
            handleChangeDisplay={handleChangeDisplay}
          />
        ))}
      </Grid>

      <div className="button-add">
        <button
          type="button"
          className="btn btn-outline-success  "
          //   onClick={handleClickCreateNews}
        >
          Tạo bài viết
        </button>
        <button
          type="button"
          className="btn btn-outline-primary mr-3"
          onClick={handleClickCount}
        >
          Thêm nội dung
        </button>
      </div>
    </Grid>
  );
}
