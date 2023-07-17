import React, { useState } from 'react';
import { format } from 'date-fns';

import './SearchComponent.css';


const SearchComponent = ({ onSearch }) => {
  const [accountId, setAccountId] = useState('');
  const [isAccountIdValid, setIsAccountIdValid] = useState(false);
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  const [nomeOperadorTransacao, setNomeOperadorTransacao] = useState('');


  const handleInputChange = (event) => {
    const { value } = event.target;
    setAccountId(value);
    setIsAccountIdValid(value !== '');
  };

    const handleDataInicioChange = (event) => {
      setDataInicio(event.target.value);
    };
  
    const handleDataFimChange = (event) => {
      setDataFim(event.target.value);
    };
  
    const handleNomeOperadorTransacaoChange = (event) => {
      setNomeOperadorTransacao(event.target.value);
    };

    const handleSearch = () => {
      const formattedDataInicio = dataInicio ? format(new Date(dataInicio), 'dd-MM-yyyy') + ' 00:00:00' : '';
      const formattedDataFim = dataFim ? format(new Date(dataFim), 'dd-MM-yyyy') + ' 00:00:00' : '';
      if (isAccountIdValid) {
        onSearch(accountId, formattedDataInicio, formattedDataFim, nomeOperadorTransacao);
      };
  };

  return (
    <div className="search-component mt-4 mx-4">
      <h2>Desafio Supera</h2>
      <div className='row align-items-center'>
        <div className='conta-id'>
          <label htmlFor="accountId">ID da Conta:</label>
          <input
            type="text"
            id="accountId"
            value={accountId}
            onChange={handleInputChange}
            style={{ width: '200px' }}
        />
        </div>
        <div className="col">
          <label htmlFor="data-inicio">Data de Início</label>
          <input
            type="date"
            id="data-inicio"
            className="form-control form-control-sm"
            placeholder="Data inicial"
            value={dataInicio}
            onChange={handleDataInicioChange}
          />
        </div>
        <div className="col">
          <label htmlFor="data-fim">Data de Fim</label>
          <input
            type="date"
            id="data-fim"
            className="form-control form-control-sm"
            placeholder="Data final"
            value={dataFim}
            onChange={handleDataFimChange}
          />
        </div>
        <div className="col">
          <label htmlFor="nome-operador">Nome do Operador Transacionado</label>
          <input
            type="text"
            id="nome-operador"
            className="form-control form-control-sm"
            placeholder="Nome do Operador"
            value={nomeOperadorTransacao}
            onChange={handleNomeOperadorTransacaoChange}
          />
        </div>
        <div className="col">
          <button className="btn btn-primary" onClick={handleSearch} disabled={!accountId}>
            Pesquisar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
