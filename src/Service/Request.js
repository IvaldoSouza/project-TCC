import { useState, useEffect } from "react";
import Home from "../Pages/Home"
import apiConnect from "../Api/ApiConnect";

function Request() {
  const [marcas, setMarcas] = useState([{}]);

  useEffect(() => {
      apiConnect.get('/cadastro-marca')
        .then(res => {
          const result = res.data
          setMarcas(result);
        });
  }, []);

  return(
    <Home marcas={ marcas } />
  )
}

export default Request;