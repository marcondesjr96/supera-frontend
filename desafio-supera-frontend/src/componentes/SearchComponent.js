import React from 'react';

const SearchComponent = () => {
  return (
    <div className="search-component mt-4 mx-4">
      <div className="row align-items-center">
        <div className="col">
          <label htmlFor="data-inicio">Data de Início</label>
          <input type="date" id="data-inicio" className="form-control form-control-sm" placeholder="Data inicial" />
        </div>
        <div className="col">
          <label htmlFor="data-fim">Data de Fim</label>
          <input type="date" id="data-fim" className="form-control form-control-sm" placeholder="Data final" />
        </div>
        <div className="col">
          <label htmlFor="nome-operador">Nome do Operador Transacionado</label>
          <input type="text" id="nome-operador" className="form-control form-control-sm" placeholder="Nome do Operador" />
        </div>
        <div className="col">
          <button className="btn btn-primary">Pesquisar</button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
