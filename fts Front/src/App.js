import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "../src/components/Navbar";
import Home from "./components/Home/Home";
import Crack from "./components/Crack/Crack";
import Damp from "./components/Damp/Damp";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import LoginPage from './pages/Login';
import ScrollToTop from './components/ScrollToTop';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useLocation
} from "react-router-dom";
import  reportWebVitals  from './reportWebVitals';
import "./index.css"
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  const location = useLocation()
  
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  // Measure Web Vitals
  reportWebVitals((metric) => {
      // console.log(metric);
  });
  return (
    <>
      {location.pathname !== "/" ? <Navbar />  :   ""}
    
    <Preloader load={load} />
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/crack" element={<Crack />} />
        <Route path="/damp" element={<Damp />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
      {location.pathname !== "/" ? <Footer />  :   ""}

    </div>
  {/* </Router> */}
  </>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;