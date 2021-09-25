import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";
import queryString from "query-string";
import ImagePreviewComponent from "../../Create News/components/Image Previews/ImagePreviews.component";
import VideoPreviewComponent from "../../Create News/components/Video Previews/VideoPreviews.component";
import UploadButtonComponent from "../../Create News/components/Upload Button/UploadButton.component";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { getIntroduce } from "../../../../api/API";
import TextField from "@material-ui/core/TextField";
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
import { updateIntroduce } from "../../../../api/AdminAPI";

export default function InforManager(props) {
  const history = useHistory();
  const search = queryString.parse(props.location.search);
  const slug = search.q;
  const [reload, setReload] = useState(false);
  const [titlePage, setTitlePage] = useState("");
  const [introduce, setIntroduce] = useState();
  const [historyTitle, setHistoryTitle] = useState("");
  const [historyContent, setHistoryContent] = useState("");
  const [historyImage, setHistoryImage] = useState([]);

  const [structureTitle, setStructureTitle] = useState("");
  const [structureContent, setStructureContent] = useState("");
  const [structureImage, setStructureImage] = useState([]);

  const [image1Preview, setImage1Preview] = useState([]);
  const [image2Preview, setImage2Preview] = useState([]);

  const [editorState1, setEditorState1] = useState(EditorState.createEmpty());
  const [editorState2, setEditorState2] = useState(EditorState.createEmpty());

  const [title1, setTitle1] = useState("");
  const [title2, setTitle2] = useState("");

  useEffect(async () => {
    if (slug) {
      props.handleLoading(true);
      if (slug === "gioi-thieu") {
        setTitlePage("Giới thiệu về công ty");
        await getIntroduce().then((res) => {
          setHistoryTitle(res.data.history.title);
          setTitle1(res.data.history.title);
          setHistoryContent(res.data.history.content);
          setHistoryImage(res.data.history.image);
          const blocksFromHTML1 = convertFromHTML(res.data.history.content);
          const content1 = ContentState.createFromBlockArray(blocksFromHTML1);
          setEditorState1(EditorState.createWithContent(content1));

          setStructureTitle(res.data.structure.title);
          setTitle2(res.data.structure.title);
          setStructureContent(res.data.structure.content);
          setStructureImage(res.data.structure.image);
          const blocksFromHTML2 = convertFromHTML(res.data.structure.content);
          const content2 = ContentState.createFromBlockArray(blocksFromHTML2);
          setEditorState2(EditorState.createWithContent(content2));
        });
      } else if (slug === "dao-tao") {
        setTitlePage("Liên kết đào tạo");
      }

      props.handleLoading(false);
    }
  }, [slug, reload]);

  const deleteImage1Old = (url) => {
    const newArrImage = historyImage.filter((e) => {
      return e != url;
    });
    setHistoryImage(newArrImage);
  };

  const deleteImage2Old = (url) => {
    const newArrImage = structureImage.filter((e) => {
      return e != url;
    });
    setStructureImage(newArrImage);
  };

  const addImageHistory = (event) => {
    if (event.target.type === "file") {
      let files = Array.from(event.target.files);
      files.forEach((file) => {
        let reader = new FileReader();
        reader.onloadend = () => {
          setHistoryImage((historyImage) => [
            ...historyImage,
            { url: reader.result, file: file },
          ]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const addImagestructure = (event) => {
    if (event.target.type === "file") {
      let files = Array.from(event.target.files);
      files.forEach((file) => {
        let reader = new FileReader();
        reader.onloadend = () => {
          setStructureImage((structureImage) => [
            ...structureImage,
            { url: reader.result, file: file },
          ]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  console.log(historyImage);

  const ImageHistoryPreview = historyImage.map((e, index) => {
    if (e.url) {
      if (e.type !== "video") {
        return (
          <ImagePreviewComponent
            url={e}
            key={index}
            deleteImage={deleteImage1Old}
          />
        );
      } else {
        return (
          <VideoPreviewComponent
            url={e}
            key={index}
            deleteImage={deleteImage1Old}
          />
        );
      }
    }
  });

  const ImageStructurePreview = structureImage.map((e, index) => {
    if (e.url) {
      if (e.type !== "video") {
        return (
          <ImagePreviewComponent
            url={e}
            key={index}
            deleteImage={deleteImage2Old}
          />
        );
      } else {
        return (
          <VideoPreviewComponent
            url={e}
            key={index}
            deleteImage={deleteImage2Old}
          />
        );
      }
    }
  });

  const onEditorState1Change = (editorState) => {
    const converHtml = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setEditorState1(editorState);
    setHistoryContent(converHtml);
  };
  const onEditorState2Change = (editorState) => {
    const converHtml = draftToHtml(
      convertToRaw(editorState.getCurrentContent())
    );
    setEditorState2(editorState);
    setStructureContent(converHtml);
  };
  const handleChangeTitle = (event, status) => {
    if (status === 1) {
      setHistoryTitle(event.target.value);
    } else if (status === 2) {
      setStructureTitle(event.target.value);
    }
  };

  const handleSubmit = async () => {
    const data = {
      history: {
        title: historyTitle,
        content: historyContent,
        image: historyImage,
        total: historyImage.length,
      },
      structure: {
        title: structureTitle,
        content: structureContent,
        image: structureImage,
        total: structureImage.length,
      },
    };

    await updateIntroduce(data).then((res) => {
        setReload(!reload)
    });
  };
  return (
    <Grid>
      <div className="header-title mb-3">
        <span> {titlePage} :</span>
      </div>
      <div>
        <div className="news-title ">
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Tiêu đề"
            key={title1}
            defaultValue={title1}
            style={{ width: "100%" }}
            onChange={(event) => {
              handleChangeTitle(event, 1);
            }}
          />
        </div>
        <div className="news-editor mt-3">
          <p>Nội dung:</p>

          <Editor
            editorState={editorState1}
            onEditorStateChange={onEditorState1Change}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
        </div>
        <div className="news-image mt-3">
          <p style={{ display: "inline-block" }}>Hình ảnh hoặc video:</p>
          <div className="wrap-pick-image">
            <div className="wrapper">
              {ImageHistoryPreview}
              <UploadButtonComponent addImage={addImageHistory} />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="news-title ">
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Tiêu đề"
            key={title2}
            defaultValue={title2}
            style={{ width: "100%" }}
            onChange={(event) => {
              handleChangeTitle(event, 2);
            }}
          />
        </div>
        <div className="news-editor mt-3">
          <p>Nội dung:</p>

          <Editor
            editorState={editorState2}
            onEditorStateChange={onEditorState2Change}
            wrapperClassName="wrapper-class"
            editorClassName="editor-class"
            toolbarClassName="toolbar-class"
          />
        </div>
        <div className="news-image mt-3">
          <p style={{ display: "inline-block" }}>Hình ảnh hoặc video:</p>
          <div className="wrap-pick-image">
            <div className="wrapper">
              {ImageStructurePreview}
              <UploadButtonComponent addImage={addImagestructure} />
            </div>
          </div>
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
