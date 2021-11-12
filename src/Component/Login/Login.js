import React, { useRef } from 'react';
import { Link ,useHistory,useLocation} from 'react-router-dom';
import useAuth from '../../Hook/useAuth';


import logo from "../../images/Group 573.png"
import Navigation from '../Pages/Navigation/Navigation';
const Login = () => {
    const{loginUsingGoogle,setloading,error,loginUser,saveUser}=useAuth()

    const history=useHistory()
    const location=useLocation()
    const redirect_uri= location.state?.from || "/"

    const loginUsingGoogle1=()=>{
        loginUsingGoogle()
        .then((result) => {
              history.push(redirect_uri)  
            const user = result.user;
            saveUser(user.email,user.displayName,"put")
            
        }).finally(()=>setloading(false))
    }


    const emailRef=useRef()
    const passRef=useRef()

    const submit=(e)=>{
          e.preventDefault()
            const email=emailRef.current.value;
            const password=passRef.current.value;

            loginUser(email,password,history,location);


    }
    return (
        <>
        <Navigation></Navigation>

        <div style={{height:"450px"}} className="d-flex flex-column justify-content-center align-items-center">
            <div className="card " style={{width: "20rem"}}>
                   <form onSubmit={submit}>
                   <div className="card-body">
                        <h2 className="card-title">Please Login</h2>
                    <input ref={emailRef} placeholder="email" className="form-control border-bottom border border-0 mb-4 " type="email" name="" id="1" />
                    <input ref={passRef} placeholder="password" className="form-control border-bottom border border-0 mb-5" type="password" name="" id="2" />
                        
                    <input className="btn w-100 btn-danger mb-2" type="submit" value="Submit" />
                    <p className="text-center">new user? <Link to="/signup">signup</Link></p>
                    </div>
                   </form>
            </div> 
                <div>
                    <p className="text-center text-danger">{error}</p>
                    <p className="my-2 text-center">----------or----------</p>
                    <button onClick={loginUsingGoogle1} className="w-100 border px-5 rounded-pill btn btn-transplant"><img width="20px" className="me-5" src={logo} alt="" /> continue with google</button>
                </div>
                
            
        </div>
        </>
    );
};

export default Login;