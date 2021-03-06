import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";
import queryString from "query-string";
import {
  getCategoryNews,
  getNewsCategory,
  covertDate,
  deleteNews,
} from "../../../../api/AdminAPI";
import { getNewCategory } from "../../../../api/API";
import SelectCategory from "../../../../components/Category Select/CategorySelect.component";
import TableComponent from "../../../../components/Table/Table.component";
import Button from "@material-ui/core/Button";
import AdminSlug from "../../../../resources/AdminSlug";
import ModalConfirmComponent from "../../../../components/Modal/ModalConfirm.component";
export default function NewsManager(props) {
  const history = useHistory();
  const search = queryString.parse(props.location.search);
  const slug = search.q;
  const [categoryName, setCategoryName] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [categoryID, setCategoryID] = useState("");
  const [categorySelect, setCategorySelect] = useState("");
  const [news, setNews] = useState([]);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [newsID, setNewsID] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(async () => {
    if (slug) {
      props.handleLoading(true);
      switch (slug) {
        case "gioi-thieu":
          setCategoryName("Giới Thiệu");
          break;
        case "tin-tuc":
          setCategoryName("Tin Tức");
          break;
        case "tuyen-dung":
          setCategoryName("Tuyển Dụng");
          break;
      }

      await getCategoryNews(slug).then((res) => {
        setCategoryID(res.data.categoryID);
        setSubCategory(res.data.subCategory);
      });
      await getNewsCategory(slug).then((res) => {
        setNews(res.data);
      });

      props.handleLoading(false);
    }
  }, [slug, reload]);

  const handleChangeCategory = (value) => {
    if (value !== "") {
      setCategorySelect(value._id);
    } else {
      setCategorySelect("");
    }
  };

  const rows = news
    .filter((news) => {
      if (categorySelect === "") {
        console.log(news);
        return news;
      } else {
        return news.news.subCategoryID === categorySelect;
      }
    })
    .map((e, index) => {
      return {
        id: index,
        stt: index + 1,
        name: e.news.title,
        category: e.subCategoryName,
        date: covertDate(e.news?.created),
        action: e.news,
      };
    });

  console.log(rows);
  const columns = [
    { field: "stt", headerName: "STT", width: 90 },
    { field: "name", headerName: "Bài viết", width: 300 },
    { field: "category", headerName: "Danh mục", width: 250 },
    { field: "date", headerName: "Ngày tạo", width: 150 },
    {
      field: "action",
      headerName: "Chức năng",
      width: 250,
      renderCell: (action) => {
        return (
          <>
            <IconButton
              aria-label="delete"
              className="btn-action btn-a-1"
              onClick={() => {
                handleClickView(action.row?.action?.slug);
              }}
            >
              <VisibilityIcon />
            </IconButton>

            <IconButton
              aria-label="delete"
              className="btn-action btn-a-2"
              onClick={() => {
                handleClickEdit(action.row?.action?._id);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              className="btn-action btn-a-3"
              onClick={() => {
                handleClickDelete(action.row?.action?._id);
              }}
            >
              <DeleteForeverIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  const handleClickView = (slug) => {
    history.push(`/danh-muc/bai-viet/${slug}`);
  };

  const handleClickAdd = () => {
    history.push({
      pathname: AdminSlug.createNews,
      search: `?q=${slug}`,
    });
  };

  const handleClickDelete = (id) => {
    setNewsID(id);
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setNewsID("");
    setOpenConfirm(false);
  };

  const submitDeleteNews = async () => {
    const data = {
      newsID: newsID,
    };
    await deleteNews(data).then((res) => {
      handleCloseConfirm();
      setReload(!reload);
    });
  };

  const handleClickEdit = (id) => {
    history.push({
      pathname: AdminSlug.editNews,
      search: `?id=${id}`,
    });
  };

  return (
    <Grid>
      <div className="header-title mb-3">
        <span>
          Quản Lý {categoryName}: ({news.length}){" "}
        </span>
        <Button
          variant="contained"
          color="primary"
          size="small"
          startIcon={<EditIcon />}
          style={{
            textTransform: "none",
            float: "right",
          }}
          onClick={handleClickAdd}
        >
          Tạo bài viết
        </Button>
      </div>

      {subCategory?.length !== 0 ? (
        <div style={{ width: "30%" }} className="mb-3">
          <SelectCategory
            data={subCategory}
            handleChange={handleChangeCategory}
          />
        </div>
      ) : (
        <></>
      )}
      <Grid>
        <TableComponent columns={columns} rows={rows} />
      </Grid>

      <ModalConfirmComponent
        open={openConfirm}
        handleClose={handleCloseConfirm}
        title="Xác nhận xóa bài viết"
        handleDelete={submitDeleteNews}
      />
    </Grid>
  );
}
