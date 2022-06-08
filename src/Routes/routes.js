import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Headers from '../TelaInicial/Header.js';
import Registration from "../Pages/Registration.js";
import SearchResult from "../Pages/SearchResult.js";
import Register from "../Pages/Register.js";
import Login from "../Pages/Login.js";
import useAuth from "../Hooks/UseAuth.js";
import RegisterLogin from "../Pages/RegisterLogin.js";

const Private = ({ Item }) => {
  const { signed } = useAuth;
  return signed > 0 ? <Item /> : <Login />
}

function RoutesComponent() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Private Item={ Headers } />} />
        <Route path="/search-result" element={<SearchResult />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/register-login" element={<RegisterLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Login />} />
      </Routes>  
    </BrowserRouter>
  )
}

export default RoutesComponent;

