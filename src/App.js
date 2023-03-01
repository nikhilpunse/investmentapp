import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Services from "./components/Services";
import Support from "./components/Support";
import Investor from "./components/Investor";
import './App.css'

const App = () => {
  return (
    <div className="overflow-hidden w-full pb-[1px] ranade bg-gradient-to-b from-[#141F5E] to-[#03040C] pt-6 text-white">
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/service" element={<Services/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/investor" element={<Investor/>}/>
      </Routes>
     
    </div>
  );
};

export default App;
