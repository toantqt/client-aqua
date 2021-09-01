import { Route, Redirect, BrowserRouter } from "react-router-dom";
import HomePage from "./screens/Home/screens/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage}></Route>
    </BrowserRouter>
  );
}

export default App;
