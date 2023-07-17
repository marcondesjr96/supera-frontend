import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import SearchComponent from './componentes/SearchComponent';
import TableComponent from './componentes/TableComponent';
import axios from 'axios';

export default function App() {
  const [searchData, setSearchData] = useState([]);

  const handleSearch = async (accountId, dataInicial, dataFinal, nomeOperadorTransacao) => {
    try {
      const params = {
        page: 0,
        size: 8,
        contaId: accountId
      };
  
      if (dataInicial) {
        params.dataInicial = dataInicial;
      }
  
      if (dataFinal) {
        params.dataFinal = dataFinal;
      }
  
      if (nomeOperadorTransacao) {
        params.nomeOperadorTransacao = nomeOperadorTransacao;
      }
  

      const response = await axios.get('http://localhost:8080/api/transferencia/account', {
        params: params
      });

      setSearchData(response.data.content);
    } catch (error) {
      console.error('Erro ao buscar transferências:', error);
    }
  };

  return (
    <div>
      <SearchComponent onSearch={handleSearch} />
      <br />
      <br />
      <br />
      <TableComponent searchData={searchData} />
    </div>
  );
}
