import { Redirect, Route, Switch } from "react-router-dom";
import adminSlug from "../resources/AdminSlug";
import BannerManager from "../screens/Admin/Banner Manager/screens/BannerManager";
const AdminRoutes = (props) => {
  return (
    <>
      <Switch>
        <Route
          exact
          path={adminSlug.bannerManager}
          render={(props) => <BannerManager />}
        ></Route>
      </Switch>
    </>
  );
};

export default AdminRoutes;
