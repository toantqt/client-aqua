import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";
import queryString from "query-string";
import { getDealer, covertDate, deleteDealer } from "../../../../api/AdminAPI";
import SelectCategory from "../../../../components/Category Select/CategorySelect.component";
import TableComponent from "../../../../components/Table/Table.component";
import Button from "@material-ui/core/Button";
import AdminSlug from "../../../../resources/AdminSlug";
import ModalConfirmComponent from "../../../../components/Modal/ModalConfirm.component";
import SearchInputComponent from "../../../../components/Search Input/SearchInput.component";
export default function DealerManager(props) {
  const history = useHistory();
  const search = queryString.parse(props.location.search);
  const slug = search.q;

  const [dealer, setDealer] = useState([]);
  const [id, setID] = useState("");
  const [openConfirm, setOpenConfirm] = useState(false);
  const [reload, setReload] = useState(false);

  useEffect(async () => {
    props.handleLoading(true);
    await getDealer(slug).then((res) => {
      console.log(res.data);
      setDealer(res.data);
    });
    props.handleLoading(false);
  }, [reload, slug]);

  const rows = dealer.map((e, index) => {
    return {
      id: index,
      name: e.name,
      email: e.email,
      phoneNumber: e.phoneNumber,
      address: e.address,
      date: covertDate(e.createdAt),
      action: e,
    };
  });

  const columns = [
    { field: "name", headerName: "Họ tên", width: 170 },
    { field: "email", headerName: "Email", width: 170 },
    { field: "phoneNumber", headerName: "Điện thoại", width: 150 },
    { field: "address", headerName: "Địa chỉ", width: 190 },
    { field: "date", headerName: "Ngày tạo", width: 150 },
    {
      field: "action",
      headerName: "Chức năng",
      width: 150,
      renderCell: (action) => {
        return (
          <>
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

  const handleClickDelete = (id) => {
    setID(id);
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setID("");
    setOpenConfirm(false);
  };

  const submitDeleteProduct = async () => {
    const data = {
      dealerID: id,
    };
    props.handleLoading(true);
    await deleteDealer(data).then((res) => {
      setOpenConfirm(false);
      setReload(!reload);
    });
  };

  const handleClickEdit = (id) => {
    history.push({
      pathname: AdminSlug.editDealer,
      search: `?id=${id}`,
    });
  };

  const handleClickAdd = () => {
    history.push(AdminSlug.addDealer);
  };

  return (
    <Grid>
      <div className="header-title mb-3">
        <span>
          Quản Lý Đại Lý: ({slug === "true" ? "Đã đăng kí" : "Đang đăng kí"} -{" "}
          {dealer.length}){" "}
        </span>
        {slug === "true" ? (
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
            Thêm đại lý
          </Button>
        ) : (
          <></>
        )}
      </div>
      <Grid container spacing={1}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={4} className="mb-3">
          <SearchInputComponent />
        </Grid>
      </Grid>

      <div>
        <TableComponent columns={columns} rows={rows} />
      </div>

      <ModalConfirmComponent
        open={openConfirm}
        handleClose={handleCloseConfirm}
        title="Xác nhận xóa đại lý"
        handleDelete={submitDeleteProduct}
      />
    </Grid>
  );
}
