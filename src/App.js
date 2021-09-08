import { Route, Redirect, BrowserRouter, HashRouter } from "react-router-dom";
import HomePage from "./screens/Home/screens/HomePage";
import CategoryPage from "./screens/Category/screens/CategoryPage";
import NewsPage from "./screens/News/screens/NewsPage";
import ProductPage from "./screens/Product/screens/ProductPage";
import DetailsProductPage from "./screens/Details Product/screens/DetailsProductPage";
import slug from "./resources/slug";
function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={HomePage}></Route>
      <Route
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
    </HashRouter>
  );
}

export default App;
