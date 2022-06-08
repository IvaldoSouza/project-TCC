import React from "react";
import MenuInicial from "../TelaInicial/MenuInicial";
// import { Form, Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

function Registration(){
  return(
    <div>
      <MenuInicial />
      <br />
      <br />
      <form className="row g-3">
        <h1>Cadastro</h1>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">E-mail</label>
          <input type="email" className="form-control shadow" id="inputEmail4"/>
        </div>
        <div className="col-md-6">
          <label for="inputPassword4" className="form-label">Senha</label>
          <input type="password" className="form-control shadow" id="inputPassword4"/>
        </div>
        <div className="col-6">
          <label for="inputAddress" className="form-label">Fornecedor</label>
          <input type="text" className="form-control shadow" id="inputAddress"/>
        </div>
        <div className="col-6">
          <label for="inputAddress2" className="form-label">Endereço</label>
          <input type="text" className="form-control shadow" id="inputAddress2"/>
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">Cidade</label>
          <input type="text" className="form-control shadow" id="inputCity"/>
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">Estado</label>
          <select id="inputState" className="form-select shadow">
            <option selected>Selecione...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">CEP</label>
          <input type="text" className="form-control shadow" id="inputZip"/>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input shadow" type="checkbox" id="gridCheck"/>
            <label className="form-check-label" for="gridCheck">
              Check
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-outline-primary shadow">
            <i className="fa-solid fa-id-card me-2"></i>
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  )
}

export default Registration;