
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Drawer from 'react-ui-drawer'
import useAuth from '../../../Hook/useAuth';
import logo from "../../../images/cakeLogo.jpg"
import {Switch,Route,useRouteMatch} from "react-router-dom";
import MyOrderList from '../MyOrderList/MyOrderList';
import Review from '../Review/Review';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../AdminRoute/AdminRoute';
import AddAProduct from '../AddAProduct/AddAProduct';

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
             <p className="text-center"><Link to="/"><i className="fas fa-home my-2 me-2"></i>Home</Link></p> 

            <p className="text-center"><Link to={`${url}`}><i className="fab fa-opencart my-2 me-2"></i>My Order list</Link> </p>

            <p className="text-center"  ><Link to="/"><i className="far fa-credit-card my-2 me-2"></i>Payment</Link> </p>

           <p className="text-center"> <Link to={`${url}/review`}><i className="far fa-comment-dots my-2 me-2"></i>Review</Link> </p>

            <p className="text-center"><button onClick={logout}  className="w-100 btn btn-danger">logout</button></p>


            <p className="text-center"> <Link to={`${url}/makeAdmin`}><i className="fas fa-user-shield my-2 me-2"></i>Make An Admin</Link> </p>

            <p className="text-center"> <Link to={`${url}/addProduct`}><i className="fas fa-plus my-2 me-2"></i>Added A Product</Link> </p> 
            
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
                    <Route path={`${path}/addProduct`}>
                       <AddAProduct></AddAProduct>
                    </Route>

                    <AdminRoute path={`${path}/makeAdmin`}>
                       <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>

            
      
            
        </div>
    );
};

export default DashBoard;