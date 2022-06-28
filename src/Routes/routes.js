import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../Pages/Home.js';
import RegistrationFornecedor from "../Pages/RegistrationForn";
import SearchResult from "../Pages/SearchResult.js";
import Register from "../Pages/Register.js";
import Login from "../Pages/Login.js";
import useAuth from "../Hooks/UseAuth.js";
import RegisterLogin from "../Pages/RegisterLogin.js";
import RegistrationLojista from "../Pages/RegistrationLoj.js";
import CardResult from "../Components/CardsResult.js";

const Private = ({ Item }) => {
  const { signed } = useAuth();
  console.log('Private', signed)
  return signed > 0 ? <Item /> : <Login />
}

function RoutesComponent() {
  return( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route exact path="/home" element={<Private Item={ Home } />} />
        <Route path="/search-result" element={<Private Item={ SearchResult } />} />
        <Route path="/registration-fornecedor" element={<Private Item={ RegistrationFornecedor } />} />
        <Route path="/registration-lojista" element={<Private Item={ RegistrationLojista } />} />
        <Route path="/register-login" element={<RegisterLogin />} />
        <Route path="/register" element={<Private Item={ Register } />} />
        <Route path="/card-result" element={<Private Item={ CardResult } />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="*" element={<Private Item={ Login } />} />
      </Routes>  
    </BrowserRouter>
  )
}

export default RoutesComponent;

