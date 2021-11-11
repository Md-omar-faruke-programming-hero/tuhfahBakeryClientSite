import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hook/useAuth';
import logo from "../../../images/cakeLogo.png"

const Navigation = () => {
  const{user,logout}=useAuth()
    return (
        <div>
             <nav className=" navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand ms-5" to="/">
      <img src={logo} className="logo" alt="" width="100" height="50"/>
         </Link>
            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                
                  <Link className="nav-link active" aria-current="page" to="/dashBoard">DashBoard</Link>
              
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Our Portfolio</Link>
              </li>
              <li className="nav-item">
                <Link to="/team" className="nav-link ">Our Team</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link ">Contact Us</Link>
              </li>
              <li className="nav-item">
                
                 {
                   user.email? <button onClick={logout} className="btn btn-danger">log out</button> :<Link to="/login" className="nav-link ">Login</Link>
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