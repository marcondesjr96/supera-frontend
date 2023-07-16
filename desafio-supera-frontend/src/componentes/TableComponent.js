import React, { useEffect, useState } from 'react';
import './TableComponent.css';



const TransferTable = () => {
  const [transferData, setTransferData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Número de itens por página

  useEffect(() => {
   
    const fetchData = async () => {
      // Dados fictícios de transferências
      const transfers = [
        {
          data: '2023-07-16',
          valor: 1000.5,
          tipo: 'Transferência',
          nomeOperador: 'João Silva',
        },
        {
          data: '2023-07-17',
          valor: 500.75,
          tipo: 'Transferência',
          nomeOperador: 'Maria Santos',
        },
        {
          data: '2023-07-18',
          valor: 800.25,
          tipo: 'Transferência',
          nomeOperador: 'Pedro Oliveira',
        },
        {
          data: '2023-02-18',
          valor: 8490.22,
          tipo: 'Transferência',
          nomeOperador: 'Gabriel Oliveira',
        },
        {
          data: '2023-09-12',
          valor: 120.45,
          tipo: 'Transferência',
          nomeOperador: 'Antonio Jr',
        },
        {
          data: '2023-11-30',
          valor: 82.86,
          tipo: 'Transferência',
          nomeOperador: 'Fernando Mendes',
        },
      ];

      
      setTimeout(() => {
        setTransferData(transfers);
      }, 1000);
    };

    fetchData();
  }, []);

    
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedItems = transferData.slice(startIndex, endIndex);
  
    const totalPages = Math.ceil(transferData.length / itemsPerPage);

  return (
    <div>
      <h2 className='text-center'>Transferências</h2>
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
          {transferData.map((transfer, index) => (
            <tr key={index}>
              <td>{transfer.data}</td>
              <td>{transfer.valor.toFixed(2)}</td>
              <td>{transfer.tipo}</td>
              <td>{transfer.nomeOperador}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        {transferData.length > itemsPerPage && (
          <div className="buttons d-flex justify-content-center">
            <button
            className='button-anterior'
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <p className="number-page text-center">
              Página {currentPage} de {totalPages}
            </p>
            <button
            className='button-proximo'
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
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
