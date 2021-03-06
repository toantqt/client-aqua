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
import SearchInputComponent from "../../../../components/Search Input/SearchInput.component";
export default function ProductManager(props) {
  const history = useHistory();
  const search = queryString.parse(props.location.search);
  const slug = search.q;
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
    await getCategoryNews(slug).then((res) => {
      setCategoryName(res.data.categoryName);
      setCategoryID(res.data.categoryID);
      setSubCategory(res.data.subCategory);
    });
    await productManager(slug).then((res) => {
      setProduct(res.data);
    });

    props.handleLoading(false);
  }, [reload, slug]);

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
        price: e.product?.price,
        code: e.product?.code,
        date: covertDate(e.product?.created),
        action: e.product,
      };
    });

  const columns = [
    { field: "stt", headerName: "STT", width: 90 },
    { field: "name", headerName: "S???n ph???m", width: 200 },
    { field: "category", headerName: "Danh m???c", width: 200 },
    { field: "code", headerName: "M?? SP", width: 100 },
    { field: "price", headerName: "Gi??", width: 90 },

    { field: "date", headerName: "Ng??y t???o", width: 150 },
    {
      field: "action",
      headerName: "Ch???c n??ng",
      width: 210,
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
        <span>
          Qu???n L?? {categoryName}: ({product.length}){" "}
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
          Th??m s???n ph???m
        </Button>
      </div>
      <Grid container spacing={1}>
        {subCategory.length !== 0 ? (
          <Grid item xs={4} className="mb-3">
            <SelectCategory
              data={subCategory}
              handleChange={handleChangeCategory}
            />
          </Grid>
        ) : (
          <Grid item xs={4}></Grid>
        )}
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
        title="X??c nh???n x??a s???n ph???m"
        handleDelete={submitDeleteProduct}
      />
    </Grid>
  );
}
