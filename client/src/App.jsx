import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./resources/js/Pages/Auth/Login";
import Register from "./resources/js/Pages/Auth/Register";

import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./resources/js/Pages/Home";
import Dashboard from "./resources/js/Pages/Auth/Dashboard";
import Profile from "./resources/js/Pages/Auth/Profile";


const App = () => {
  const {data} = useSelector((state)=>({...state}));

  return (
    <BrowserRouter>
    <Switch>
      <Route
        path="/login"
        render={() =>
          data ? <Redirect to="/" /> : <Login />
        }
      >
      </Route>
      
      <Route
        path="/register"
        render={() =>
          data ? <Redirect to="/" /> : <Register />
        }
      >
      </Route>
      
      <Route exact path="/" render={()=>data ? <Dashboard data={data}/> : <Home/>}></Route>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
