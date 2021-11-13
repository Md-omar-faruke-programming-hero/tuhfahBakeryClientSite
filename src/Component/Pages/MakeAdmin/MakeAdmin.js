import React, { useRef } from 'react';
import swal from 'sweetalert';


const MakeAdmin = () => {
    const emailRef=useRef()
    const makeAdmin=e=>{
        const email=emailRef.current.value
        const newAdmin={email}
        fetch('https://murmuring-springs-43801.herokuapp.com/user/admin',{
            method:"put",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newAdmin)
        }).then(res=>res.json())
        .then(data=>{
            if(data.matchedCount===1 && data.modifiedCount===1){
                swal({
                    title: "Done!",
                    text: `your new Admin is "${email}"`,
                    icon: "success",
                    button: "ok!",
                  });
            }
            else if(data.matchedCount===1 && data.modifiedCount===0){
                swal({
                    
                    text: `"${email}" already added as an admin `,
                    icon: "info",
                    button: "ok!",
                  });
            }
            else{
                swal({
                    title: "oops!",
                    text: `"${email}" this email not found`,
                    icon: "warning",
                    button: "ok!",
                  });

            }
            emailRef.current.value=""
        })
        e.preventDefault()
    }
    return (
        <div className="container text-center">
        <h3>Make an Admin</h3>
        <form onSubmit={makeAdmin}>
            <input ref={emailRef} className="border my-5 w-50" placeholder="email" type="email" name="" id="" /> <br />
            <input className="btn btn-success" type="submit" value="submit" />
        </form>
        
    </div>
    );
};

export default MakeAdmin;