import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import swal from 'sweetalert';


const AddAProduct = () => {
    const history=useHistory()
    const nameRef=useRef()
    const costRef=useRef()
    const ratingRef=useRef()
    const descriptionRef=useRef()
    const imgRef=useRef()

    const submit=e=>{
        e.preventDefault()

        const img=imgRef.current.value;
        const name=nameRef.current.value
        const price= parseInt(costRef.current.value)
        const  rating=ratingRef.current.value
        const description=descriptionRef.current.value

        const productInfo={
            img,name,price,rating,description,pound:1.5
        }

        fetch('http://localhost:5000/addNweProduct',{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(productInfo)
        }).then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                imgRef.current.value="";
                nameRef.current.value=""
                costRef.current.value=""
                ratingRef.current.value=""
                descriptionRef.current.value=""
                
                swal("Done!", "Product added successfully!", "success");
            }
            history.push('/allProducts')
        })

   }

    return (

        <div className="d-flex align-items-center justify-content-center">
            <div className="row my-2 mx-0 px-0   ">
           <p className="fs-3 text-center "> Product Details</p>
           
                <form onSubmit={submit} >
                
                <div className="row border p-2 mt-5 mb-2 ">
                    <div className="col-md-6">
                        <label for="basic-url" className="form-label">Product Name</label>
                        <div className="input-group mb-3">
                             <input required ref={nameRef} type="text" className="form-control mb-3" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>
                        <label for="basic-url" className="form-label">Set Product  Cost</label>
                        <div className="input-group mb-3">
                             <input required ref={costRef} type="number" placeholder="for 1.5 pound" ror="4" col="4" className="form-control mb-3" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>
                        <label for="basic-url" className="form-label">Product Rating</label>
                        <div className="input-group mb-3">
                             <input required ref={ratingRef} type="number"  className="form-control mb-3" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>

                    </div>
                    <div className="col-md-6">
                    <label for="basic-url" className="form-label">Product Description :</label>
                        <div className="input-group mb-3">
                             <textarea required ref={descriptionRef} type="text"  className="form-control mb-3" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>
                   
                    <label for="basic-url" className="form-label">Product Image</label>
                        <div className="input-group mb-3">
                             <input required ref={imgRef} type="text" placeholder="url" className="form-control mb-3" id="basic-url" aria-describedby="basic-addon3"/>
                        </div>
                   

                    </div>

                </div>
                <div className="text-end">
                    <input className="btn btn-primary" type="submit" value="Submit" />
                </div>

                </form>
           
            
        </div>
        </div>
    );
};

export default AddAProduct;