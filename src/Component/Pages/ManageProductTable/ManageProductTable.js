import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

export default function ManageProductTable(props) {
    const[products,setProduct]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/allCake')
        .then(res=>res.json())
        .then(data=>setProduct(data))
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
                fetch(`http://localhost:5000/cakeDetails/${id}`,{
                method:"delete"
            }).then(res=>res.json())
            .then(data=>{
                if(data.deletedCount>0){
                    swal("Poof! Your product data has been deleted!", {
                        icon: "success",
                      });
                }
                const remain=products.filter(rest=> id!== rest._id)
                setProduct(remain);
            })

             
            } else {
              swal("Your product details is safe!");
            }
          });




        

    }
  return (
   <div className="text-center">
        <Table>
      <Thead>
        <Tr>
          <Th>CakeName</Th>
          <Th>Product code</Th>
          <Th>Action</Th>
        </Tr>
      </Thead>
      {
          products.map(product=><Tbody>
            <Tr>
              <Td>{product.name}</Td>
              <Td>{product._id.slice(22,24)}</Td>
              <Td><button onClick={()=>deleteProduct(product._id)} className="btn btn-danger">delete</button></Td>
            </Tr>
            </Tbody>  )
      }

      
        
      
    </Table>
   </div>
  );
}