import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Education from "./Pages/Education";
import Skills from "./Pages/Skills";
import Interests from "./Pages/Interests";
import Experience from "./Pages/Experience";



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= '/' element = {<Home/>}/>
        <Route path= '/Education' element = {<Education/>}/>
        <Route path= '/Skills' element = {<Skills/>}/>
        <Route path= '/Interests' element = {<Interests/>}/>
        <Route path= '/Experience' element = {<Experience/>}/>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
