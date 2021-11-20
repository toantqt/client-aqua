import { Redirect, Route, Switch } from "react-router-dom";
import slug from "../resources/slug";
import News from "../screens/Category/components/News/News";
import ProductPage from "../screens/Product/screens/ProductPage";
import NewsPage from "../screens/News/screens/NewsPage";
import Introduce from "../screens/Category/components/Introduce/Introduce";
import DetailsProduct from "../screens/Details Product/screens/DetailsProductPage";
import OfficePage from "../screens/Office/Office";
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
          path={slug.dealer}
          render={() => <OfficePage {...props} />}
        ></Route>
        <Route
          exact
          path={slug.news}
          render={() => <News {...props} />}
        ></Route>
        <Route
          exact
          path={slug.recruitment}
          render={() => <News {...props} />}
        ></Route>
        <Route
          exact
          path={slug.introduce}
          render={(props) => <Introduce {...props} />}
        ></Route>
        <Route
          exact
          path={slug.detailsNews}
          render={(props) => <NewsPage {...props} />}
        ></Route>

        <Route
          exact
          path={slug.product}
          render={() => <ProductPage {...props} />}
        ></Route>

        <Route
          exact
          path={slug.detailsProduct}
          render={(props) => <DetailsProduct {...props} />}
        ></Route>
      </Switch>
    </>
  );
};

export default ClientRoutes;
