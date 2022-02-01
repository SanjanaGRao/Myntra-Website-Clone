import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Appbar from './components/header/Appbar';
import ImageSlider from './components/dashboard/ImageSlider';
import FooterMain from './components/footer/FooterMain';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Appbar} />
        <Route path="/" exact component={ImageSlider} />
        <Route path="/" exact component={FooterMain} />
      </Router>
    </div>
  );
}

export default App;
