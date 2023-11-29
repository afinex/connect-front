import { useSelector } from "react-redux";

import Dashboard from "./Auth/Dashboard";
import Home from "./Home";

const Index = () =>{
    const {auth} = useSelector((state)=>({...state}));

    return(
        <>
        { auth === null && (
          <Home/>
        )}

        { auth && (
          <Dashboard/>
        )}

        </>
    )
}

export default Index;