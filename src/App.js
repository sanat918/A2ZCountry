import "../src/App.css"
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Home from "./components/home";
import Error from "./components/Error";




function App() {
 
  return (
     
    <>
    <div className="container">
    <Router>
    <Navbar title="A2ZCountry" aboutText="About Us"/>
    <div className="container">
    <Routes>  
         <Route  path="*" element={<Error/>} /> 
         <Route  path="/" element={<Home/>} />  
         <Route  path="/home" element={<Home/>} />   
         <Route exact path="/about"   element={<About/>} />  
      </Routes>  
    </div>
   <Footer name="Sanat Jain"/>
   </Router>
   </div>
    </>
  );
}

export default App;
