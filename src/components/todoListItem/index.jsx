import React, { Component } from 'react';
import './todoListItem.css';

export default class TodoListItem extends Component {

  state = {
    done: false,
    important: false
  }

  onLabelClick = () => {
    this.setState({
      done: true,
      
    });
  }

  render () {
    const { label } = this.props;
    const { done, important } = this.state 
    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };

    let className = 'todo-list-item';

    if (done) {
      className += ' done';
    }
    return (
      <span className={ className }>
        <span
          className="todo-list-item-label"
          style={style}
          onClick={ this.onLabelClick }>
          { label }
        </span>
  
        <button 
          type="button"
          className="btn btn-outline-success btn-sm float-right">
          <i className="fa fa-exclamation" />
        </button>
  
        <button 
          type="button"
          className="btn btn-outline-danger btn-sm float-right">
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}