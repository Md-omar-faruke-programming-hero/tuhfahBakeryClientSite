import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { useHistory } from 'react-router-dom';
import banner from "../../../images/cakeBanner.jpg"
import Navigation from '../Navigation/Navigation';
import "./Allproducts.css"

const Allproducts = () => {
    const[allCakes,setAllCake]=useState([])
    useEffect(()=>{
        fetch('https://murmuring-springs-43801.herokuapp.com/allCake')
        .then(res=>res.json())
        .then(data=>setAllCake(data))
    },[])

    const history=useHistory()
    const cakeDetails=(id)=>{
            history.push(`/cakeDetails/${id}`)
    }
    return (
        <div>
            <Navigation></Navigation>
           <div> 
              <img src={banner} className="img"  width="100%"  alt="" />
           </div>
           <h1 className="fontFamily text-center mt-3" >Looking For Something else <span className="text-danger">???</span></h1>
           <div>
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
           </div>
           <div className="container">
               <div className="row mx-0 px-0">
                   {
                       allCakes.map(cake=><div key={cake._id} className="col-12 col-md-4 mt-3">
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

            
        </div>
    );
};

export default Allproducts;