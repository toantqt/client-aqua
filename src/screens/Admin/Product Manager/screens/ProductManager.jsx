import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { useHistory } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import IconButton from "@material-ui/core/IconButton";
import queryString from "query-string";
import { deleteProduct } from "../../../../api/AdminAPI";
import {
  getCategoryNews,
  getNewsCategory,
  covertDate,
  deleteNews,
  productManager,
} from "../../../../api/AdminAPI";
import SelectCategory from "../../../../components/Category Select/CategorySelect.component";
import TableComponent from "../../../../components/Table/Table.component";
import Button from "@material-ui/core/Button";
import AdminSlug from "../../../../resources/AdminSlug";
import ModalConfirmComponent from "../../../../components/Modal/ModalConfirm.component";
export default function ProductManager(props) {
  const history = useHistory();

  const [product, setProduct] = useState([]);
  const [categoryName, setCategoryName] = useState("");
  const [subCategory, setSubCategory] = useState([]);
  const [categoryID, setCategoryID] = useState("");
  const [categorySelect, setCategorySelect] = useState("");
  const [openConfirm, setOpenConfirm] = useState(false);
  const [newsID, setNewsID] = useState("");
  const [productID, setProductID] = useState("");
  const [reload, setReload] = useState(false);

  useEffect(async () => {
    props.handleLoading(true);
    const slug = "san-pham";
    await getCategoryNews(slug).then((res) => {
      setCategoryID(res.data.categoryID);
      setSubCategory(res.data.subCategory);
    });
    await productManager(slug).then((res) => {
      setProduct(res.data);
    });

    props.handleLoading(false);
  }, [reload]);

  const handleChangeCategory = (value) => {
    if (value !== "") {
      setCategorySelect(value._id);
    } else {
      setCategorySelect("");
    }
  };

  console.log(product);
  const rows = product
    .filter((product) => {
      if (categorySelect === "") {
        return product;
      } else {
        return product.product.subCategoryID === categorySelect;
      }
    })
    .map((e, index) => {
      return {
        id: index,
        stt: index + 1,
        name: e.product?.name,
        category: e.subCategoryName,
        date: covertDate(e.product?.created),
        action: e.product,
      };
    });

  const columns = [
    { field: "stt", headerName: "STT", width: 90 },
    { field: "name", headerName: "Sản phẩm", width: 300 },
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
    history.push(`/bai-viet/${slug}`);
  };

  const handleClickAdd = () => {
    history.push({
      pathname: AdminSlug.createProduct,
      search: `?id=${categoryID}`,
    });
  };

  const handleClickDelete = (id) => {
    setProductID(id);
    setOpenConfirm(true);
  };

  const handleCloseConfirm = () => {
    setProductID("");
    setOpenConfirm(false);
  };

  const submitDeleteProduct = async () => {
    const data = {
      productID: productID,
    };
    await deleteProduct(data).then((res) => {
      handleCloseConfirm();
      setReload(!reload);
    });
  };

  const handleClickEdit = (id) => {
    history.push({
      pathname: AdminSlug.editProduct,
      search: `?id=${id}`,
    });
  };

  return (
    <Grid>
      <div className="header-title mb-3">
        <span>Quản Lý sản phẩm: ({product.length}) </span>
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
          Thêm sản phẩm
        </Button>
      </div>

      {subCategory.length !== 0 ? (
        <div style={{ width: "30%" }} className="mb-3">
          <SelectCategory
            data={subCategory}
            handleChange={handleChangeCategory}
          />
        </div>
      ) : (
        <></>
      )}

      <div>
        <TableComponent columns={columns} rows={rows} />
      </div>

      <ModalConfirmComponent
        open={openConfirm}
        handleClose={handleCloseConfirm}
        title="Xác nhận xóa sản phẩm"
        handleDelete={submitDeleteProduct}
      />
    </Grid>
  );
}
