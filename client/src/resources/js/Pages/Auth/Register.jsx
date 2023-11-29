import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import TopNav from "../../Components/TopNav";
import RegisterForm from "../../Components/Auth/RegisterForm";
import {toast} from "react-toastify"

const Register = () =>{
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    let history = useHistory();

    const handleSubmit = async(e ) =>{
      e.preventDefault();

      try {
        const res = await axios.post(`${import.meta.env.VITE_APP_API_SERVER}/register`,{
          username: username,
          email: email,
          password: password,
        });

        toast.success(`Registration success.`);
        history.push('/login');
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
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
          <div className="bg-light border rounded-3">
            <RegisterForm
            handleSubmit={handleSubmit}
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            />
          </div>
        </div>
        </div>
        </>
    )
}

export default Register;