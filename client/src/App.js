import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./resources/js/Pages/Home";

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
