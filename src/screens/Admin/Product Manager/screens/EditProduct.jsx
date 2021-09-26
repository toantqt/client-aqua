import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import queryString from "query-string";
import { getCategoryNews } from "../../../../api/AdminAPI";
import { getDetailsProduct } from "../../../../api/API";
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
export default function EditProduct(props) {
  const search = queryString.parse(props.location.search);
  const productID = search.id;
  const [categoryID, setCategoryID] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [name, setName] = useState("");
  const [product, setProduct] = useState();
  const [defaultSelect, setDefaultSelect] = useState();
  const [imagePreview, setImagePreview] = useState();
  const [ingredient, setIngredient] = useState("");
  const [uses, setUses] = useState("");
  const [dosage, setDosage] = useState("");

  const [editorState1, setEditorState1] = useState(EditorState.createEmpty());
  const [editorState2, setEditorState2] = useState(EditorState.createEmpty());
  const [editorState3, setEditorState3] = useState(EditorState.createEmpty());
  const [subCategorySelect, setSubCategorySelect] = useState("");

  useEffect(async () => {
    const slug = "tin-tuc";
    props.handleLoading(true);
    await getDetailsProduct(productID).then((res) => {
      console.log(res.data);
      setProduct(res.data.product);
      setCategoryID(res.data.category._id);
      setSubCategory(res.data.category.subCategory);
      setSubCategorySelect(res.data.product.subCategoryID);
      setName(res.data.product.name);
      for (let item of res.data.category.subCategory) {
        if (item._id === res.data.product.subCategoryID) {
          setDefaultSelect({
            categoryName: item.name,
            _id: item._id,
          });
        }
      }
      setImagePreview(res.data.product.image[0]);

      const blocksFromHTML1 = convertFromHTML(res.data.product.ingredient);
      const content1 = ContentState.createFromBlockArray(blocksFromHTML1);
      setEditorState1(EditorState.createWithContent(content1));
      setIngredient(res.data.product.ingredient);

      const blocksFromHTML2 = convertFromHTML(res.data.product.uses);
      const content2 = ContentState.createFromBlockArray(blocksFromHTML2);
      setEditorState2(EditorState.createWithContent(content2));
      setUses(res.data.product.uses);

      const blocksFromHTML3 = convertFromHTML(res.data.product.dosage);
      const content3 = ContentState.createFromBlockArray(blocksFromHTML3);
      setEditorState3(EditorState.createWithContent(content3));
      setDosage(res.data.product.dosage);
    });
    props.handleLoading(false);
  }, [productID]);

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

  const handleSubmit = () => {
    const data = {
      subCategoryID: subCategorySelect,
      name: name,
      ingredient: ingredient,
      uses: uses,
      dosage: dosage,
    };
    if (data.subCategoryID === "" || data.name === "") {
      alert("Xin vui lòng điền đầy đủ thông tin!");
    } else {
    }
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
              key={product?.name}
              defaultValue={product?.name}
              onChange={handleChangeTitle}
            />
          </Grid>
          <div className="mb-5">
            <label>Hình ảnh</label>
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
              />
            </div>
          </Grid>
        </Grid>
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
