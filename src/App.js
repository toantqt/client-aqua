import { Route, Redirect, BrowserRouter, HashRouter } from "react-router-dom";
import { isLoggedIn, checkRole } from "./auth/auth";
import Dashboard from "./screens/Admin/Dashboard/screens/Dashboard";
import HomePage from "./screens/Home/screens/HomePage";
import LoginPage from "./screens/Login/screens/LoginPage";

function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={HomePage}></Route>
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
      <Route path="/auth/login" component={LoginPage}></Route>
    </HashRouter>
  );
}

export default App;
