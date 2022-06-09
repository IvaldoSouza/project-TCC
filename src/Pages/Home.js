import React from "react";
import Logo from "../TelaInicial/Logo";


function TelaInicial() {

  const QueryMark = () => {
    
  }

  return(
    <div>
      <hr />
      <Logo />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <form className="d-flex" role="search">
        <input className="form-control me-2 shadow" type="search" placeholder="Pesquisar Marca" aria-label="Search"/>
        <div className="d-flex justify-content-end ">
          <button className="btn btn-outline-primary btn-sm shadow" type="submit" >
            <i className="fa-solid fa-magnifying-glass me-2"></i>
            Pesquisar
          </button>
        </div>
      </form>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="d-grid gap-2 col-6 mx-auto">
        <button className="btn btn-outline-danger btn-lg shadow" type="button">
        <i className="fa-solid fa-store me-2"></i>
          Logista
        </button>
        <button 
        className="btn btn-outline-danger btn-lg shadow" 
        type="button"
        onClick={ QueryMark } >
        <i className="fa-solid fa-building me-2"></i>
          Fornecedor
        </button>
      </div>
      
    </div>
  )  
}


export default TelaInicial ;