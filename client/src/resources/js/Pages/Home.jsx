import TopNav from "../Components/TopNav";

const Home = () =>{

    return(
        <>
        <TopNav/>
        
        <div className="container-fluid pb-3">
        <div className="d-grid gap-3" style={{ gridTemplateColumns: '1fr 2fr' }}>
          <div className="bg-light border rounded-3">
            <p>Home not logged in</p>
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

export default Home;