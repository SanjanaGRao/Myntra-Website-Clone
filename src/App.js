import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/loginAndSignup/Login';
import Signup from './components/loginAndSignup/Signup';
import Products from './pages/productPage/Products';
import Homepage from './pages/homePage/Homepage';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Homepage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/dealsOfDay/:id" exact component={Products} />
      </Router>
    </div>
  );
}
export default App;
