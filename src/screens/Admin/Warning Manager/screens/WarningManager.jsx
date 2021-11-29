import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";
import queryString from "query-string";
import { getNewCategory } from "../../../../api/API";
import { covertDate, deleteNews } from "../../../../api/AdminAPI";
import SelectCategory from "../../../../components/Category Select/CategorySelect.component";
import TableComponent from "../../../../components/Table/Table.component";
import Button from "@material-ui/core/Button";
import AdminSlug from "../../../../resources/AdminSlug";
import ModalConfirmComponent from "../../../../components/Modal/ModalConfirm.component";
export default function WarningManager(props) {
  const history = useHistory();
  const [categoryName, setCategoryName] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [categoryID, setCategoryID] = useState("");
  const [categorySelect, setCategorySelect] = useState("");
  const [news, setNews] = useState([]);
  const [openConfirm, setOpenConfirm] = useState(false);
  const [newsID, setNewsID] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(async () => {
    props.handleLoading(true);
    await getNewCategory("6197aad918d226427084d755", 9999).then((res) => {
      setNews(res.data);
    });
    props.handleLoading(false);
  }, [reload]);

  const rows = news.map((e, index) => {
    return {
      id: index,
      stt: index + 1,
      name: e.title,
      category: "Bài viết",
      date: covertDate(e.created),
      action: e,
    };
  });

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
      search: `?q=bai-viet`,
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
        <span>Quản Lý Bài Viết: ({news.length}) </span>
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
