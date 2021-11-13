import React, { useRef } from 'react';
import useAuth from '../../../Hook/useAuth';
import swal from 'sweetalert';
import { useHistory } from 'react-router-dom';


const Review = () => {
    const {user}=useAuth()


    const nameRef=useRef()
    
    const reviewRef=useRef()
    const ratingRef=useRef()

    const history=useHistory()
    const submitReview=e=>{
        e.preventDefault()
        const name =nameRef.current.value
        
        const review= reviewRef.current.value
        const rating=ratingRef.current.value;    
        const postReview={
            name,review,img:user.photoURL,rating
        }

        fetch('https://murmuring-springs-43801.herokuapp.com/userReview',{
            method:"post",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(postReview)
        }).then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                nameRef.current.value=""
                
                reviewRef.current.value=""
                swal({
                    title: "Thank you so much!",
                    text: "stay connect with us!",
                    icon: "success",
                    button: "ok!",
                  });
            }
            history.push('/')
        })

    }

    
    return (
        <div className="container text-center">
            <h3 className="mb-5">Review</h3>
            <form onSubmit={submitReview}>
            <input ref={nameRef} placeholder="your name" defaultValue={user.displayName} className="p-2 w-50 border border-2 mb-3" name="" type="text"  id="1" /> <br />
           
            <input ref={ratingRef} placeholder="give a rating please 1 to 5" className="p-2 w-50 border border-2 mb-3" name="" type="number"  id="4" /> <br />
            <textarea ref={reviewRef} placeholder="your review" className="p-2 w-50 border border-2 mb-3" name="" id="" cols="40" rows="5"></textarea> <br />
            <input className="w-25 btn btn-danger" type="submit" value="Submit" />

            </form>
            
        </div>
    );
};

export default Review;