import React from 'react';
import { format } from 'date-fns';
import './TableComponent.css';



const TransferTable =({ searchData, saldoTotal, saldoTotalPeriodo, currentPage, setCurrentPage }) => {
  const itemsPerPage = 4;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = searchData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(searchData.length / itemsPerPage);

  return (
    <div>
      <h2 className='text-center'>Transferências</h2>
      <label className='saldo-total'>Saldo Total: R$ {saldoTotal}</label>
      <label className='saldo-total-periodo'>Saldo no Período: R$ {saldoTotalPeriodo}</label>
      <table className="table table-striped mx-4">
        <thead>
          <tr>
            <th>Data</th>
            <th>Valor</th>
            <th>Tipo</th>
            <th>Nome do Operador Transacionado</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((data) => (
            <tr key={data.id}>
              <td>{format(new Date(data.dataTransferencia), 'dd/MM/yyyy')}</td>
              <td>R$ {data.valor}</td>
              <td>{data.tipo}</td>
              <td>{data.nomeOperadorTransacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {searchData.length > itemsPerPage && (
          <div className="buttons d-flex justify-content-center">
            <button
              className="button-anterior"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
            >
              Anterior
            </button>
            <p className="number-page text-center">
               Página {currentPage + 1} de {totalPages}
            </p>
            <button
              className="button-proximo"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
            >
              Próxima
            </button>

          </div>
        )}
      </div>
    </div>
  );
};

export default TransferTable;

