import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useHistory } from 'react-router-dom';
import "./SellProduct.css"

const SellProduct = () => {
    const[cakes,setCakes]=useState([])
    useEffect(()=>{
        fetch('https://murmuring-springs-43801.herokuapp.com/allCake')
        .then(res=>res.json())
        .then(data=>setCakes(data.slice(0,6)))
    },[])

    
    const history=useHistory()
    const exploreMore=()=>{
        history.push("/allProducts")
    }
    const cakeDetails=(id)=>{
        history.push(`/cakeDetails/${id}`)
    }

    if(cakes.length=== 0){
      return  <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
    }
    else{
      return (
        <div className="container my-5 ">
            <h1 className="text-center">Check Out Our Best <span className="text-danger">selling</span> Cakes</h1>
            <div className="container mb-5 bg-light">
                <div className="row mx-0 px-0 my-3">
                    {
                      cakes.map(cake=> <div key={cake._id} className="col-12 col-md-4 mt-3">
                      <div className="hover">
                       <div >
                       <img src={cake.img} height="200px" style={{objectFit:"cover"}} className="w-100  card-img-top rounded-3" alt="..."/>
                       </div>
                        <div  className="card-body rounded-3">
                          <h5 className="card-title text-center text-muted">{cake.name}</h5>
                          <div className="d-flex align-items-center justify-content-around">
                          <div>
                          <p className=" card-text fw-bolder"><i className="text-warning fas fa-2x fa-weight me-1"></i>{cake.pound} <span className="font">Pounds</span></p>
                          <Rating
                                readonly
                                initialRating={cake.rating}
                                emptySymbol=" far fa-star"
                                fullSymbol=" text-warning fas fa-star "
                            />
                          </div>
                
                            <button onClick={()=>cakeDetails(cake._id)} className="btn btn-danger">Order Now!</button>
                          </div>
                        </div>
                      </div>
                    </div>)  
                    }
                </div>


            </div>
           <p className="text-center"> <button onClick={exploreMore} className=" btn btn-info font"><i className="me-1 fas  fa-search"></i>Explore more</button></p>
            
        </div>
    );

    }
    
};

export default SellProduct;