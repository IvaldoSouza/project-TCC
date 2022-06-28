import React from "react";

function SearchResult(props) {

  return(
    <div>
      <br />
      <br />

      <div className="mt-3">
        {props.marcas.map(item => (
          <div key={ item.id } className="card mb-2 shadow" >
            {/* style={{width: "18rem"}} */}
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                { item.marca}
                </h5>
                <h6>
                  Original
                  <i className="fa-solid fa-thumbs-up ms-1 primary"></i>
                </h6>
              </div>
              <p className="card-text">Fabricante: { item.fabricante } - Nota Fiscal: {item.notaFiscal}</p>
              <p className="card-text">Fornecedor: { item.fornecedor }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchResult;