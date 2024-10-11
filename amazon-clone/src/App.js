import './App.css';
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import 'react-router-dom'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./Login";

function App() {
  return (
      // BEM
      <Router>
          <div className="app">

              <Routes>
                  <Route path="/login" element={[<Login />]} />
                  <Route path="/checkout" element={[ <Header/>, <Checkout/>]}/>
                  {/* Default route always at the bottom */}
                  <Route path="/" element={[<Header/>,<Home />]}/>
              </Routes>

          </div>
      </Router>
  );
}

export default App;
