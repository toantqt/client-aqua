import { Route, Redirect, BrowserRouter, HashRouter } from "react-router-dom";
import HomePage from "./screens/Home/screens/HomePage";
import CategoryPage from "./screens/Category/screens/CategoryPage";
import NewsPage from "./screens/News/screens/NewsPage";
function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={HomePage}></Route>
      <Route
        path="/danh-muc/:slug"
        render={(props) => <CategoryPage {...props} />}
      ></Route>
      <Route
        path="/bai-viet/:slug"
        render={(props) => <NewsPage {...props} />}
      ></Route>
    </HashRouter>
  );
}

export default App;
