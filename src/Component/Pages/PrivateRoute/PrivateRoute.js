import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hook/useAuth';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading}=useAuth()

    if(isLoading){
        return <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    }
    else{
        return (
            <Route
            {...rest}
           render={({location}) =>
            user.email ? children : <Redirect
                                        to={{
                                            pathname:"/login",
                                            state:{from:location}
                                        }}
                                     ></Redirect>
                    }
            
            >
                
            </Route>
        );

    }
    
};

export default PrivateRoute;