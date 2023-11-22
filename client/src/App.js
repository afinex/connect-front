import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./resources/js/Pages/Home";
import Login from "./resources/js/Pages/Auth/Login";
import Register from "./resources/js/Pages/Auth/Register";

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
