
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import Login from './Component/Login/Login';
import Allproducts from './Component/Pages/Allproducts/Allproducts';
import AuthProvider from './Component/Pages/AuthProvider/AuthProvider';
import CakeDetails from './Component/Pages/CakeDetails/CakeDetails';
import ContactUs from './Component/Pages/ContactUs/ContactUs';
import DashBoard from './Component/Pages/DashBoard/DashBoard';
import Home from './Component/Pages/Home/Home';
import PrivateRoute from './Component/Pages/PrivateRoute/PrivateRoute';
import Signup from './Component/Signup/Signup';

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

          <Route  path="/contact">
              <ContactUs></ContactUs>
          </Route>

          <Route  path="/signup">
              <Signup></Signup>
          </Route>

          <PrivateRoute  path="/dashboard">
              <DashBoard></DashBoard>
          </PrivateRoute>

        </Switch>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
