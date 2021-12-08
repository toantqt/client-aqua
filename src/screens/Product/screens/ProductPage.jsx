import React, { useState, useEffect } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { getAllProduct, getCategory, getProduct } from "../../../api/API";
import SidebarComponent from "../../../components/Sidebar/Sidebar.component";
import AdvisoryComponent from "../../../components/Advisory/Advisory.component";
import ProductHighlightComponent from "../../../components/Product Highlight/ProductHighlight.component";
import CircularProgress from "@material-ui/core/CircularProgress";
import ProductComponent from "../components/Product.component";

export default function ProductPage(props) {
  const history = useHistory();
  const location = useLocation();
  const route = location.pathname.replace("/", "");
  const [categoryID, setCategoryID] = useState();
  const [subCategoryID, setSubCategoryID] = useState("");
  const [loading, setLoading] = useState(true);
  const [subCategory, setSubCategory] = useState([]);
  const [page, setPage] = useState(0);
  const [product, setProduct] = useState([]);

  useEffect(async () => {
    window.scrollTo(0, 0);
    if (props.slug) {
      await getCategory(props.slug).then((res) => {
        setSubCategory(res.data.subCategory);
        setCategoryID(res.data._id);
      });
    }
  }, [props.slug]);

  useEffect(async () => {
    setLoading(true);
    setProduct([]);
    if (subCategoryID === "" && categoryID) {
      await getAllProduct(categoryID, page).then((res) => {
        setProduct(res.data);
      });
      setLoading(false);
    } else if (subCategoryID !== "") {
      await getProduct(subCategoryID, page).then((res) => {
        setProduct(res.data);
      });
      setLoading(false);
    }
  }, [subCategoryID, categoryID]);

  const handleClick = (id) => {
    history.push(`/danh-muc/chi-tiet-san-pham/${id}`);
  };

  const handleChange = (id) => {
    if (subCategoryID !== id) {
      setSubCategoryID(id);
      setLoading(true);
    }
  };
  const listsProduct = product?.map((e, index) => {
    return (
      <Grid
        item
        lg={4}
        md={4}
        xs={6}
        onClick={() => {
          handleClick(e._id);
        }}
      >
        <ProductComponent data={e} key={index} />
      </Grid>
    );
  });
  return (
    <Grid>
      <div>
        <Grid container spacing={4}>
          <Grid item lg={4} md={4} xs={12}>
            <SidebarComponent
              category={subCategory}
              handleChange={handleChange}
            />
            <AdvisoryComponent />
            <ProductHighlightComponent />
          </Grid>
          <Grid item lg={8} md={8} xs={12}>
            {loading ? (
              <div
                style={{
                  width: "100%",
                  height: "300px",
                  marginTop: "30px",
                  textAlign: "center",
                }}
              >
                <CircularProgress />
              </div>
            ) : (
              <>
                {product.length === 0 ? (
                  <div
                    style={{
                      width: "100%",
                      height: "300px",
                      marginTop: "30px",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ color: "#6e7673" }}>
                      Danh sách sản phẩm đang trong quá trình cập nhật
                    </span>
                  </div>
                ) : (
                  <div style={{ width: "100%" }}>
                    <Grid container spacing={3}>
                      {listsProduct}
                    </Grid>
                  </div>
                )}
              </>
            )}
            {/* <ListsProductComponent
              categoryID={props?.category?._id}
              subCategoryID={subCategoryID}
              loading={loading}
              handleLoading={handleLoading}
            /> */}
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
}
