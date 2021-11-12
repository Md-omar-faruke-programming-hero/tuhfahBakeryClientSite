import React, { useRef, useState } from 'react';
import Rating from 'react-rating';
import useAuth from '../../../Hook/useAuth';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';

const PlaceOrder = (props) => {

    const{user}=useAuth()
    const history= useHistory()


    const {name,img,price,description,rating,pound}=props.cake
    const[cost,setCost]=useState(price)
    const[weight,setweight]=useState(pound)
    
    const pound15=()=>{
        setCost(price)
        setweight(pound)
    }
    const pound25=()=>{
        setCost(price+3.5)
        setweight(2.5)
    }
    
    const caketextRef=useRef()
    const areaRef=useState()
    const addressRef=useRef()
    
    const confirm=e=>{
        e.preventDefault()

        const cakeText= caketextRef.current.value;
        const area= areaRef.current.value;
        const address= addressRef.current.value
        

        const userOrderInfo={
            cakeText:cakeText,area:area,address:address,
            weight:weight,cost:cost,name:name,email:user.email,
            img:img,status:"pending"

        }
        console.log(userOrderInfo)
        // send data to server

        fetch('http://localhost:5000/user/order',{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(userOrderInfo)
        }).then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                swal({
                    title: "Nice choice!",
                    text: "we take your order!",
                    icon: "success",
                    button: "ok",
                    
                  });
                  caketextRef.current.value="";
                  areaRef.current.value="";
                  addressRef.current.value=""
                  history.push('/dashboard')
            }


        })
    }
    


    return (
        <div className="container my-5">
            <div className="row mx-0 px-0 justify-content-between">
                <div className="col-12 col-md-5 p-1">
                 <img src={img} className="w-100" alt="" />
                </div>
                <div className="col-12 col-md-5 p-1">
                    <h1 className="font">{name}</h1>
                    <Rating
                        readonly
                        initialRating={rating}
                        emptySymbol=" far fa-star"
                        fullSymbol=" text-warning fas fa-star "
                    />

                       <h3>cost: $ <span className="text-danger">{cost}</span> (vat free)</h3>  
                       <small >sellect weight</small>  <br />  
                       <button onClick={pound15} className="btn btn-secondary font my-3 me-2">1.5 pound</button>
                       <button  onClick={pound25} className="btn btn-secondary font my-3">2.5 pound</button> <br />

                    <form onSubmit={confirm}>
                      <input required ref={caketextRef} className="my-2 form-control" type="text" placeholder="Enter text on your cake" aria-label="city" />
                      <input required ref={areaRef} className="my-2 form-control" type="text" placeholder="Enter your Area" aria-label="city" />
                      <input required ref={addressRef} type="text" placeholder="Enter your home address in details" aria-label="address" className="form-control"/> <br />
                      <input className="btn btn-success w-100 " type="submit" value="confirm" />

                    </form>

                </div>
                <h3>Product Description :</h3>
                <p className="text-muted mb-2">{description}</p>

               
               <div style={{height:"150px"}} className="bg-light">
                    <div className="row  mx-0 px-0  mt-5">
                        <div className=" d-flex flex-column   col-4 col-md-4">
                            <i className="far fa-2x fa-thumbs-up "></i> 
                         <p><span className="fw-bolder">100%</span> on time delivery</p>
                            </div>
                        <div className="d-flex flex-column  col-4 col-md-4">
                            <i className="fab fa-2x fa-cc-visa"></i>
                        <p><span className="fw-bolder">100%</span> Payment Protection</p>
                            </div>
                        <div className=" d-flex flex-column  col-4 col-md-4">
                            <i className="fas fa-2x fa-users"></i>
                        <p> <span className="fw-bolder"> Million</span> Smiles Delivered</p>
                            </div>
                        </div>
               </div>

            </div>

            </div>
           
            
      
    );
};

export default PlaceOrder;