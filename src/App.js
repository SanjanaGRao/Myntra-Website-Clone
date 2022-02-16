import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/loginAndSignup/Login';
import Signup from './components/loginAndSignup/Signup';
import Products from './pages/productPage/Products';
import Homepage from './pages/homePage/Homepage';
import OneProduct from './pages/productPage/OneProduct';
import Bag from './pages/bagPage/Bag';
import Address from './pages/addressPage/Address';
import Payments from './pages/paymentsPage/Payments';
import OrderSuccess from './pages/orderSuccessfull/OrderSuccess';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/dealsOfDay/:id" exact component={Products} />
        <Route path="/products/:id" exact component={OneProduct} />
        <Route path="/bag" exact component={Bag} />
        <Route path="/address" exact component={Address} />
        <Route path="/payment" exact component={Payments} />
        <Route path="/orderComplete" exact component={OrderSuccess} />
      </Router>
    </div>
  );
}
export default App;
