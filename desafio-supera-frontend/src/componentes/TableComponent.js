import React, { useEffect, useState } from 'react';

const TransferTable = () => {
  const [transferData, setTransferData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Número de itens por página

  useEffect(() => {
    // Simulando a chamada à API para obter os dados das transferências
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
      ];

      // Simulando o atraso da resposta da API com setTimeout
      setTimeout(() => {
        setTransferData(transfers);
      }, 1000);
    };

    fetchData();
  }, []);

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
    </div>
  );
};

export default TransferTable;
