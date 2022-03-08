import DataTable from 'react-data-table-component';
import React from 'react';
const columns = [
  {
    name: 'ID',
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: 'TITLE',
    selector: (row) => row.title,
  },
  {
    name: 'YEAR',
    selector: (row) => row.year,
  },
];
const data = [
  {
    id: 1,
    title: 'Karthik',
    year: '2001',
  },
  {
    id: 2,
    title: 'Purusotham',
    year: '2000',
  },
  {
    id: 3,
    title: 'Mulaz',
    year: '2001',
  },
  {
    id: 4,
    title: 'Mithun',
    year: '2000',
  },
  {
    id: 5,
    title: 'Keethan',
    year: '2000',
  },
];
export const ReactTable = () => {
  return (
    <div className="borderClass">
      <DataTable columns={columns} data={data} pagination />
    </div>
  );
};

const Newcolumns = [
  {
    name: 'ID',
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: 'TITLE',
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: 'YEAR',
    selector: (row) => row.year,
    sortable: true,
  },
];

const NewData = [
  {
    id: 1,
    title: 'Spider Man 1',
    year: '2000',
  },
  {
    id: 2,
    title: 'Spider Man 2',
    year: '2002',
  },
  {
    id: 3,
    title: 'Spider Man 3',
    year: '2004',
  },
  {
    id: 4,
    title: 'Spider Man 4',
    year: '2006',
  },
  {
    id: 5,
    title: 'Spider Man 5',
    year: '2008',
  },
];

export const SortTable = () => {
  return (
    <div className="borderClass">
      <DataTable columns={Newcolumns} data={NewData} pagination />
    </div>
  );
};
const pageColumns = [
  { name: 'ID', selector: (row) => row.id, sortable: true },
  { name: 'Serial No', selector: (row) => row.serialno, sortable: true },
];
const pageData = [
  { id: 1, serialno: 111 },
  { id: 2, serialno: 222 },
  { id: 3, serialno: 333 },
  { id: 4, serialno: 444 },
  { id: 5, serialno: 555 },
  { id: 6, serialno: 666 },
  { id: 7, serialno: 777 },
  { id: 8, serialno: 888 },
  { id: 9, serialno: 999 },
  { id: 10, serialno: 101010 },
  { id: 11, serialno: 111111 },
  { id: 12, serialno: 121212 },
];
export const PageTable = () => {
  return (
    <div className="borderClass">
      <DataTable
        columns={pageColumns}
        data={pageData}
        pagination
        // paginationDefaultPage={1}
        // paginationTotalRows="5"
      />
    </div>
  );
};
