import { Route, Redirect, BrowserRouter, HashRouter } from "react-router-dom";
import HomePage from "./screens/Home/screens/HomePage";
function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={HomePage}></Route>
    </HashRouter>
  );
}

export default App;
