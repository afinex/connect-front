import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from "./resources/js/Pages/Auth/Login";
import Register from "./resources/js/Pages/Auth/Register";

import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "./resources/js/Pages/Home";
import Dashboard from "./resources/js/Pages/Auth/Dashboard";
import Profile from "./resources/js/Pages/Auth/Profile";
import Messages from "./resources/js/Pages/Auth/Messages";
import GeneralSetting from "./resources/js/Pages/Auth/User/Setting/General/GeneralSetting";
import PasswordSetting from "./resources/js/Pages/Auth/User/Setting/Password/PasswordSetting";

const App = () => {
  const {data} = useSelector((state)=>({...state})) || {};

  const isDataAvailable = data && Object.keys(data).length > 0;
  
  return (
    <BrowserRouter>
    <Switch>
      <Route
        path="/login"
        render={() =>
          isDataAvailable ? <Redirect to="/" /> : <Login />
        }
      >
      </Route>
      
      <Route
        path="/register"
        render={() =>
          isDataAvailable ? <Redirect to="/" /> : <Register />
        }
      >
      </Route>

      <Route 
        path="/messages"
        render={()=>isDataAvailable ? <Messages data={data}/> : <Redirect to="/login"></Redirect>
        }
      >
      </Route>

      <Route 
        path="/setting/general"
        render={()=>isDataAvailable ? <GeneralSetting data={data}/> : <Redirect to="/login"></Redirect>
        }
      >
      </Route>
      
      <Route 
        path="/setting/password"
        render={()=>isDataAvailable ? <PasswordSetting data={data}/> : <Redirect to="/login"></Redirect>
        }
      >
      </Route>
      
      <Route exact path="/" render={()=>isDataAvailable ? <Dashboard data={data}/> : <Redirect to="/login"></Redirect>}></Route>
      
      
      {/* this is for profile */}
      <Route exact path="/:username" render={()=>isDataAvailable ? <Profile data={data}/> : <Redirect to="/login"></Redirect>}></Route>
      
    </Switch>
    </BrowserRouter>
  );
}

export default App;
