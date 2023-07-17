import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import SearchComponent from './componentes/SearchComponent';
import TableComponent from './componentes/TableComponent';
import axios from 'axios';

export default function App() {
  const [searchData, setSearchData] = useState([]);
  const [saldoTotal, setSaldoTotal] = useState(0);
  const [saldoTotalPeriodo, setSaldoTotalPeriodo] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);


  const handleSearch = async (accountId, dataInicial, dataFinal, nomeOperadorTransacao) => {
    try {
      const params = {
        page: currentPage,
        size: 4,
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

      const responseSaldoTotal = await axios.get('http://localhost:8080/api/transferencia/valor-total',{
        params: {
          contaId: accountId
        }
      });     
      
      const saldoTotal  = responseSaldoTotal.data;
      setSaldoTotal(saldoTotal);


      const responseSaldoPeriodo = await axios.get('http://localhost:8080/api/transferencia/valor-total', {
        params: {
          contaId: accountId,
          dataInicial: dataInicial,
          dataFinal: dataFinal
        }
      });
      const saldoTotalPeriodo= responseSaldoPeriodo.data;
  
      setSaldoTotalPeriodo(saldoTotalPeriodo);
  
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
      <TableComponent
        searchData={searchData}
        saldoTotal={saldoTotal}
        saldoTotalPeriodo={saldoTotalPeriodo}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
}
