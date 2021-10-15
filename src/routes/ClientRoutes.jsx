import { Redirect, Route, Switch } from "react-router-dom";
import slug from "../resources/slug";
import News from "../screens/Category/components/News/News";
import Introduce from "../screens/Category/components/Introduce/Introduce";
import Achievements from "../screens/Category/components/Achievements/Achievements";
import Product from "../screens/Product/components/Product";
import Office from "../screens/Category/components/Office/Office";
import Lirary from "../screens/Category/components/Library/Library";
import Education from "../screens/Category/components/Education/Education";
const ClientRoutes = (props) => {
  const category = props?.category;
  const handleLoading = props?.handleLoading;
  return (
    <>
      <Switch>
        <Route
          exact
          path={slug.education}
          render={() => <Education category={category} />}
        ></Route>
        <Route
          exact
          path={slug.library}
          render={() => <Lirary category={category} />}
        ></Route>
        <Route
          exact
          path={slug.office}
          render={() => <Office category={category} />}
        ></Route>
        <Route exact path={slug.introduce} render={() => <Introduce />}></Route>

        <Route
          exact
          path={slug.achievements}
          render={(props) => <Achievements />}
        ></Route>

        <Route
          exact
          path={slug.news}
          render={(props) => (
            <News
              category={category}
              handleLoading={handleLoading}
              {...props}
            />
          )}
        ></Route>

        <Route
          exact
          path={slug.product}
          render={() => <Product category={category} />}
        ></Route>
        <Route
          exact
          path={slug.shrimp}
          render={() => <Product category={category} />}
        ></Route>
      </Switch>
    </>
  );
};

export default ClientRoutes;
