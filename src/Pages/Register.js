import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import MenuInicial from "../TelaInicial/MenuInicial";
import apiConnect from "../Api/ApiConnect";
import { useForm } from 'react-hook-form';

function Register() {
  const [marcas, setMarcas] = useState([{}]);

  useEffect(() => {
      apiConnect.get('/cadastro-marca')
        .then(res => {
          const result = res.data
          setMarcas(result);
        });
  }, []);

  console.log('marcas', marcas)
  function registerMarcas(event) {

    apiConnect({
      method: "post",
      url: "/cadastro-marca",
      data: event,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (response) {
        console.log(response);
      });

      document.getElementById('form').reset();
  };

  const { register, handleSubmit } = useForm();

  return(
    <div>
      {console.log('aqui 9', marcas)}
      <MenuInicial />
      <br />
      <br />
      <h1>Cadastro de Marcas</h1>

      <form className="row g-3" onSubmit={ handleSubmit(registerMarcas) }>
        <div className="col-md-8">
          <label for="inputEmail4" className="form-label">Nome Marca</label>
          <input id='marca' type="text" className="form-control shadow" {...register("marca")}/>
        </div>
        <div className="col-md-2">
          <label for="inputEmail4" className="form-label">Nota Fiscal</label>
          <input id='notaFiscal' type="number" className="form-control shadow" {...register("nota")}/>
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Fabricante</label>
          <input id='fabricante' type="text" className="form-control shadow" {...register("fabricante")}/>
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Forntecedor</label>
          <input id='fornecedor' type="text" className="form-control shadow" {...register("fornecedor")}/>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-outline-primary shadow">
            <i className="fa-solid fa-id-card me-2"></i>
            Cadastrar
          </button>
        </div>
      </form>

      <SearchResult marcas={ marcas } />
    </div>
  )
}

export default Register;