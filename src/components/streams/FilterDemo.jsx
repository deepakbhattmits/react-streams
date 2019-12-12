import React, { useState, useEffect } from 'react';
const initialItems = [
  { text: 'Apples', group: 'fruits' },
  { text: 'Broccoli', group: 'veg' },
  { text: 'Chicken', group: 'non_veg' },
  { text: 'Bacon', group: 'veg' },
  { text: 'Eggs', group: 'non_veg' },
  { text: 'Salmon', group: 'veg' },
  { text: 'Bananas', group: 'fruits' },
  { text: 'Beer', group: 'bev' },
  { text: 'Wine', group: 'bev' },
  { text: 'Yogurt', group: 'veg' }
];
const FilteredList = () => {
  const [list, setList] = useState(initialItems);
  const [items, setItems] = useState([]);
  const filterList = event => {
    var updatedList = list;
    if (event.target.value.toLowerCase() !== 'all') {
      updatedList = updatedList.filter(function(item) {
        return (
          item.group.toLowerCase().search(event.target.value.toLowerCase()) !==
          -1
        );
      });
    }
    setItems(updatedList);
  };
  useEffect(() => {
    setItems(initialItems);
  }, []);
  return (
    <div className='filter-list'>
      <input type='text' placeholder='Search' onChange={filterList} />
      <button value='fruits' type='submit' onClick={filterList}>
        fruits
      </button>
      <button value='veg' type='submit' onClick={filterList}>
        veg
      </button>
      <button value='non_veg' type='submit' onClick={filterList}>
        nonveg
      </button>
      <button value='all' type='submit' onClick={filterList}>
        all
      </button>
      <List items={items} />
    </div>
  );
};

const List = props => {
  return (
    <ul>
      {props.items.map(function(item, i) {
        return <li key={i}>{item.text}</li>;
      })}
    </ul>
  );
};

export default FilteredList;
