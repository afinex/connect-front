import React from 'react';
import {toast} from "react-toastify";

import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import {Link} from "react-router-dom";

const TopNav = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { auth } = useSelector((state) => ({ ...state }));
  
    const logoutUser = () => {
      try {
        dispatch({
          type: "LOGGED_OUT_USER",
          payload: null,
        });
        window.localStorage.removeItem("auth");
        toast.success(`Session logged out.`);
        history.push('/login');
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
        <>
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                            <use xlinkHref="#bootstrap" />
                        </svg>
                    </a>

                    <ul className="nav nav-pills col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li className="nav-item"><Link to="/" className="nav-link active" aria-current="page">Home</Link></li>
                        <li><a href="#" className="nav-link px-2 link-secondary">Overview</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Inventory</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Customers</a></li>
                        <li><a href="#" className="nav-link px-2 link-dark">Products</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
                    </form>

                    { auth === null && (<Link to="/login" className='btn btn-primary mx-2'>Login</Link>)}
                    { auth === null && (<Link to="/register" className='btn btn-primary mx-2'>Register</Link>)}
                    { auth !== null && (<div className="dropdown text-end">
                        <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                        </a>
                        <ul className="dropdown-menu text-small">
                            {/* <li><a className="dropdown-item" href="#">New project...</a></li> */}
                            {/* <li><a className="dropdown-item" href="#">Settings</a></li> */}
                            {/* <li><a className="dropdown-item" href="#">Profile</a></li> */}
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item pointer" onClick={logoutUser}>Sign out</a></li>
                        </ul>
                    </div>)}
                </div>
            </div>
        </header>
        </>
    );
}

export default TopNav;
