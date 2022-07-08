import React from "react";

const MenuInicial = () => {

  return(
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="registration-lojista">Cadastro Lojista</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="registration-fornecedor">Cadastro Fornecedor</a>
              </li>
            </ul>
          </div>
          <a className="navbar-brand" href="/">Sair</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default MenuInicial;