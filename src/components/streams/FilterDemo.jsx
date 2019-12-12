import React, { Component } from 'react';
class FilterDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          text: 'First Item',
          completed: false
        },
        {
          text: 'Second Item',
          completed: false
        },
        {
          text: 'Third Item',
          completed: true
        }
      ]
    };
    this.handleStatus = this.handleStatus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      text: this.refs.new.value,
      completed: false
    };
    this.setState({
      list: this.state.list.concat([newItem])
    });
    this.refs.new.value = '';
  }

  handleStatus(event) {
    const itemText = this.state.list[event.target.value].text;
    const itemStatus = this.state.list[event.target.value].completed;
    const newItem = {
      text: itemText,
      completed: itemStatus ? false : true
    };
    const list = this.state.list;
    list[event.target.value] = newItem;
    this.setState({
      list
    });
  }

  render() {
    const Item = this.state.list.map((item, index) => {
      return (
        <li
          onClick={this.handleStatus}
          className={item.completed ? 'done' : 'default'}
          value={index}
          status={item.completed}
        >
          {item.text}
        </li>
      );
    });

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='new'></input>
          <button type='submit'>Add</button>
        </form>
        <ul>{Item}</ul>
        <div>
          <button value='all' type='submit'>
            All
          </button>
          <button value='completed' type='submit'>
            Completed
          </button>
          <button value='pending' type='submit'>
            Pending
          </button>
        </div>
      </div>
    );
  }
}
export default FilterDemo;
