import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./resources/js/Pages/Auth/Login";
import Register from "./resources/js/Pages/Auth/Register";

import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./resources/js/Pages/Home";
import Dashboard from "./resources/js/Pages/Auth/Dashboard";

const App = () => {
  const {auth} = useSelector((state)=>({...state}));

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" render={()=>auth ? <Dashboard/> : <Home/>}></Route>

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
