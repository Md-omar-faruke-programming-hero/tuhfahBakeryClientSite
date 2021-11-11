
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Login from './Component/Login/Login';
import Allproducts from './Component/Pages/Allproducts/Allproducts';
import AuthProvider from './Component/Pages/AuthProvider/AuthProvider';
import CakeDetails from './Component/Pages/CakeDetails/CakeDetails';
import Home from './Component/Pages/Home/Home';
import PrivateRoute from './Component/Pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>

          <Route  path="/home">
              <Home></Home>
          </Route>
          <Route  path="/allProducts">
              <Allproducts></Allproducts>
          </Route>

          <PrivateRoute  path="/cakeDetails/:id">
              <CakeDetails></CakeDetails>
          </PrivateRoute>

          <Route  path="/login">
              <Login></Login>
          </Route>

        </Switch>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
