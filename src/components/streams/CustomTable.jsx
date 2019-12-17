/** @format */

import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
const CustomTable = () => {
  const getData = item => {
    return <h6>{item}</h6>;
  };
  const defaultSorted = [
    {
      dataField: 'name',
      order: 'desc'
    }
  ];
  const products = [
    { id: 1, name: getData('Item 1'), price: 100 },
    { id: 2, name: getData('Item 2'), price: 102 },
    { id: 3, name: getData('Item 3'), price: 150 }
  ];
  const columns = [
    {
      dataField: 'id',
      text: 'Product ID',
      sort: true
    },
    {
      dataField: 'name',
      text: 'Product Name',
      sort: true
    },
    {
      dataField: 'price',
      text: 'Product Price',
      sort: true
    }
  ];
  return (
    <BootstrapTable
      bootstrap4
      keyField='id'
      data={products}
      columns={columns}
      defaultSorted={defaultSorted}
    />
  );
};
export default CustomTable;
