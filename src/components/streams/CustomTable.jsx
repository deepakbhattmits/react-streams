/** @format */

import React from 'react';
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
        return { width: '80px', textAlign: 'center' };
      }
    },
    {
      dataField: 'name',
      text: 'Product Name',
      headerStyle: (colum, colIndex) => {
        return { width: '80px', textAlign: 'left' };
      },
      sort: true,
      // here, we implement a custom sort which perform a reverse sorting
      sortFunc: (a, b, order, dataField) => {
        console.log('test custom 0', a, b, order, dataField);
        if (order === 'asc') {
          return b - a;
        }
        return a - b; // desc
      },
      sortCaret: (order, column) => {
        console.log('test custom1');
        if (!order) return <span>&nbsp;&nbsp;Desc/Asc</span>;
        else if (order === 'asc')
          return (
            <span>
              &nbsp;&nbsp;Desc/<font color='red'>Asc</font>
            </span>
          );
        else if (order === 'desc')
          return (
            <span>
              &nbsp;&nbsp;<font color='red'>Desc</font>/Asc
            </span>
          );
        return null;
      }
    },
    {
      dataField: 'price',
      text: 'Product Price',
      sort: true,
      headerStyle: (colum, colIndex) => {
        return { width: '80px', textAlign: 'center' };
      }
    }
  ];
  const sortOption = {
    // No need to configure sortFunc per column
    // sortFunc: this.sortFunc,
    // No need to configure sortCaret per column
    sortCaret: (order, column) => {
      if (!order) return <span>&nbsp;&nbsp;Desc/Asc</span>;
      else if (order === 'asc')
        return (
          <span>
            &nbsp;&nbsp;Desc/<font color='red'>Asc</font>
          </span>
        );
      else if (order === 'desc')
        return (
          <span>
            &nbsp;&nbsp;<font color='red'>Desc</font>/Asc
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
