import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Navigation from '../Navigation/Navigation';
import PlaceOrder from '../PlaceOrder/PlaceOrder';

const CakeDetails = () => {
    const {id}=useParams()
    const[cakeDetails,setCakeDetails]=useState([])
    useEffect(()=>{
        fetch(`https://murmuring-springs-43801.herokuapp.com/cakeDetails/${id}`)
        .then(res=>res.json())
        .then(data=>setCakeDetails(data))
    },[id])
    return (
        <div>
            <Navigation></Navigation>

            {
                cakeDetails.map(cake=> <PlaceOrder cake={cake} key={cake._id} ></PlaceOrder>)
            }
            
        </div>
    );
};

export default CakeDetails;