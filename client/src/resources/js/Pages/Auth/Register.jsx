import TopNav from "../../Components/TopNav";
import { useSelector } from "react-redux";
import RegisterForm from "../../Components/Auth/RegisterForm";
import { useState } from "react";

const Register = () =>{
    const {auth} = useSelector((state)=>({...state}));

    return(
        <>
        <TopNav/>
        <div className="container-fluid pb-3">
        <div className="d-grid gap-3" style={{ gridTemplateColumns: '1fr 2fr' }}>
          <div className="bg-light border rounded-3">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
          <div className="bg-light border rounded-3">
            <RegisterForm/>
          </div>
        </div>
        </div>
        </>
    )
}

export default Register;