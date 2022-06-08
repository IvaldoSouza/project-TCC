import React from "react";
import SearchResult from "../Pages/SearchResult";

function CardResult() {

  const arry = [{
    id: 1,
    marca: 'Nike',
    fabricante: 'Nike S.A',
    Fornecedor: 'Luxótica',
  },
  {
    id: 2,
    marca: 'Giorgi Armani',
    fabricante: 'Ótica S.A',
    Fornecedor: 'Tecótica',
  },
  {
    id: 3,
    marca: 'Adidas',
    fabricante: 'Adidas S.A',
    Fornecedor: 'Luxótica',
  },
  {
    id: 4,
    marca: 'Ray Ban',
    fabricante: 'Luxótica S.A',
    Fornecedor: 'Luxótica',
  }
]

  return(
    <div>
      <section>
        { arry.map((item, index) => (
          <SearchResult key={ index } item={ item } /> ))}
      </section>
    </div>  
  )
}

export default CardResult;