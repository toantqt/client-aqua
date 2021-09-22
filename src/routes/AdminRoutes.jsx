import { Redirect, Route, Switch } from "react-router-dom";
import adminSlug from "../resources/AdminSlug";
import BannerManager from "../screens/Admin/Banner Manager/screens/BannerManager";
import EditBanner from "../screens/Admin/Banner Manager/screens/EditBanner";
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
      </Switch>
    </>
  );
};

export default AdminRoutes;
