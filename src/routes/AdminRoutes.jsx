import { Redirect, Route, Switch } from "react-router-dom";
import adminSlug from "../resources/AdminSlug";
import BannerManager from "../screens/Admin/Banner Manager/screens/BannerManager";
import EditBanner from "../screens/Admin/Banner Manager/screens/EditBanner";
import CategoryManager from "../screens/Admin/Category Manager/screens/CategoryManger";
import EditCategory from "../screens/Admin/Category Manager/screens/EditCategory";
import LibraryManager from "../screens/Admin/Image Manager/screens/LibraryManager";
import EditImage from "../screens/Admin/Image Manager/screens/EditImage";
import CreateImage from "../screens/Admin/Image Manager/screens/CreateImage";
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
      </Switch>
    </>
  );
};

export default AdminRoutes;
