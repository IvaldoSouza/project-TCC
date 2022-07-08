import React, { useState, useEffect } from "react";
import apiConnect from "../Api/ApiConnect";
import Logo from "../TelaInicial/Logo";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import CardResult from "../Components/CardsResult";


function TelaInicial(props) {
  const [marcas, setMarcas] = useState([{}]);
  const [searchMarca, setSearchMarca] = useState('');
  const navigate = useNavigate();


  const handleLojista = () => {
    navigate('/registration-lojista')
  }

  const handleFornecedor = () => {
    navigate('/registration-fornecedor')
  }

  useEffect(() => {
      apiConnect.get('/cadastro-marca')
        .then(res => {
          const result = res.data
          setMarcas(result);
        });
  }, []);

  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    marcas.filter((value) => {
      if(value.marca === data.marca)
      {
       return setSearchMarca(value.marca)
      }           
    });
  }
  
  return(
    <div>
      <hr />
      <Logo />
      <hr />
      <br />
      <br />
      <CardResult searchMarca={ searchMarca } />

      <br />
      <br />

      <form className="d-flex" onSubmit={ handleSubmit(onSubmit) }>
        <input 
          className="form-control me-2 shadow" 
          type="text" 
          name="marca"
          {...register("marca")}
          placeholder="Pesquisar Marca"
        />
        <div className="d-flex justify-content-end ">
          <button 
            className="btn btn-outline-primary btn-sm shadow" 
            type="submit" 
          >
            <i className="fa-solid fa-magnifying-glass me-2"></i>
            Pesquisar
          </button>
        </div>
      </form>
      <br />
      <br />
      <br />
      <div className="d-grid gap-2 col-6 mx-auto">
        <button 
          className="btn btn-outline-danger btn-lg shadow" 
          type="button" 
          onClick={handleLojista}>
        <i className="fa-solid fa-store me-2"></i>
          Logista   
        </button>
        <button 
          className="btn btn-outline-danger btn-lg shadow" 
          type="button" 
          onClick={handleFornecedor}>
        <i className="fa-solid fa-building me-2"></i>
          Fornecedor
        </button>
      </div>     
    </div>
  )  
}

export default TelaInicial ;