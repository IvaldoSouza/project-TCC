import React from "react";

function CardResult(props) {

  return(
    <div>
      {props.searchMarca ? (
        <div className="card mb-2 shadow">
          <div className="card-body">
            <button 
              type="button" 
              className="btn-close"
              aria-label="Close"
            >
            </button>
            <br />
            <div className="d-flex justify-content-between">
              <h5 className="card-title" style={{ color: "#dc3545" }}>
                Parabéns a Marca <strong>{ props.searchMarca }</strong> é Original!
              </h5>
              <h6 style={{ color: "#dc3545" }}>
                Original
                <i className="fa-solid fa-thumbs-up ms-1 primary"></i>
              </h6>
            </div>
              <strong className="card-text">Lutemos juntos contra a Pirataria</strong>
              <p className="card-text">Denuncie!</p>
          </div>
        </div>

      ): <h3 style={{ textAlign: "center", color: "white", backgroundColor: "#dc3545" }}>DIGITE A MARCA DESEJADA</h3>}
    </div>  
  )
}

export default CardResult;