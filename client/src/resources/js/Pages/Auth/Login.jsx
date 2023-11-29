import TopNav from "../../Components/TopNav";
import LoginForm from "../../Components/Auth/LoginForm";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import axios from "axios";
import {toast} from "react-toastify";

const Login = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();
    const dispatch = useDispatch();
    
    const handleSubmit = async(e) =>{
      e.preventDefault();

      try {
        const res = await axios.post(`${import.meta.env.VITE_APP_API_SERVER}/login`,{
          email:email,
          password:password,
        })

        window.localStorage.setItem("auth", JSON.stringify(res.data.auth));
        dispatch({
          type : "LOGGED_IN_USER",
          payload : res.data,
        });

        toast.success(`Logged in .`)
        console.log(res);
      } catch (error) {
        toast.error(error.response.data);
      }
    }

    return(
      <>
      <TopNav/>
      <div className="container-fluid pb-3">
      <div className="d-grid gap-3" style={{ gridTemplateColumns: '1fr 2fr' }}>
        <div className="bg-light border rounded-3">
          <LoginForm
          handleSubmit={handleSubmit}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          />
        </div>
        <div className="bg-light border rounded-3">
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </div>
      </div>
      </div>
      </>
    )
}

export default Login;