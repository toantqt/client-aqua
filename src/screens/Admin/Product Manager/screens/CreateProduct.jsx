import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import queryString from "query-string";
import { useHistory } from "react-router-dom";
import { addProduct } from "../../../../api/AdminAPI";
import {
  getCategory,
  getDetailsProduct,
  getSubCategory,
} from "../../../../api/API";
import SelectCategory from "../../../../components/Category Select/CategorySelect.component";
import TextField from "@material-ui/core/TextField";
import ImagePreivewsComponent from "../../../../components/Image Previews/ImagePreviews.component";
import {
  convertFromHTML,
  ContentState,
  EditorState,
  convertToRaw,
} from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "draft-js/dist/Draft.css";
import draftToHtml from "draftjs-to-html";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
export default function CreateProduct(props) {
  const history = useHistory();
  const search = queryString.parse(props.location.search);
  const categoryID = search.id;
  const [subCategory, setSubCategory] = useState([]);
  const [name, setName] = useState("");
  const [product, setProduct] = useState();
  const [defaultSelect, setDefaultSelect] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [ingredient, setIngredient] = useState("");
  const [uses, setUses] = useState("");
  const [dosage, setDosage] = useState("");
  const [highlight, setHighlight] = useState(false);

  const [editorState1, setEditorState1] = useState(EditorState.createEmpty());
  const [editorState2, setEditorState2] = useState(EditorState.createEmpty());
  const [editorState3, setEditorState3] = useState(EditorState.createEmpty());
  const [subCategorySelect, setSubCategorySelect] = useState("");

  useEffect(async () => {
    props.handleLoading(true);
    await getSubCategory(categoryID).then((res) => {
      //   console.log(res.data);
      setSubCategory(res.data.subCategory);
      setDefaultSelect({ categoryName: "", _id: "" });
    });
    props.handleLoading(false);
  }, [categoryID]);

  const onEditorStateChange = (editorState, status) => {
    const converHtml = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    if (status === 1) {
      setEditorState1(editorState);
      setIngredient(converHtml);
    } else if (status === 2) {
      setEditorState2(editorState);
      setUses(converHtml);
    } else {
      setEditorState3(editorState);
      setDosage(converHtml);
    }
  };

  const handleChangeCategory = (value) => {
    if (value !== "") {
      setSubCategorySelect(value._id);
    } else {
      setSubCategorySelect("");
    }
  };

  const handleChangeTitle = (event) => {
    setName(event.target.value);
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
      subCategoryID: subCategorySelect,
      name: name,
      ingredient: ingredient,
      uses: uses,
      dosage: dosage,
      highlight: highlight,
      image: imagePreview,
    };
    if (data.subCategoryID === "" || data.name === "" || !data.image) {
      alert("Xin vui lòng điền đầy đủ thông tin!");
    } else {
      await addProduct(data).then((res) => {
        history.push("/admin/product-manager");
      });
    }
  };

  const handleClickHighlight = () => {
    setHighlight(!highlight);
  };
  const handlePastedText = (text, html, callback) => {
    const modifiedHtml = html.replace(
      /<p class=MsoListParagraph[\s\S]*?>·([\s\S]*?)<\/p>/g,
      "<li>$1</li>"
    );
  };
  return (
    <Grid>
      <div className="header-title mb-3">
        <span>Cập nhật sản phẩm </span>
      </div>
      <div>
        <Grid container spacing={2}>
          <Grid item lg={4}>
            {defaultSelect ? (
              <SelectCategory
                data={subCategory}
                value={defaultSelect}
                handleChange={handleChangeCategory}
              />
            ) : (
              <></>
            )}
          </Grid>
          <Grid item lg={8}>
            <TextField
              id="outlined-basic"
              label="Tên sản phẩm"
              variant="outlined"
              style={{ width: "100%" }}
              onChange={handleChangeTitle}
            />
          </Grid>
          <Grid item lg={12}>
            <label>Hình ảnh</label>
          </Grid>
          <div>
            <ImagePreivewsComponent
              url={imagePreview}
              handleChangeImage={handleChangeImage}
            />
          </div>

          <Grid item lg={12}>
            <div className="news-editor mt-5">
              <p>Thành phần</p>

              <Editor
                editorState={editorState1}
                onEditorStateChange={(e) => {
                  onEditorStateChange(e, 1);
                }}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                handlePastedText={handlePastedText}
              />
            </div>
            <div className="news-editor mt-3">
              <p>Công dụng</p>

              <Editor
                editorState={editorState2}
                onEditorStateChange={(e) => {
                  onEditorStateChange(e, 2);
                }}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                handlePastedText={handlePastedText}
              />
            </div>
            <div className="news-editor mt-3">
              <p>Liều lượng</p>

              <Editor
                editorState={editorState3}
                onEditorStateChange={(e) => {
                  onEditorStateChange(e, 3);
                }}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                handlePastedText={handlePastedText}
              />
            </div>
          </Grid>
        </Grid>
        <div className="news-editor mt-3">
          <p>Trạng thái</p>

          <FormControlLabel
            value="url"
            control={<Radio color="primary" />}
            label="Nổi bật"
            checked={highlight}
            onClick={handleClickHighlight}
          />
        </div>
      </div>
      <div style={{ marginTop: "70px" }}>
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
