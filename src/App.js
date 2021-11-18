import { Route, Redirect, BrowserRouter, HashRouter } from "react-router-dom";
import HomePage from "./screens/Home/screens/HomePage";
import slug from "./resources/slug";
import { isLoggedIn, checkRole } from "./auth/auth";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={HomePage}></Route>
      {/* <Route
        path="/danh-muc/:slug"
        render={(props) => <CategoryPage {...props} />}
      ></Route>
      <Route
        exact
        path={slug.product}
        render={(props) => <ProductPage {...props} />}
      ></Route>
      <Route
        exact
        path={slug.shrimp}
        render={(props) => <ProductPage {...props} />}
      ></Route>
      <Route
        path="/bai-viet/:slug"
        render={(props) => <NewsPage {...props} />}
      ></Route>
      <Route
        path="/chi-tiet-san-pham/:productID"
        render={(props) => <DetailsProductPage {...props} />}
      ></Route>
      <Route
        path="/admin"
        render={() =>
          isLoggedIn() && checkRole("admin") ? (
            <Dashboard />
          ) : (
            <Redirect to="/auth/login" />
          )
        }
      ></Route>
      <Route path="/auth/login" component={LoginPage}></Route> */}
    </HashRouter>
  );
}

export default App;
