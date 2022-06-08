import React from "react";
import logo from '../TelaInicial/noPiracy.png';
import './Logo.css';

function Logo(){
  return(
    <div>
      <img src={logo} className="logo img-thumbnail shadow" alt="logo" />
    </div>
  )
}

export default Logo;
