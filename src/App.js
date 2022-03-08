import './App.css';
import React from 'react';
import { PageTable, ReactTable, SortTable } from './ReactTable';
function App() {
  return (
    <div className="App">
      <h4>React Table</h4>
      <ReactTable />
      <h4>React Table with sorting Feature</h4>
      <SortTable />
      <h4>Pagination Table</h4>
      <PageTable />
    </div>
  );
}
export default App;
