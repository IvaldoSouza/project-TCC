import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import MenuInicial from "../TelaInicial/MenuInicial";
import useAuth from '../Hooks/UseAuth';
import apiConnect from "../Api/ApiConnect";
import { useForm } from 'react-hook-form';


function Registration() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [fornecedor, setFornecedor] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [cep, setCep] = useState('');

  // useEffect(() => {
  //   const response = async () => {
  //     const result = await apiConnect.get('/cadastro');
  //     setData({ cadastro: result.data });
  //   };

  //   response()
  // }, [])

  // useEffect(() => {
  //     apiConnect.get('/cadastro')
  //       .then(res => {
  //         const result = res.data
  //         setData({ cadastro: result });
  //     });
  //   }, []);
    
    
  const LoginStorage = (event) => {
    if (!email || !password || !fornecedor || !endereco || !cidade || !cep) {
      return setError(" Todos os campos são obrigatórios");
    }

    const res = signup(event.email, event.password);

    if(res) {
      setError(res);
    };

    apiConnect({
      method: "post",
      url: "/cadastro",
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
      <MenuInicial />
      <br />
      <br />
      <form id="form" className="row g-3" onSubmit={ handleSubmit(LoginStorage) } >
        <h1>Cadastro Fornecedor</h1>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">E-mail</label>
          <input 
            type="email"
            {...register("email")}
            className="form-control shadow" 
            id="inputEmail4" 
            onChange={(e) => [setEmail(e.target.value), setError("")]}/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Senha</label>
          <input 
            type="password" 
            {...register("password")}
            className="form-control shadow" 
            id="inputPassword4" 
            onChange={(e) => [setPassword(e.target.value), setError("")]}/>
        </div>
        <div className="col-6">
          <label htmlFor="inputAddress" className="form-label">Fornecedor</label>
          <input 
            type="text"
            {...register("fornecedor")} 
            className="form-control shadow" 
            id="inputAddress"
            onChange={(e) => [setFornecedor(e.target.value), setError("")]}/>
        </div>
        <div className="col-6">
          <label htmlFor="inputAddress2" className="form-label">Endereço</label>
          <input 
            type="text" 
            {...register("endereco")}
            className="form-control shadow" 
            id="inputAddress2"
            onChange={(e) => [setEndereco(e.target.value), setError("")]}/>
        </div>
        <div className="col-md-6">
          <label htmlFor="inputCity" className="form-label">Cidade</label>
          <input 
            type="text" 
            {...register("cidade")}
            className="form-control shadow" 
            id="inputCity"
            onChange={(e) => [setCidade(e.target.value), setError("")]}/>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">Estado</label>
          <select 
            id="inputState" 
            {...register("estado")}
            className="form-select shadow"
            onChange={(e) => [setEstado(e.target.value), setError("")]}>
            <option selected>Selecione...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">CEP</label>
          <input 
            type="text" 
            {...register("cep")}
            className="form-control shadow" 
            id="inputZip"
            onChange={(e) => [setCep(e.target.value), setError("")]}/>
        </div>
        <div className="col-12">
          <div id="liveAlertPlaceholder">{error}</div>
          <button 
            type="submit" 
            className="btn btn-outline-primary shadow"
            >
            <i className="fa-solid fa-id-card me-2"></i>
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Registration;