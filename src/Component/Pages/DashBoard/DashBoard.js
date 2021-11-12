
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Drawer from 'react-ui-drawer'
import useAuth from '../../../Hook/useAuth';
import logo from "../../../images/cakeLogo.jpg"
import {
    
    Switch,
    Route,
    
    
    useRouteMatch
  } from "react-router-dom";
import MyOrderList from '../MyOrderList/MyOrderList';
import Review from '../Review/Review';

const DashBoard = () => {
    const [showDrawer, setShowDrawer] = useState(false)
    const {logout}=useAuth()
    let { path, url } = useRouteMatch();

    
    
    return (
        <div>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
             
               <div className="container">
               
                    <button className="btn btn-danger ms-1" onClick={() => setShowDrawer(prevState => !prevState)} >
                    press
                    <span className="navbar-toggler-icon ms-2"></span>
                    </button>
                    <p className="text-center">DashBoard</p>
                   
                    {showDrawer && (
                        <Drawer requestClose={() => setShowDrawer(false)}>
             <p className="text-center mt-3"><img className="w-25 " src={logo} alt="" /></p> 
             <p className="text-center"><Link   to="/"><i class="fab fa-opencart my-2 me-2"></i>Home</Link></p> 
            <p className="text-center"><Link   to={`${url}`}><i class="fab fa-opencart my-2 me-2"></i>My Order list</Link> </p>
            <p className="text-center"  ><Link to="/"><i class="far fa-credit-card my-2 me-2"></i>Payment</Link> </p>
           <p className="text-center"> <Link   to={`${url}/review`}><i class="far fa-comment-dots my-2 me-2"></i>Review</Link> </p>
            <p className="text-center"><button onClick={logout}  className="w-100 btn btn-danger">logout</button></p>
                        </Drawer> 
                    )}

             </div>
          </nav>

          <Switch>
                    <Route exact path={path}>
                       <MyOrderList></MyOrderList>
                    </Route>
                    <Route path={`${path}/review`}>
                       <Review></Review>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                       {/* <MakeAnAdmin></MakeAnAdmin> */}
                    </Route>
                </Switch>

            
      
            
        </div>
    );
};

export default DashBoard;