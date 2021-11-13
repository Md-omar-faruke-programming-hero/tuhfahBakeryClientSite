import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hook/useAuth';

const AdminRoute = ({children,...rest}) => {
    const {user,admin,isLoading}=useAuth()

    if(!admin){
        return <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    }
    else{
        return (
            <Route
            {...rest}
           render={({location}) =>
            user.email && admin ? children : <Redirect
                                        to={{
                                            pathname:"/",
                                            state:{from:location}
                                        }}
                                     ></Redirect>
                    }
            
            >
                
            </Route>
        );

    }
    
};

export default AdminRoute;