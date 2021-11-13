import React from 'react';
import Navigation from '../Navigation/Navigation';

const ContactUs = () => {
    return (
        <>
        <Navigation></Navigation>
        <div className="container my-5">
        <div className="row">
            <div className="col-md-5 mx-auto">
                <h4>Send Us A Message</h4>
                <div className="row">
                    <div className="col-md-5 col-12">
                        <input className="p-2 rounded-3 bg-light m-2" type="text" name="" id="" placeholder="full name"/>
                        <input className="p-2 rounded-3 bg-light m-2"  type="number" name="" id="" placeholder="Phone Number"/>
                    </div>
                    <div className="col-md-5 ">
                    <input className="p-2 rounded-3 bg-light m-2"  type="email" name="" id="" placeholder="Enter your mail"/>
                    <input className="p-2 rounded-3 bg-light m-2"  type="text" name="" id="" placeholder="Subject"/>

                    </div>
                    <textarea className="p-2 mx-auto rounded-3 bg-light" placeholder="your message" name="" id="" cols="" rows=""></textarea>
                <button className="mt-3 btn btn-success">send</button>
                </div>
                
            </div>
            <div className="col-md-5 col-12 mx-auto">
                <h4>Contact Details</h4>
                <h5 className="fw-bolder">Phone:</h5>
                <p className="text-muted">+123 4567 8910  <br />+88 0123 5465</p> <br />
                <h5 className="fw-bolder">email:</h5>
                <p className="text-muted">mail@example.com <br /> info@sitename.net</p> <br />
                <h5 className="fw-bolder">Address:</h5>
                <p className="text-muted">29 Division Pt New York, NY 10002, USA</p>
            </div>

        </div>
        
    </div>
    </>
    );
};

export default ContactUs;