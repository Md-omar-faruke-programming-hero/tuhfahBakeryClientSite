import React from 'react';
import { Link ,useHistory,useLocation} from 'react-router-dom';
import useAuth from '../../Hook/useAuth';


import logo from "../../images/Group 573.png"
import Navigation from '../Pages/Navigation/Navigation';
const Login = () => {
    const{loginUsingGoogle}=useAuth()

    const history=useHistory()
    const location=useLocation()
    const redirect_uri= location.state?.from || "/"

    const loginUsingGoogle1=()=>{
        loginUsingGoogle()
        .then((result) => {
              history.push(redirect_uri)  
            const user = result.user;
            
        })
    }
    return (
        <>
        <Navigation></Navigation>

        <div style={{height:"450px"}} className="d-flex flex-column justify-content-center align-items-center">
            <div className="card " style={{width: "20rem"}}>
                   <form action="">
                   <div className="card-body">
                        <h2 className="card-title">Please Login</h2>
                    <input placeholder="name" className="form-control border-bottom border border-0 mb-4 " type="email" name="" id="1" />
                    <input placeholder="password" className="form-control border-bottom border border-0 mb-5" type="password" name="" id="2" />
                        
                    <input className="btn w-100 btn-danger mb-2" type="submit" value="Submit" />
                    <p className="text-center">new user? <Link to="/signup">signup</Link></p>
                    </div>
                   </form>
                </div> 
                <div>
                    <p className="my-2 text-center">----------or----------</p>
                    <button onClick={loginUsingGoogle1} className="w-100 border px-5 rounded-pill btn btn-transplant"><img width="20px" className="me-5" src={logo} alt="" /> continue with google</button>
                </div>
                
            
        </div>
        </>
    );
};

export default Login;