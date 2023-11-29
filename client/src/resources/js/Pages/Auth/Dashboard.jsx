import { useSelector } from "react-redux";
import TopNav from "../../Components/TopNav";

const Dashboard = () =>{
    const {auth} = useSelector((state)=>({...state}));
    
    return(
        <>
        <TopNav/>
        
        <div className="container-fluid pb-3">
        <div className="d-grid gap-3" style={{ gridTemplateColumns: '1fr 2fr' }}>
          <div className="bg-light border rounded-3">
            <p>Home logged in</p>
            <pre>{JSON.stringify(auth,null,4)}</pre>
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>

          <div className="bg-light border rounded-3">
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
          </div>
        </div>
        </div>
        </>
    )
}

export default Dashboard;