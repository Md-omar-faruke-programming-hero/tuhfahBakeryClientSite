import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function ManageUsersOrderTable(props) {
    const[userOrder,setUserOrder]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/user/order')
        .then(res=>res.json())
        .then(data=>setUserOrder(data))
    },[])

    const deleteProduct=(id)=>{

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this product details!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch(`http://localhost:5000/user/order/${id}`,{
                method:"delete"
            }).then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    swal(" Your user order info data has been deleted!", {
                        icon: "success",
                      });
                }
                const remain=userOrder.filter(rest=> id!== rest._id)
                setUserOrder(remain);
            })

             
            } else {
              swal("Your product details is safe!");
            }
          });
        }

        const update=id=>{

            swal({
                title: "Payment is ok?",
                text: "if payment not clear ,please press cancel",
                icon: "warning",
                buttons:   true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {

                    const updateInfo={
                        status:"On processing",
                        paymentDate: new Date().toLocaleDateString()
                    }
                    fetch(`http://localhost:5000/user/order/update/${id}`,{
                        method:"put",
                        headers:{
                            "content-type":"application/json"
                        },
                        body:JSON.stringify(updateInfo)
                    }).then(res=>res.json())
                    .then(data=>{
                        if(data.modifiedCount>0){
                            swal("Updated Order", {
                                icon: "success",
                              });
                           setTimeout(() => window.location.reload(), 500)
                           
                        }
                    })


                 
                } else {
                  swal("Order not Updated");
                }
              });



           
        }
  return (
   <div className="text-center my-3">
        <Table>
      <Thead>
        <Tr>
          <Th>Email</Th>
          <Th>CustomerName</Th>
          <Th>Product</Th>
          <Th>Price</Th>
          <Th>Weight</Th>
          <Th>OrderDate</Th>
          <Th>PaymentDate</Th>
          <Th>DeliveryStatus</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      {
          userOrder.map(order=><Tbody>
            <Tr>
              <Td>{order.email}</Td>
              <Td>{order.customerName.split(' ')[0]}</Td>
              <Td>{order.name}</Td>
              <Td>${order.cost}</Td>
              <Td>{order.weight}(pound)</Td>
              <Td>{order.orderPlaceDate}</Td>
              <Td>{order.paymentDate}</Td>
              <Td>{order.status}</Td>
              <Td><button onClick={()=>update(order._id)} className="btn btn-success me-1"><i class="fas fa-check-circle"></i></button><button onClick={()=>deleteProduct(order._id)} className="btn btn-danger">delete</button></Td>
            </Tr>
            </Tbody>  )
      }

      
        
      
    </Table>
   </div>
  );
}