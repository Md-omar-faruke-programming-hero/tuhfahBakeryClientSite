import React from 'react';
import banner from "../../../images/cakeBanner.jpg"
import "./Banner.css"

const Banner = () => {
   
    return (
        <div>
           <div>
           <img src={banner} className="img"  width="100%"  alt="" />
           </div>
          <div className="container">
          <div className="text-center my-5">
             <h1 className="font mt-2">Welcome to Our Sweet Corner <span className="text-warning">!!!</span></h1>
           <p className="text-center text-muted ">We are exactly what you are looking for. Yes, we are an FSSAI certified online cake and Bakery Company that specializes in delivering absolutely lip-smacking delicacies. Currently, we are delivering cakes every where in Dhaka city. We are not just a bakery, we are not just bakers. In fact, we are just like you, a bunch of food lovers fascinated with sweet indulgence, who dreamt of creating an appetizing fairy land of divine delicacies that relishes the utmost desires.</p>

           </div>
          </div>
        </div>
    );
};

export default Banner;