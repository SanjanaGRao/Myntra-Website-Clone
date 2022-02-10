import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Appbar from './components/header/Appbar';
import FooterMain from './components/footer/FooterMain';
import Dashboard from './components/dashboard/Dashboard';
import Login from './components/loginAndSignup/Login';
import Signup from './components/loginAndSignup/Signup';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Appbar} />
        <Route path="/" exact component={Dashboard} />
        <Route path="/" exact component={FooterMain} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/dealsOfDay/:id" exact component={Products} />
      </Router>
    </div>
  );
}
export default App;
