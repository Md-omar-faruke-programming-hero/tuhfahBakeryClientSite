import React from 'react';
import "./Footer.css"

import logo from "../../../images/tuu.jpg"
import payment from "../../../images/method.png"
const Footer = () => {
    return (
     <div className="">
          <div className="shadow bg-light ">
            <div className="row container mt-5 text-center">
            <div className="col-md-3 mt-5">
              <img className="w-100 " src={logo} alt="" />
                
                <h4>Follow Use</h4>
                <i className="facebook fab fa-facebook-square fa-2x me-3"></i>
                <i className=" youtube fab fa-youtube  fa-2x me-3"></i>
                <i className=" insta fab fa-instagram-square fa-2x"></i>
            </div>
            <div className="col-md-3 mt-5">
                <h4>Contact Us</h4>
                <p>+01852-1265122 <br />+01852-1265122</p> <br />
                <p>info@example.com <br /> support@example.com</p>
            </div>
            <div className="col-md-3 mt-5">
                <h4>Support</h4>
                <p>contact Us</p>
                <p>About Us</p>
                <p>Our Blog</p>
                <p>offer</p>

            </div>
            <div className="col-md-3 mt-5">
                <h4>We access</h4>
                <img className="pay" src={payment} alt="" />
            </div>

            
            </div>
            <p className="text-center fw-bolder font text-muted">Copyright 2021 Sweet Corner | </p>
      </div>

     </div>
    );
};

export default Footer;