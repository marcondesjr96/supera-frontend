import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import SearchComponent from './componentes/SearchComponent';
import TableComponent from './componentes/TableComponent';

export default function App() {
  return (
    <div className="app">
      <SearchComponent />
      <br/>
      <br/>
      <br/>

      <TableComponent />
    </div>
  );
}