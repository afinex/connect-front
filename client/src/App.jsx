import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./resources/js/Pages/Auth/Login";
import Register from "./resources/js/Pages/Auth/Register";

import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./resources/js/Pages/Home";
import Dashboard from "./resources/js/Pages/Auth/Dashboard";
import Profile from "./resources/js/Pages/Auth/Profile";


const App = () => {
  const {auth} = useSelector((state)=>({...state}));

  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" render={()=>auth ? <Dashboard auth={auth}/> : <Home/>}></Route>
      <Route exact path="/profile" render={()=>auth ? <Profile auth={auth}/> : <Redirect to="/login"></Redirect>}></Route>

      <Route
        path="/login"
        render={() =>
          auth ? <Redirect to="/" /> : <Login />
        }
      >
      </Route>
      
      <Route
        path="/register"
        render={() =>
          auth ? <Redirect to="/" /> : <Register />
        }
      >
      </Route>

      
    </Switch>
    </BrowserRouter>
  );
}

export default App;
