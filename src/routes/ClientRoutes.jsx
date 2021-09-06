import { Redirect, Route, Switch } from "react-router-dom";
import slug from "../resources/slug";
import News from "../screens/Category/components/News/News";
const ClientRoutes = (props) => {
  const category = props?.category;
  const handleLoading = props?.handleLoading;
  return (
    <>
      <Switch>
        <Route
          path={slug.news}
          render={(props) => (
            <News
              category={category}
              handleLoading={handleLoading}
              {...props}
            />
          )}
        ></Route>
      </Switch>
    </>
  );
};

export default ClientRoutes;
