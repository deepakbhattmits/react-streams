/** @format */

import React from 'react';
import { ReactComponent as DownArrowSVG } from '../../assets/images/icon-down-arrow.svg';
import { ReactComponent as UpArrowSVG } from '../../assets/images/icon-up-arrow.svg';
import BootstrapTable from 'react-bootstrap-table-next';
const CustomTable = () => {
  const getData = item => {
    return (
      <div
        key={item}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <span>TEST</span>
        <span>{item}</span>
      </div>
    );
  };
  //   const defaultSorted = [
  //     {
  //       dataField: 'name',
  //       order: 'desc'
  //     }
  //   ];
  const products = [
    { id: 1, name: getData('Item 1'), price: 100 },
    { id: 2, name: getData('Item 2'), price: 102 },
    { id: 3, name: getData('Item 3'), price: 150 },
    { id: 4, name: getData('Item 4'), price: 150 },
    { id: 5, name: getData('Item 5'), price: 150 },
    { id: 6, name: getData('Item 6'), price: 150 },
    { id: 7, name: getData('Item 7'), price: 150 },
    { id: 8, name: getData('Item 8'), price: 150 },
    { id: 9, name: getData('Item 9'), price: 150 },
    { id: 10, name: getData('Item 10'), price: 150 },
    { id: 11, name: getData('Item 11'), price: 150 },
    { id: 12, name: getData('Item 12'), price: 150 },
    { id: 13, name: getData('Item 13'), price: 150 }
  ];
  const columns = [
    {
      dataField: 'id',
      text: 'Product ID',
      sort: true,
      headerStyle: (colum, colIndex) => {
        return { width: '1rem', textAlign: 'left' };
      },
      sortFunc: (a, b, order, dataField, rowA, rowB) => {
        console.log(a, b, order, dataField, rowA, rowB);
        if (order === 'asc') return a - b;
        else return b - a;
      }
    },
    {
      dataField: 'name',
      text: 'Product Name',
      headerStyle: (colum, colIndex) => {
        return { width: '5rem', textAlign: 'center' };
      },
      sort: true,
      sortFunc: (a, b, order, dataField, rowA, rowB) => {
        console.log(
          'accumulator ',
          a,
          'next ',
          b,
          'order',
          order,
          'dataField',
          dataField,
          'rowA',
          rowA.id,
          'rowB',
          rowB.id
        );
        if (order === 'asc') return rowA.id - rowB.id;
        else return rowB.id - rowA.id;
      }
    },
    {
      dataField: 'price',
      text: 'Product Price',
      sort: true,
      headerStyle: (colum, colIndex) => {
        return { width: '2rem', textAlign: 'left' };
      }
    }
  ];
  const sortOption = {
    // No need to configure sortFunc per column
    // sortFunc: this.sortFunc,
    // No need to configure sortCaret per column
    sortCaret: (order, column) => {
      if (!order)
        return (
          <span className='caret'>
            <DownArrowSVG className='icon up --arrow' />
            <UpArrowSVG className='icon down --arrow' />
          </span>
        );
      else if (order === 'asc')
        return (
          <span className='caret asc'>
            <DownArrowSVG className='icon down --arrow' />
            <UpArrowSVG className='icon up --arrow' />

            {/* &nbsp;&nbsp;<font color='red'>Asc</font> */}
          </span>
        );
      else if (order === 'desc')
        return (
          <span className='caret desc'>
            <UpArrowSVG className='icon up --arrow' />
            <DownArrowSVG className='icon down --arrow' />
            {/* &nbsp;&nbsp;<font color='red'>Desc</font>/Asc */}
          </span>
        );
      return null;
    }
  };
  return (
    <BootstrapTable
      bootstrap4
      keyField='id'
      data={products}
      columns={columns}
      sort={sortOption}
      //   defaultSorted={defaultSorted}
    />
  );
};
export default CustomTable;
