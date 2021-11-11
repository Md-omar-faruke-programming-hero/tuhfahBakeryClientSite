import React, { useRef } from 'react';
import { Link ,useHistory} from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import swal from 'sweetalert';

const Signup = () => {
    const{createUser,error}=useAuth()
    const history=useHistory()

    const nameRef=useRef()
    const emailRef=useRef()
    const passRef1=useRef()
    const passRef2=useRef()

    const createNewUser=e=>{
        e.preventDefault()
        const name= nameRef.current.value
        const email=emailRef.current.value
        const pass1=passRef1.current.value
        const pass2=passRef2.current.value

        if(pass1 !== pass2){
            swal({
                title: "oops!",
                text: "Password don't matched! try again please",
                icon: "warning",
                button: "ok",
              });
        }else{
            createUser(email,pass1,name,history)
              nameRef.current.value=""
              emailRef.current.value=""
              passRef1.current.value=""
              passRef2.current.value=""
        }
    }




    return (
        
         <div style={{height:"550px"}} className="d-flex flex-column justify-content-center align-items-center">
             <div className="card " style={{width: "20rem"}}>
                   <form onSubmit={createNewUser} >
                   <div className="card-body">
                        <h2 className="card-title font">Feel free to connect with us</h2>
                    <input ref={nameRef}  placeholder="name" className="form-control border-bottom border border-0 mb-4 " type="text" name="" id="1" />
                   
                    <input ref={emailRef} placeholder="email" className="form-control border-bottom border border-0 mb-4 " type="email" name="" id="3" />
                   
                    <input ref={passRef1} placeholder="password" className="form-control border-bottom border border-0 mb-5" type="password" name="" id="2" />
                    
                    <input ref={passRef2} placeholder="re-enter password" className="form-control border-bottom border border-0 mb-5" type="password" name="" id="2" />
                        
                    <input className="btn w-100 btn-danger mb-2" type="submit" value="Sign up" />
                    <p className="text-center text-danger">{error}</p>
                    <p className="text-center">already a member? <Link to="/login">log in</Link></p>
                    </div>
                   </form>
            </div> 
        </div>
    );
};

export default Signup;