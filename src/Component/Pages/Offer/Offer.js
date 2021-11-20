import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"

const Offer = () => {
    const url =" https://gmail.us20.list-manage.com/subscribe/post?u=d6452af85676d07ff30ebf40e&amp;id=7333f56f4c"

    return (
        <div>
            <div className="w-75 bg-warning mx-auto b p-5  my-5 d-flex flex-column justify-content-center align-items-center">
                    <h1 className="text-center fw-bolder text-white mt-5">Subscribe To Our Newsletter <br /> For Latest Offer</h1>
                    <div className="d-flex mb-5">

                    <MailchimpSubscribe  className="form-control me-2" url={url}/>
                        {/* <input className="form-control me-2" type="search" placeholder="enter your mail" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Subscribe</button> */}
                    </div>
                </div>
            
        </div>
    );
};

export default Offer;