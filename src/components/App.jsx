import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Translator from "../compon/Translator";
import CreateArea from "./CreateArea";


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<CreateArea/>}/>
    <Route  path='/create' element={<Translator />}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
