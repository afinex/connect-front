import { BrowserRouter, Switch, Route } from "react-router-dom";

import Index from "./resources/js/Pages/Index";
import Login from "./resources/js/Pages/Auth/Login";
import Register from "./resources/js/Pages/Auth/Register";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const {auth} = useSelector((state)=>({...state}));

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index}></Route>

      <Route
          exact
          path="/login"
          render={() =>
            auth ? <Redirect to="/" /> : <Login />
          }
      >
      </Route>
      
      <Route
          exact
          path="/register"
          render={() =>
            auth ? <Redirect to="/" /> : <Register />
          }
      >
      </Route>
      
      <Redirect to="/"></Redirect>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
