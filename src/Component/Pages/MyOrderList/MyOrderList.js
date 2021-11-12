import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/useAuth';


const MyOrderList = () => {
    const{user}=useAuth()
    const [orders,setOrder]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/user/order?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[user.email])

    const cancleOrder=id=>{

    }
    return (
        <div  className="container my-5">
            <h1 className="text-center mb-5 font">My orders</h1>
            <div className="row  mx-0 px-0 justify-content-center  align-items-center">
                {
                    orders.map(order=> <div className="col-md-5 mb-4 border col-12 p-3 ms-2">
                    <div className="row mx-0 px-0">
                        <div className="col-md-6">
                             <img className="w-100" src={order.img} alt="" />
                             <h2 className="text-muted" >{order.name}</h2>
                             <p>Delivery process: "<span className="text-danger">{order.status}</span>"</p>
                        </div>
                        <div className="col-md-6">
                            <p className="font text-muted">Dear customer, you choose one <span className="text-dark font fw-bolder">{order.weight} </span> (pound) cake on Date: <span className="text-dark font fw-bolder">{order.orderPlaceDate}</span> which price is only <span className="text-dark  fw-bolder">${order.cost}</span> </p>
                         
                         
                         <p>Payment on: ( " <span className="fw-bolder text-warning" >{order.paymentDate}</span> " )</p>
                       
                         <div className="text-end">
                         <button  className="btn btn-success me-2">Pay</button>
                         <button onClick={()=>cancleOrder(order._id)} className="btn btn-danger text-end">cancle</button>
                         </div>
                        </div>
         
                    </div>
                </div>)
                }

            </div>
            
        </div>
    );
};

export default MyOrderList;