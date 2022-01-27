import './App.css';
import Appbar from "./components/header/Appbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Route path="/" exact component={Appbar} />
    </Router>
    </div>
  );
}

export default App;
