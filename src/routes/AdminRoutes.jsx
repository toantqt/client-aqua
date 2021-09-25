import { Redirect, Route, Switch } from "react-router-dom";
import adminSlug from "../resources/AdminSlug";
import BannerManager from "../screens/Admin/Banner Manager/screens/BannerManager";
import EditBanner from "../screens/Admin/Banner Manager/screens/EditBanner";
import CategoryManager from "../screens/Admin/Category Manager/screens/CategoryManger";
import EditCategory from "../screens/Admin/Category Manager/screens/EditCategory";
import LibraryManager from "../screens/Admin/Image Manager/screens/LibraryManager";
import EditImage from "../screens/Admin/Image Manager/screens/EditImage";
import CreateImage from "../screens/Admin/Image Manager/screens/CreateImage";
import CreateVideo from "../screens/Admin/Image Manager/screens/Video/CreateVideo";
import EditVideo from "../screens/Admin/Image Manager/screens/Video/EditVideo";
import NewsManager from "../screens/Admin/News Manager/screens/NewsManager";
import CreateNews from "../screens/Admin/Create News/screens/CreateNews";
import InforManager from "../screens/Admin/Infor Manager/screens/InforManager";
import ProductManager from "../screens/Admin/Product Manager/screens/ProductManager";
import EditProduct from "../screens/Admin/Product Manager/screens/EditProduct";
const AdminRoutes = (props) => {
  const handleLoading = props.handleLoading;
  return (
    <>
      <Switch>
        <Route
          exact
          path={adminSlug.bannerManager}
          render={() => <BannerManager {...props} />}
        ></Route>
        <Route
          exact
          path={adminSlug.editBanner}
          render={(props) => (
            <EditBanner {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.categoryManager}
          render={() => <CategoryManager {...props} />}
        ></Route>

        <Route
          exact
          path={adminSlug.editCategory}
          render={(props) => (
            <EditCategory {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.libraryManager}
          render={(props) => (
            <LibraryManager {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.editImage}
          render={(props) => (
            <EditImage {...props} handleLoading={handleLoading} />
          )}
        ></Route>

        <Route
          exact
          path={adminSlug.createImage}
          render={() => <CreateImage {...props} />}
        ></Route>

        <Route
          exact
          path={adminSlug.createVideo}
          render={() => <CreateVideo {...props} />}
        ></Route>
      </Switch>

      <Route
        exact
        path={adminSlug.editVideo}
        render={(props) => (
          <EditVideo {...props} handleLoading={handleLoading} />
        )}
      ></Route>

      <Route
        exact
        path={adminSlug.newsManager}
        render={(props) => (
          <NewsManager {...props} handleLoading={handleLoading} />
        )}
      ></Route>

      <Route
        exact
        path={adminSlug.createNews}
        render={(props) => (
          <CreateNews {...props} handleLoading={handleLoading} />
        )}
      ></Route>

      <Route
        exact
        path={adminSlug.inforManager}
        render={(props) => (
          <InforManager {...props} handleLoading={handleLoading} />
        )}
      ></Route>

      <Route
        exact
        path={adminSlug.productManager}
        render={(props) => (
          <ProductManager {...props} handleLoading={handleLoading} />
        )}
      ></Route>

      <Route
        exact
        path={adminSlug.editProduct}
        render={(props) => (
          <EditProduct {...props} handleLoading={handleLoading} />
        )}
      ></Route>
    </>
  );
};

export default AdminRoutes;
