import React, { useEffect } from 'react';
import { useState } from 'react';
import Rating from 'react-rating';

const Testmonial = () => {
    const[testmonial,setTestmonial]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/userReview')
        .then(res=>res.json())
        .then(data=>setTestmonial(data))
    },[])
    return (
        <div className="container my-5">
            <h3 className="text-center my-5">Testmonials</h3>
            <div className="row container justify-content-center align-items-center">
                {
                    testmonial.map(test=> <div className="col-12 col-md-4 g-4 my-3" key={test._id}>
                    <div className="hover p-4">
                      <div className=" d-flex align-items-center justify-content-center">
                      <img src={test.img} className=" me-3 rounded-circle card-img-top w-25 " alt="..."/>
                      <p className="font text-danger fw-bolder">{test.name} <br />{test.identity}</p>
                      </div>
                      <div  className="text-center card-body">
                      <Rating
                      className=""

                                readonly
                                initialRating={test.rating}
                                emptySymbol=" far fa-star"
                                fullSymbol=" text-warning fas fa-star "
                            />
                          <p className=" text-muted  card-text">{test.review}</p>
                       </div>
                      
                    </div>
                  </div>)
                }

            </div>
            
        </div>
    );
};

export default Testmonial;