import React, { useState, useEffect } from 'react';
const initialItems = [
  { text: 'Apples', group: 'fruits' },
  { text: 'Papaya', group: 'fruits' },
  { text: 'Bananas', group: 'fruits' },
  { text: 'Broccoli', group: 'veg' },
  { text: 'Bacon', group: 'veg' },
  { text: 'Salmon', group: 'veg' },
  { text: 'Yogurt', group: 'veg' },
  { text: 'Chicken', group: 'nonveg' },
  { text: 'Eggs', group: 'nonveg' },
  { text: 'Beer', group: 'bev' },
  { text: 'Wine', group: 'bev' }
];
const FilteredList = () => {
  const [list, setList] = useState(initialItems);
  const [items, setItems] = useState([]);
  const filterList = event => {
    var updatedList = list;
    if (event.target.value.toLowerCase() !== 'all') {
      updatedList = updatedList.filter(
        item =>
          item.group.toLowerCase().search(event.target.value.toLowerCase()) !==
          -1
      );
      setItems(updatedList);
    }
  };
  useEffect(() => {
    setItems(initialItems);
  }, []);
  return (
    <div className='filter-list'>
      <input type='text' placeholder='Search' onChange={filterList} />
      <button value='fruits' type='button' onClick={filterList}>
        fruits
      </button>
      <button value='veg' type='button' onClick={filterList}>
        veg
      </button>
      <button value='nonveg' type='button' onClick={filterList}>
        nonveg
      </button>
      <button value='all' type='button' onClick={filterList}>
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
