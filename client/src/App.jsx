import React from "react";
import './index.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';

export const serverUrl="http://localhost:5000/";

const App=()=>{
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/auth" element={<Auth/>}/>
    </Routes>
  )

}

export default App;