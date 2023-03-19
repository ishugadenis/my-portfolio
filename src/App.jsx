import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { Link } from "react-scroll";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Aboutus from "./components/Aboutus";
import ContactUs from "./components/ContactUs";
import Projects from "./components/Projects";
import ProjectPage from "./pages/ProjectPage";
import MainPage from "./pages/MainPage";



const App = () => {


  return <div >
    
    <Routes>
      <Route path="/" element={<MainPage />}></Route>
      <Route path="/project/:id" element={<ProjectPage />}></Route>
    </Routes>
    
    
    
    
    
  </div>;
};

export default App;
