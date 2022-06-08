import React, { useState } from "react";
import SearchResult from "./SearchResult";
import MenuInicial from "../TelaInicial/MenuInicial";

const initialState = [{
  id: 1,
  marca: 'Nike',
  fabricante: 'Nike S.A',
  fornecedor: 'Luxótica',
  notaFiscal: 12345
},
{
  id: 2,
  marca: 'Giorgi Armani',
  fabricante: 'Ótica S.A',
  fornecedor: 'Tecótica',
  notaFiscal: 55512
},
{
  id: 3,
  marca: 'Adidas',
  fabricante: 'Adidas S.A',
  fornecedor: 'Luxótica',
  notaFiscal: 4359
},
{
  id: 4,
  marca: 'Ray Ban',
  fabricante: 'Luxótica S.A',
  fornecedor: 'Luxótica',
  notaFiscal: 25648
}
];

function Register() {
  const [marcas, setMarcas] = useState(initialState);
  

function registerMarcas(e) {
  e.preventDefault();

  const newRegister = {
    id: document.getElementById('id').value,
    marca: document.getElementById('marca').value,
    fabricante: document.getElementById('fabricante').value,
    fornecedor: document.getElementById('fornecedor').value,
    notaFiscal: document.getElementById('notaFiscal').value,
  };
  marcas.push(newRegister);
  setMarcas([...marcas]);
}

  return(
    <div>
      
      <MenuInicial />
      <br />
      <br />
      <h1>Cadastro</h1>

      <form className="row g-3">
        <div className="col-md-2">
          <label for="inputEmail4" className="form-label">Id</label>
            <input id='id' type="text" className="form-control shadow" readOnly
            value={ Math.max.apply(Math, marcas.map(item => item.id)) + 1 }/>
        </div>
        <div className="col-md-8">
          <label for="inputEmail4" className="form-label">Nome Marca</label>
          <input id='marca' type="text" className="form-control shadow"  />
        </div>
        <div className="col-md-2">
          <label for="inputEmail4" className="form-label">Nota Fiscal de Compra</label>
          <input id='notaFiscal' type="number" className="form-control shadow" />
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Fabricante</label>
          <input id='fabricante' type="text" className="form-control shadow" />
        </div>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">Forntecedor</label>
          <input id='Fornecedor' type="text" className="form-control shadow" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-outline-primary shadow" onClick={ registerMarcas }>
            <i className="fa-solid fa-id-card me-2"></i>
            Cadastrar
          </button>
        </div>
      </form>

      <SearchResult 
        registerMarcas={ registerMarcas } 
        marcas={ marcas }
      />

      {/* <div className="mt-3">
        {marcas.map(item => (
          <div key={ item.id } className="card mb-2 shadow" style={{width: "18rem"}}>
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                { item.id } - Título
                </h5>
                <h6>
                  Original
                  <i className="fa-solid fa-thumbs-up ms-1 primary"></i>
                </h6>
              </div>

              <p className="card-text">{ item.marca }</p>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default Register;