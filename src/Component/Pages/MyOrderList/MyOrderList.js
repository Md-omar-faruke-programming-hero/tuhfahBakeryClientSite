import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hook/useAuth';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';


const MyOrderList = () => {
    const{user}=useAuth()
    const [orders,setOrder]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/user/order?email=${user.email}`)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[user.email])

    const payment=()=>{
        swal({
            title: "please wait!",
            text: "this function will coming very soon!",
            icon: "info",
            button: "ok!",
          });
    }
    const cancleOrder=id=>{

        swal({
            title: "Are you sure to delete?",
            text: "Once deleted, you will not get discount in your next order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`http://localhost:5000/user/order/${id}`,{
                   method:"delete",
            })
            .then(res=>res.json())
            .then(data=>{
            if(data.deletedCount>0){
                swal("Done!", "your order is canceled!", "success");
                const remain= orders.filter(rest=>id!==rest._id)
                setOrder(remain)
            }
        })
             
            } else {
                swal({
                    title: "Good job!",
                    text: "You order is safe!",
                    icon: "success",
                    button: "ok!",
                  });
            }
          });
    }
    const history=useHistory()
    const ok=()=>{
        history.push('/allProducts')
    }

    if(orders.length===0){
        return <div style={{height:"500px"}} className="  d-flex flex-column justify-content-center  align-items-center">
            <h3 className='text-center' >order list is empty, do order fast and get discount 😋 </h3> <br />
            <div className="text-center w-50">
            <button onClick={ok} className="btn btn-primary w-25 ">ok</button>
            </div>
        </div>
    }
    else{
        return (
            <div  className="container my-5">
                <h1 className="text-center mb-5 font">My orders</h1>
                <div className="row  mx-0 px-0 justify-content-center  align-items-center">
                    {
                        orders.map(order=> <div key={order._id} className="col-md-5 mb-4 border rounded-3 col-12 p-3 ms-2">
                        <div className="row mx-0 px-0">
                            <div className="col-md-6">
                                 <img  style={{height:"110px",objectFit:"cover"}} className="w-100  " src={order.img} alt="" />
                                 <h5 className="text-muted" >{order.name}</h5>
                                 <p>Delivery process: "<span className="text-danger">{order.status}</span>"</p>
                            </div>
                            <div className="col-md-6">
                                <p className="font text-muted">Dear customer, you choose one <span className="text-dark font fw-bolder">{order.weight} </span> (pound) cake on Date: <span className="text-dark font fw-bolder">{order.orderPlaceDate}</span> which price is only <span className="text-dark  fw-bolder">${order.cost}</span> </p>
                             
                             
                             <p>Payment on: ( " <span className="fw-bolder text-warning" >{order.paymentDate}</span> " )</p>
                           
                             <div className="text-end">
                             <button onClick={payment} className="btn btn-success me-2">Pay</button>
                             <button onClick={()=>cancleOrder(order._id)} className="btn btn-danger text-end">cancle</button>
                             </div>
                            </div>
             
                        </div>
                    </div>)
                    }
    
                </div>
                
            </div>
        );
        
    }
    
};

export default MyOrderList;