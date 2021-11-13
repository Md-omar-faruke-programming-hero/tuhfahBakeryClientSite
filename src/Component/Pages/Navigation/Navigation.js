import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import logo from "../../../images/tuu.jpg"
import "./Navigation.css"

const Navigation = () => {
  const{user,logout}=useAuth()
    return (
      
        <div>
             <nav className=" navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand " to="/">
                <img src={logo} className="logo" alt="" />
         </Link>
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active fw-bolder" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                
                  {
                    user.email && <Link className="nav-link active text-primary fw-bolder" aria-current="page" to="/dashboard">DashBoard</Link>
                  }
              
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bolder" to="/allProducts">SweetCorner</Link>
              </li>
              
              <li className="nav-item">
                <Link to="/contact" className="nav-link fw-bolder ">Contact Us</Link>
              </li>
              <li className="nav-item">
                
                 {
                   user.email? <button onClick={logout} className="btn btn-danger">log out</button> :<Link to="/login" className="nav-link fw-bolder ">Login</Link>
                 }
                
              </li>
            </ul>
           
          </div>
        </div>
      </nav>
            
        </div>
    );
};

export default Navigation;