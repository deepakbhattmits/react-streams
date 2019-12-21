/** @format */

import React, { useState, useEffect } from 'react';
import { ReactComponent as DownArrowSVG } from '../../assets/images/icon-down-arrow.svg';
import { ReactComponent as UpArrowSVG } from '../../assets/images/icon-up-arrow.svg';
import BootstrapTable from 'react-bootstrap-table-next';
import TableModal from '../TableModal';
const CustomTable = props => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState(false);
  const getData = (id, item) => {
    return (
      <div
        key={item}
        id={id}
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
  const productsInitial = [
    { id: 1, name: 'Item 1', price: 100 },
    { id: 2, name: 'Item 2', price: 102 },
    { id: 3, name: 'Item 3', price: 150 },
    { id: 4, name: 'Item 4', price: 150 },
    { id: 5, name: 'Item 5', price: 150 },
    { id: 6, name: 'Item 6', price: 150 },
    { id: 7, name: 'Item 7', price: 150 },
    { id: 8, name: 'Item 8', price: 150 },
    { id: 9, name: 'Item 9', price: 150 },
    { id: 10, name: 'Item 10', price: 150 },
    { id: 11, name: 'Item 11', price: 150 },
    { id: 12, name: 'Item 12', price: 150 },
    { id: 13, name: 'Item 13', price: 150 }
  ];
  const products = [
    { id: 1, name: getData(1, 'Item 1'), price: 100 },
    { id: 2, name: getData(2, 'Item 2'), price: 102 },
    { id: 3, name: getData(3, 'Item 3'), price: 150 },
    { id: 4, name: getData(4, 'Item 4'), price: 150 },
    { id: 5, name: getData(5, 'Item 5'), price: 150 },
    { id: 6, name: getData(6, 'Item 6'), price: 150 },
    { id: 7, name: getData(7, 'Item 7'), price: 150 },
    { id: 8, name: getData(8, 'Item 8'), price: 150 },
    { id: 9, name: getData(9, 'Item 9'), price: 150 },
    { id: 10, name: getData(10, 'Item 10'), price: 150 },
    { id: 11, name: getData(11, 'Item 11'), price: 150 },
    { id: 12, name: getData(12, 'Item 12'), price: 150 },
    { id: 13, name: getData(13, 'Item 13'), price: 150 }
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
            <UpArrowSVG className='icon down --arrow' />
            <DownArrowSVG className='icon up --arrow' />
          </span>
        );
      else if (order === 'asc')
        return (
          <span className='caret asc'>
            <UpArrowSVG className='icon up --arrow' />
            <DownArrowSVG className='icon down --arrow' />

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
  const rowEvents = {
    onClick: (e, row, rowIndex) => {
      let data = {};
      console.log('e :', e.target, ' row :', row, ' rowIndex :', rowIndex);
      const element = productsInitial.filter(item => item.id === row.id);
      console.log('selected : ', element[0]);
      data['id'] = element[0].id;
      data['name'] = element[0].name;
      data['price'] = element[0].price;
      setData(data);
      setActive(true);
    }
  };
  return (
    <>
      <BootstrapTable
        bootstrap4
        keyField='id'
        data={products}
        columns={columns}
        sort={sortOption}
        rowEvents={rowEvents}
      />
      <TableModal
        title='selected data'
        content={data}
        active={active}
        onDismiss={() => setActive(false)}
      />
    </>
  );
};

export default CustomTable;
