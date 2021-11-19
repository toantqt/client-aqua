import { Redirect, Route, Switch } from "react-router-dom";
import slug from "../resources/slug";
import News from "../screens/Category/components/News/News";
import ProductPage from "../screens/Product/screens/ProductPage";
const ClientRoutes = (props) => {
  return (
    <>
      <Switch>
        <Route
          exact
          path={slug.warning}
          render={() => <News {...props} />}
        ></Route>

        <Route
          exact
          path={slug.product}
          render={() => <ProductPage {...props} />}
        ></Route>
      </Switch>
    </>
  );
};

export default ClientRoutes;
